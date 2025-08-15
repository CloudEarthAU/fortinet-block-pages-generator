import path from "path";
import fs from "fs";
import { CONFIG_FILE, PAGE_TYPES } from "../constants";

export async function build(
  inputtedFolder: string,
  inputtedOutput: string,
): Promise<any> {
  const folder = path.resolve(inputtedFolder || process.cwd());
  const output = path.resolve(inputtedOutput || path.join(folder, "build"));

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
    `Building project in ./${path.relative(process.cwd(), folder)} to ./${path.relative(process.cwd(), output)}`,
  );

  // Loop through all page types
  Object.entries(PAGE_TYPES).forEach(([type, value]) => {
    console.log(`Building ${type}`);
    fs.writeFileSync(path.join(output, `${value.fileName}.html`), value.name);
  });
}
