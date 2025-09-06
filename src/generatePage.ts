import Twig from "twig";
import fs from "fs";
import path from "path";
import { inlineSource } from "inline-source";
import { PAGE_TYPES, VARIABLES } from "./constants";
import { getTemplateData } from "./utils";
import { minify } from "html-minifier-terser";

export default async function generatePage(
  type: keyof typeof PAGE_TYPES,
  env: "dev" | "build",
  filePath: string,
) {
  if (!fs.existsSync(filePath)) {
    console.log(`${filePath} does not exist.`);
    process.exit(1);
  }

  const directory = path.dirname(filePath);

  const inlinedHtml = await inlineSource(filePath, {
    compress: true,
    rootpath: directory,
    attribute: false,
    swallowErrors: true,
  });

  const htmlWithTemplates = Twig.twig({
    data: inlinedHtml,
  }).render(getTemplateData(type, env));

  const minifiedHtml = await minify(htmlWithTemplates, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  });

  return minifiedHtml;
}
