import path from "path";
import fs from "fs";
import { CONFIG_FILE, PAGE_TYPES } from "../constants";
import generatePage from "../generatePage";
import chokidar from "chokidar";
import browserSync from "browser-sync";

export async function dev(
  inputtedFolder: string,
  inputtedOutput: string,
): Promise<any> {
  const folder = path.resolve(inputtedFolder || process.cwd());
  const output = path.resolve(inputtedOutput || path.join(folder, "dev"));

  // Check if folder exists and is a project
  if (!fs.existsSync(folder)) {
    console.log(`Folder ${folder} does not exist`);
    process.exit(1);
  }
  if (!fs.existsSync(path.join(folder, CONFIG_FILE))) {
    console.log(
      "Configuration file not found, this is probably not a Fortinet Block Page Generator project",
    );
    process.exit(1);
  }

  // Check if output folder exists
  if (!fs.existsSync(output)) {
    console.log(`Output folder ${output} does not exist, creating`);
    fs.mkdirSync(output);
  }

  console.log(
    `Running dev server in ./${path.relative(process.cwd(), folder)}`,
  );

  // Loop through all page types
  const generate = () => {
    Object.entries(PAGE_TYPES).forEach(async ([type, value]) => {
      console.log(`Building ${type}`);
      const page = await generatePage(
        type as keyof typeof PAGE_TYPES,
        "dev",
        path.join(folder, "index.html"),
      );
      fs.writeFileSync(path.join(output, `${value.fileName}.html`), page);
    });
  };

  generate();

  browserSync.init({ server: output });
}
