import colors from "colors";
import fs from "fs";
import path from "path";
import net from "net";

/**
 * Interface for validation error details
 */
interface ValidationError {
  message: string;
  suggestion?: string;
  code?: string;
}

/**
 * Configuration options for file validation
 */
interface FileValidationOptions {
  allowedExtensions?: string[];
  maxSizeBytes?: number;
  checkReadable?: boolean;
  checkContent?: boolean;
}

/**
 * Configuration options for directory validation
 */
interface DirectoryValidationOptions {
  checkWritable?: boolean;
  createIfMissing?: boolean;
  recursive?: boolean;
}

/**
 * Validates that a file exists and meets specified criteria
 * @param filePath - Path to the file to validate
 * @param options - Validation options
 * @returns ValidationError if validation fails, null if successful
 */
export function validateInputFile(
  filePath: string,
  options: FileValidationOptions = {},
): ValidationError | null {
  const {
    allowedExtensions = [],
    maxSizeBytes = 10 * 1024 * 1024, // 10MB default
    checkReadable = true,
  } = options;

  // Check if file path is provided
  if (!filePath || filePath.trim() === "") {
    return {
      message: "No input file provided",
      suggestion: "Provide a file path as an argument or use -f option",
    };
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return {
      message: `File ${filePath} does not exist`,
      suggestion: "Check the file path and ensure the file exists",
    };
  }

  let fileStats: fs.Stats;
  try {
    fileStats = fs.statSync(filePath);
  } catch (error: any) {
    return {
      message: `Error accessing file ${filePath}: ${error.message}`,
      code: error.code,
    };
  }

  // Check if path is actually a file
  if (!fileStats.isFile()) {
    return {
      message: `${filePath} is not a file`,
      suggestion: "Ensure the path points to a file, not a directory",
    };
  }

  // Check if file is readable
  if (checkReadable) {
    try {
      fs.accessSync(filePath, fs.constants.R_OK);
    } catch (error: any) {
      return {
        message: `File ${filePath} is not readable`,
        suggestion:
          error.code === "EACCES" ? "Check file permissions" : undefined,
        code: error.code,
      };
    }
  }

  return null; // Validation passed
}

/**
 * Validates and prepares an output directory
 * @param outputPath - Path to the output directory
 * @param options - Directory validation options
 * @returns ValidationError if validation fails, null if successful
 */
export function validateOutputDirectory(
  outputPath: string,
  options: DirectoryValidationOptions = {},
): ValidationError | null {
  const {
    checkWritable = true,
    createIfMissing = true,
    recursive = true,
  } = options;

  // Check if output path is provided
  if (!outputPath || outputPath.trim() === "") {
    return {
      message: "No output directory provided",
      suggestion: "Use -o option to specify output directory",
    };
  }

  // Check if output path exists and what it is
  if (fs.existsSync(outputPath)) {
    try {
      const stats = fs.statSync(outputPath);
      if (stats.isFile()) {
        return {
          message: `Output path ${outputPath} exists and is a file, not a directory`,
          suggestion: "Choose a different path or remove the existing file",
        };
      }
    } catch (error: any) {
      return {
        message: `Error checking output path ${outputPath}: ${error.message}`,
        code: error.code,
      };
    }
  } else if (createIfMissing) {
    // Create directory if it doesn't exist
    try {
      console.log(colors.green(`Creating output folder ${outputPath}`));
      fs.mkdirSync(outputPath, { recursive });
    } catch (error: any) {
      let suggestion: string | undefined;

      switch (error.code) {
        case "EACCES":
          suggestion = "Check directory permissions";
          break;
        case "ENOTDIR":
          suggestion = "A parent path component is not a directory";
          break;
        case "ENOSPC":
          suggestion = "Not enough disk space";
          break;
      }

      return {
        message: `Failed to create output directory ${outputPath}: ${error.message}`,
        suggestion,
        code: error.code,
      };
    }
  }

  // Check if directory is writable
  if (checkWritable) {
    try {
      fs.accessSync(outputPath, fs.constants.W_OK);
    } catch (error: any) {
      return {
        message: `Output directory ${outputPath} is not writable`,
        suggestion:
          error.code === "EACCES" ? "Check directory permissions" : undefined,
        code: error.code,
      };
    }

    // Perform actual write test
    try {
      const testFile = path.join(outputPath, ".write_test");
      fs.writeFileSync(testFile, "test");
      fs.unlinkSync(testFile);
    } catch (error: any) {
      let suggestion: string | undefined;

      switch (error.code) {
        case "ENOSPC":
          suggestion = "Not enough disk space";
          break;
        case "EACCES":
          suggestion = "Check directory permissions";
          break;
      }

      return {
        message: `Cannot write to output directory ${outputPath}: ${error.message}`,
        suggestion,
        code: error.code,
      };
    }
  }

  return null; // Validation passed
}

