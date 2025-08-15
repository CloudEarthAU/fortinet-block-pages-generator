import Twig from "twig";
import fs from "fs";
import { PAGE_TYPES, VARIABLES } from "./constants";
import { getTemplateData } from "./utils";

export default async function generatePage(
  type: keyof typeof PAGE_TYPES,
  env: "dev" | "build",
  path: string,
) {
  if (!fs.existsSync(path)) {
    console.log(`${path} does not exist.`);
    process.exit(1);
  }

  const html = await new Promise<string>((resolve, reject) => {
    Twig.renderFile(path, getTemplateData(type, env), (err, html) => {
      resolve(html);
    });
  });

  return html;
}
