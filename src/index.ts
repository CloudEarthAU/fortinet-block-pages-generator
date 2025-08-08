import { Command } from "commander";

const program = new Command();
program
  .name("fortinet-block-page-generator")
  .version("1.0.0")
  .description("Generate Fortinet block page");

program.command("init").description("Initialise a new project");
program.command("dev").description("Run a live development server");
program.command("build").description("Build the Fortinet block page");

program.parse();
