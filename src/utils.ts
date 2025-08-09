import { PAGE_TYPES, VARIABLES } from "./constants";

export function getTemplateData(
  _page: keyof typeof PAGE_TYPES,
  _type: "dev" | "build",
) {
  const variables = Object.fromEntries(
    Object.entries(VARIABLES).map(([key, value]) => [
      key,
      _type == "dev" ? value.default : `%%${value.variable}%%`,
    ]),
  );
  const pageData = PAGE_TYPES[_page];
  return { variables, name: pageData.name, type: _page };
}
