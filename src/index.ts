import { Command } from "commander";
import { init } from "./commands/init";
import { build } from "./commands/build";

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
  .action(init);
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
  .option("-o, --output", "output file (default: output/index.html)")
  .action(build);

program.parse();
