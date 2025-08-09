import { Command } from "commander";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { CONFIG_FILE } from "./constants";

const program = new Command();
program
  .name("fortinet-block-page-generator")
  .version("1.0.0")
  .description("Generate Fortinet block page");

program
  .command("init")
  .description("Initialise a new project")
  .argument("<name>", "name of the project")
  .option("-f, --force", "overwrite existing project")
  .action(async (name, options) => {
    console.log(`Initialising project ${name}`);
    // Check if project already exists
    if (fs.existsSync(name)) {
      // Check if project is directory
      let isDirectory = (await fsPromises.stat(name)).isDirectory();
      if (isDirectory) {
        // List files
        const files = await fsPromises.readdir(name);
        // Check if project is already initialised
        if (files.includes(CONFIG_FILE)) {
          if (options.force) {
            // Runs if -f is used
            console.log(`Project ${name} already exists, overwriting`);
          } else {
            console.error(
              `${name} has already been initialised, use -f to overwrite`,
            );
            process.exit(1);
          }
        }
        if (
          files.includes("index.html") ||
          files.includes("images") ||
          files.includes("build")
        ) {
          if (options.force) {
            // Runs if -f is used
            console.log(
              `Folder ${name} contains conflicting files, overwriting`,
            );
          } else {
            console.log(
              `Folder ${name} contains conflicting files, use -f to overwrite`,
            );
            process.exit(1);
          }
        }
      } else {
        console.error(`${name} exists and is not a directory`);
        process.exit(1);
      }
    } else {
      await fsPromises.mkdir(name);
    }
    // Create images if it doesn't exist
    if (!fs.existsSync(path.join(name, "images"))) {
      await fsPromises.mkdir(path.join(name, "images"));
    }
    // Create build if it doesn't exist
    if (!fs.existsSync(path.join(name, "build"))) {
      await fsPromises.mkdir(path.join(name, "build"));
    }
    // Write config file
    await fsPromises.writeFile(
      path.join(name, CONFIG_FILE),
      JSON.stringify(
        {
          main: "./index.html",
          images: "./images",
        },
        null,
        2,
      ),
    );
    // Write index.html file
    await fsPromises.writeFile(path.join(name, "index.html"), "");
  });
program
  .command("dev")
  .description("Run a live development server")
  .option("-f, --folder", "project folder (default: current directory)")
  .option("-p, --port", "port to listen on (default: 3000)")
  .option("-o, --open", "open in web browser");
program
  .command("build")
  .description("Build the Fortinet block page")
  .option("-f, --folder", "project folder (default: current directory)")
  .option("-o, --output", "output file (default: output/index.html)");

program.parse();
