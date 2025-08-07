import commander from "commander";

const program = new commander.Command();
program
  .version("1.0.0")
  .description("A CLI tool to create blocked pages for Fortigate firewalls")
  .option("-l, --live", "run a live webserver to see changes in realtime")
  .option("-f, --file <file>", "input file")
  .option("-b, --build", "build block pages")
  .option("-o, --output <folder>", "output folder")
  .argument("[file]", "input file");

program.parse();

const options = program.opts();
const args = program.args;
const file = options.file || args[0];
