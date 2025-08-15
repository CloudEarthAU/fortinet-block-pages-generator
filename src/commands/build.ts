import path from "path";
import fs from "fs";

export async function build(
  inputtedFolder: string,
  inputtedOutput: string,
): Promise<any> {
  const folder = path.resolve(inputtedFolder || process.cwd());
  const output = path.resolve(inputtedOutput || path.join(folder, "build"));

  if (!fs.existsSync(folder)) {
    console.log(`Folder ${folder} does not exist`);
    process.exit(1);
  }

  if (!fs.existsSync(output)) {
    console.log(`Output folder ${output} does not exist, creating`);
    fs.mkdirSync(output);
  }

  console.log(
    `Building project in ./${path.relative(process.cwd(), folder)} to ./${path.relative(process.cwd(), output)}`,
  );
}
