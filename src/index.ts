import commander from "commander";
import colors from "colors";
import fs from "fs";
import path from "path";

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
const output = options.output || file.split(".").slice(0, -1).join(".");
console.log(output);
const port = options.live || 3000;

if (!file) {
  console.error(colors.red("No input file provided"));
  process.exit(1);
}

if (!fs.existsSync(file)) {
  console.error(colors.red(`File ${file} does not exist`));
  process.exit(1);
}

if (action === "build") {
  if (!output) {
    console.error(colors.red("No output folder provided"));
    process.exit(1);
  }

  if (!fs.existsSync(output)) {
    console.error(colors.green(`Creating output folder ${output}`));
    fs.mkdirSync(output);
  }

  console.log(colors.green(`Building block pages from ${file}`));
} else {
  console.log(colors.green(`Running live webserver from ${file}`));
}
