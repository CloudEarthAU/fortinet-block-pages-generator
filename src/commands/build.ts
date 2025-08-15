import path from "path";

export async function build(
  inputtedFolder: string,
  inputtedOutput: string,
): Promise<any> {
  console.log(process.cwd());
  const folder = path.resolve(inputtedFolder || process.cwd());
  const output = path.resolve(inputtedOutput || path.join(folder, "output"));

  console.log(`Building project in ${folder} to ${output}`);
}
