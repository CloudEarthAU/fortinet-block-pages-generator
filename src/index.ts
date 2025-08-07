import commander from "commander";
import colors from "colors";
import fs from "fs";
import path from "path";
import net from "net";

const program = new commander.Command();
program
  .version("1.0.0")
  .description("A CLI tool to create blocked pages for Fortigate firewalls")
  .option(
    "-l, --live [port]",
    "run a live webserver to see changes in realtime",
  )
  .option("-b, --build", "build block pages")
  .option("-f, --file <file>", "input file")
  .option("-o, --output <folder>", "output folder")
  .argument("[file]", "input file");

program.parse();

const options = program.opts();
const args = program.args;
const action = options.build ? "build" : "live";
const file = options.file || args[0];

// Safe output path derivation
const output =
  options.output ||
  (() => {
    if (!file) return null;
    const parsedPath = path.parse(file);
    if (!parsedPath.name) {
      console.error(colors.red(`Cannot derive output name from file ${file}`));
      process.exit(1);
    }
    return parsedPath.name;
  })();

const port = parseInt(options.live) || 3000;

// Validate port number
if (action === "live") {
  if (port < 1 || port > 65535) {
    console.error(
      colors.red(`Invalid port number: ${port}. Must be between 1 and 65535`),
    );
    process.exit(1);
  }
}

// Check if input file is provided
if (!file) {
  console.error(colors.red("No input file provided"));
  process.exit(1);
}

// Check if file exists
if (!fs.existsSync(file)) {
  console.error(colors.red(`File ${file} does not exist`));
  process.exit(1);
}

// Verify file is readable
try {
  fs.accessSync(file, fs.constants.R_OK);
} catch (error: any) {
  console.error(colors.red(`File ${file} is not readable`));
  if (error.code === "EACCES") {
    console.log(colors.yellow("Check file permissions"));
  }
  process.exit(1);
}

// Validate file isn't empty and get stats
let fileStats;
try {
  fileStats = fs.statSync(file);
  if (fileStats.size === 0) {
    console.error(colors.red(`File ${file} is empty`));
    process.exit(1);
  }

  // Check if it's actually a file, not a directory
  if (!fileStats.isFile()) {
    console.error(colors.red(`${file} is not a file`));
    process.exit(1);
  }

  // Warn about very large files (>10MB)
  if (fileStats.size > 10 * 1024 * 1024) {
    console.log(
      colors.yellow(
        `Warning: ${file} is quite large (${Math.round(fileStats.size / 1024 / 1024)}MB)`,
      ),
    );
  }
} catch (error: any) {
  console.error(
    colors.red(`Error reading file stats for ${file}: ${error.message}`),
  );
  process.exit(1);
}

// File type/extension validation (adjust allowedExtensions as needed)
const allowedExtensions = [".json", ".yaml", ".yml", ".txt", ".html", ".htm"];
const fileExtension = path.extname(file).toLowerCase();

if (
  allowedExtensions.length > 0 &&
  !allowedExtensions.includes(fileExtension)
) {
  console.error(
    colors.red(
      `Unsupported file type: ${fileExtension}. Supported types: ${allowedExtensions.join(", ")}`,
    ),
  );
  process.exit(1);
}

// Test file readability
try {
  const fileContent = fs.readFileSync(file, "utf8");
  if (!fileContent.trim()) {
    console.error(
      colors.red(
        `File ${file} appears to be empty or contains only whitespace`,
      ),
    );
    process.exit(1);
  }
  // You can add specific content validation here based on your file format
} catch (error: any) {
  if (error.code === "ENOENT") {
    console.error(colors.red(`File ${file} not found`));
  } else if (error.code === "EACCES") {
    console.error(colors.red(`Permission denied reading ${file}`));
  } else if (error.code === "EISDIR") {
    console.error(colors.red(`${file} is a directory, not a file`));
  } else {
    console.error(colors.red(`Error reading file ${file}: ${error.message}`));
  }
  process.exit(1);
}

// Handle build action
if (action === "build") {
  if (!output) {
    console.error(colors.red("No output folder provided"));
    process.exit(1);
  }

  // Check if output path already exists as a file
  if (fs.existsSync(output)) {
    try {
      const outputStats = fs.statSync(output);
      if (outputStats.isFile()) {
        console.error(
          colors.red(
            `Output path ${output} exists and is a file, not a directory`,
          ),
        );
        process.exit(1);
      }
    } catch (error: any) {
      console.error(
        colors.red(`Error checking output path ${output}: ${error.message}`),
      );
      process.exit(1);
    }
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(output)) {
    try {
      console.log(colors.green(`Creating output folder ${output}`));
      fs.mkdirSync(output, { recursive: true });
    } catch (error: any) {
      console.error(
        colors.red(
          `Failed to create output directory ${output}: ${error.message}`,
        ),
      );
      if (error.code === "EACCES") {
        console.log(colors.yellow("Check directory permissions"));
      } else if (error.code === "ENOTDIR") {
        console.log(
          colors.yellow("A parent path component is not a directory"),
        );
      }
      process.exit(1);
    }
  }

  // Verify output directory is writable
  try {
    fs.accessSync(output, fs.constants.W_OK);
  } catch (error: any) {
    console.error(colors.red(`Output directory ${output} is not writable`));
    if (error.code === "EACCES") {
      console.log(colors.yellow("Check directory permissions"));
    }
    process.exit(1);
  }

  // Check available disk space (basic check)
  try {
    const testFile = path.join(output, ".write_test");
    fs.writeFileSync(testFile, "test");
    fs.unlinkSync(testFile);
  } catch (error: any) {
    console.error(
      colors.red(
        `Cannot write to output directory ${output}: ${error.message}`,
      ),
    );
    if (error.code === "ENOSPC") {
      console.log(colors.yellow("Not enough disk space"));
    }
    process.exit(1);
  }

  console.log(colors.green(`Building block pages from ${file}`));
  console.log(colors.cyan(`Output directory: ${path.resolve(output)}`));
} else {
  // Handle live server action

  // Check if port is available
  const checkPort = (port: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const server = net.createServer();
      server.listen(port, () => {
        server.once("close", () => resolve(true));
        server.close();
      });
      server.on("error", () => resolve(false));
    });
  };

  // Check port availability
  checkPort(port)
    .then((available) => {
      if (!available) {
        console.error(colors.red(`Port ${port} is already in use`));
        console.log(
          colors.yellow(`Try using a different port with --live <port>`),
        );
        process.exit(1);
      }

      console.log(colors.green(`Running live webserver from ${file}`));
      console.log(colors.cyan(`Server will start on port ${port}`));
      console.log(colors.cyan(`File path: ${path.resolve(file)}`));
    })
    .catch((error: any) => {
      console.error(
        colors.red(`Error checking port availability: ${error.message}`),
      );
      process.exit(1);
    });
}

// Graceful shutdown handling
const cleanup = () => {
  console.log(colors.yellow("\nCleaning up..."));
  // Add any cleanup logic here (close servers, temp files, etc.)
  process.exit(0);
};

process.on("SIGINT", () => {
  console.log(colors.yellow("\nReceived SIGINT (Ctrl+C)"));
  cleanup();
});

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
process.on("unhandledRejection", (reason, promise) => {
  console.error(colors.red("Unhandled Rejection at:"), promise);
  console.error(colors.red("Reason:"), reason);
  process.exit(1);
});
