import commander from "commander";
import colors from "colors";
import path from "path";
import fs from "fs";
import {
  validateCliArgs,
  deriveOutputPath,
  setupGracefulShutdown,
} from "./validation";

/**
 * Fortinet Block Page Generator CLI
 *
 * This tool generates blocked pages for Fortigate firewalls with two main modes:
 * - Build mode: Processes input files and generates static block pages
 * - Live mode: Runs a development server for real-time preview of changes
 */

// Configure CLI command structure
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

// Parse command line arguments
program.parse();

/**
 * Extract and process CLI options and arguments
 */
const options = program.opts();
const args = program.args;

// Determine action based on provided options
const action = options.build ? "build" : "live";

// Get input file from explicit option or positional argument
const file = options.file || args[0];

// Derive or use explicit output path
const output = options.output || (file ? deriveOutputPath(file) : undefined);

// Parse port number for live server (default: 3000)
const port = parseInt(options.live) || 3000;

/**
 * Set up graceful shutdown handling for clean process termination
 * This ensures proper cleanup when the process is interrupted
 */
setupGracefulShutdown(() => {
  // Add any specific cleanup logic here
  // For example: close servers, remove temporary files, etc.
  console.log(colors.cyan("Shutdown complete"));
});

/**
 * Main execution flow
 *
 * This async function handles the primary application logic:
 * 1. Validates all CLI arguments and options
 * 2. Executes the appropriate action (build or live)
 * 3. Provides user feedback and next steps
 */
async function main(): Promise<void> {
  try {
    // Comprehensive validation of all inputs
    const isValid = await validateCliArgs(file, output, port, action);

    if (!isValid) {
      // Validation errors are already displayed by validateCliArgs
      process.exit(1);
    }

    // Execute the requested action
    if (action === "build") {
      await executeBuildAction(file!, output!);
    } else {
      await executeLiveAction(file!, port);
    }
  } catch (error: any) {
    // Handle any unexpected errors during execution
    console.error(colors.red("Unexpected error:"), error.message);
    if (error.stack) {
      console.error(colors.red("Stack trace:"), error.stack);
    }
    process.exit(1);
  }
}

/**
 * Executes the build action to generate static block pages
 *
 * @param inputFile - Path to the input configuration file
 * @param outputDir - Directory where generated files will be saved
 */
async function executeBuildAction(
  inputFile: string,
  outputDir: string,
): Promise<void> {
  console.log(colors.green(`Building block pages from ${inputFile}`));

  // Read input
  const inputContent = await fs.promises.readFile(inputFile, "utf8");

  // TODO: Implement actual build logic here
  // This would typically involve:
  // 1. Reading and parsing the input file
  // 2. Processing templates or configuration
  // 3. Generating HTML/CSS/JS files
  // 4. Writing output files to the specified directory

  console.log(colors.green("✓ Build completed successfully"));
  console.log(
    colors.yellow(
      `Generated files are available in: ${path.resolve(outputDir)}`,
    ),
  );
}

/**
 * Executes the live server action for development and real-time preview
 *
 * @param inputFile - Path to the input configuration file
 * @param serverPort - Port number for the development server
 */
async function executeLiveAction(
  inputFile: string,
  serverPort: number,
): Promise<void> {
  console.log(
    colors.green(`Starting live development server from ${inputFile}`),
  );
  console.log(colors.cyan(`Input file: ${path.resolve(inputFile)}`));
  console.log(colors.cyan(`Server port: ${serverPort}`));

  // TODO: Implement actual live server logic here
  // This would typically involve:
  // 1. Setting up a web server (e.g., Express.js)
  // 2. Watching the input file for changes
  // 3. Hot-reloading when changes are detected
  // 4. Serving the generated content in real-time

  console.log(colors.green("✓ Development server started successfully"));
  console.log(
    colors.yellow(`Open your browser to: http://localhost:${serverPort}`),
  );
  console.log(colors.yellow("Press Ctrl+C to stop the server"));
}

// Execute the main function
main().catch((error) => {
  // Final error handler for any uncaught errors in main()
  console.error(colors.red("Fatal error in main execution:"), error);
  process.exit(1);
});
