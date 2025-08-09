import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { CONFIG_FILE } from "./constants";

export async function init(projectName: string, options: any): Promise<void> {
  console.log(`Initialising project ${projectName}`);

  try {
    // Check if project path already exists
    if (fs.existsSync(projectName)) {
      // Verify the existing path is a directory
      const pathStats = await fsPromises.stat(projectName);
      if (pathStats.isDirectory()) {
        // Get list of existing files in the directory
        const existingFiles = await fsPromises.readdir(projectName);

        // Check if project is already initialised by looking for config file
        const isAlreadyInitialized = existingFiles.includes(CONFIG_FILE);
        if (isAlreadyInitialized) {
          if (options.force) {
            console.log(`Project ${projectName} already exists, overwriting`);
          } else {
            console.error(
              `${projectName} has already been initialised, use -f to overwrite`,
            );
            process.exit(1);
          }
        }

        // Check for conflicting files that would be overwritten
        const conflictingFiles = ["index.html", "images", "build"];
        const hasConflicts = conflictingFiles.some((file) =>
          existingFiles.includes(file),
        );

        if (hasConflicts) {
          if (options.force) {
            console.log(
              `Folder ${projectName} contains conflicting files, overwriting`,
            );
          } else {
            console.log(
              `Folder ${projectName} contains conflicting files, use -f to overwrite`,
            );
            process.exit(1);
          }
        }
      } else {
        console.error(`${projectName} exists and is not a directory`);
        process.exit(1);
      }
    } else {
      // Create the project directory if it doesn't exist
      await fsPromises.mkdir(projectName);
    }
    // Ensure required subdirectories exist
    const requiredDirs = ["images", "build"];
    for (const dirName of requiredDirs) {
      const dirPath = path.join(projectName, dirName);
      if (!fs.existsSync(dirPath)) {
        await fsPromises.mkdir(dirPath);
      }
    }
    // Create the default configuration file
    const defaultConfig = {
      main: "./index.html",
      images: "./images",
    };

    await fsPromises.writeFile(
      path.join(projectName, CONFIG_FILE),
      JSON.stringify(defaultConfig, null, 2),
    );

    // Create an empty index.html file as the main entry point
    await fsPromises.writeFile(path.join(projectName, "index.html"), "");

    console.log(`Project ${projectName} initialized successfully`);
  } catch (error) {
    console.error(`Failed to initialize project ${projectName}:`, error);
    process.exit(1);
  }
}