/**
 * Validates a port number and checks if it's available
 * @param port - Port number to validate
 * @returns Promise that resolves to ValidationError if invalid, null if valid
 */
export function validatePort(port: number): Promise<ValidationError | null> {
  return new Promise((resolve) => {
    // Check port number range
    if (port < 1 || port > 65535) {
      resolve({
        message: `Invalid port number: ${port}. Must be between 1 and 65535`,
        suggestion: "Choose a port number between 1 and 65535",
      });
      return;
    }

    // Check if port is available
    const server = net.createServer();

    server.listen(port, () => {
      server.once("close", () => {
        resolve(null); // Port is available
      });
      server.close();
    });

    server.on("error", (error: any) => {
      if (error.code === "EADDRINUSE") {
        resolve({
          message: `Port ${port} is already in use`,
          suggestion: "Try using a different port with --live <port>",
          code: error.code,
        });
      } else {
        resolve({
          message: `Error checking port ${port}: ${error.message}`,
          code: error.code,
        });
      }
    });
  });
}

/**
 * Safely derives an output path from an input file path
 * @param filePath - Input file path
 * @returns Derived output path or null if derivation fails
 */
export function deriveOutputPath(filePath: string): string | null {
  if (!filePath || filePath.trim() === "") {
    return null;
  }

  const parsedPath = path.parse(filePath);
  if (!parsedPath.name) {
    return null;
  }

  return parsedPath.name;
}

/**
 * Displays a validation error with colored output
 * @param error - Validation error to display
 * @param exitOnError - Whether to exit the process after displaying error
 */
export function displayValidationError(
  error: ValidationError,
  exitOnError: boolean = true,
): void {
  console.error(colors.red(error.message));

  if (error.suggestion) {
    console.log(colors.yellow(error.suggestion));
  }

  if (exitOnError) {
    process.exit(1);
  }
}

/**
 * Sets up graceful shutdown handlers for the process
 * @param cleanupCallback - Optional cleanup function to call before exit
 */
export function setupGracefulShutdown(cleanupCallback?: () => void): void {
  const cleanup = () => {
    console.log(colors.yellow("\nCleaning up..."));

    if (cleanupCallback) {
      try {
        cleanupCallback();
      } catch (error: any) {
        console.error(colors.red(`Error during cleanup: ${error.message}`));
      }
    }

    process.exit(0);
  };

  // Handle Ctrl+C
  process.on("SIGINT", () => {
    console.log(colors.yellow("\nReceived SIGINT (Ctrl+C)"));
    cleanup();
  });

  // Handle termination signal
  process.on("SIGTERM", () => {
    console.log(colors.yellow("\nReceived SIGTERM"));
    cleanup();
  });

  // Handle uncaught exceptions
  process.on("uncaughtException", (error: Error) => {
    console.error(colors.red("Uncaught Exception:"), error.message);
    console.error(colors.red("Stack:"), error.stack);
    process.exit(1);
  });

  // Handle unhandled promise rejections
  process.on("unhandledRejection", (reason: any, promise: Promise<any>) => {
    console.error(colors.red("Unhandled Rejection at:"), promise);
    console.error(colors.red("Reason:"), reason);
    process.exit(1);
  });
}

/**
 * Validates all CLI arguments and options
 * @param file - Input file path
 * @param output - Output directory path
 * @param port - Port number for live server
 * @param action - Action to perform ('build' or 'live')
 * @returns Promise that resolves to true if all validations pass
 */
export async function validateCliArgs(
  file: string | undefined,
  output: string | undefined,
  port: number,
  action: string,
): Promise<boolean> {
  // Validate input file
  const fileError = validateInputFile(file || "", {
    allowedExtensions: [".json", ".yaml", ".yml", ".txt", ".html", ".htm"],
    checkReadable: true,
    checkContent: true,
  });

  if (fileError) {
    displayValidationError(fileError);
    return false;
  }

  // Derive output path if not provided
  let finalOutput = output;
  if (action === "build" && !output) {
    finalOutput = deriveOutputPath(file!) || undefined;
    if (!finalOutput) {
      displayValidationError({
        message: `Cannot derive output name from file ${file}`,
        suggestion: "Use -o option to specify output directory",
      });
      return false;
    }
  }

  // Validate output directory for build action
  if (action === "build" && finalOutput) {
    const outputError = validateOutputDirectory(finalOutput, {
      checkWritable: true,
      createIfMissing: true,
      recursive: true,
    });

    if (outputError) {
      displayValidationError(outputError);
      return false;
    }
  }

  // Validate port for live server action
  if (action === "live") {
    const portError = await validatePort(port);
    if (portError) {
      displayValidationError(portError);
      return false;
    }
  }

  return true;
}
