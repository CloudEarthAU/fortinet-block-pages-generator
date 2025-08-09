import { PAGE_TYPES, VARIABLES } from "./constants";

export function getTemplateData(
  _page: keyof typeof PAGE_TYPES,
  _type: "dev" | "build",
) {
  const pageData = PAGE_TYPES[_page];
  const variables = Object.fromEntries(
    Object.entries(VARIABLES).map(([key, value]) => [
      key,
      _type == "dev" ? value.default : `%%${value.variable}%%`,
    ]),
  );

  const details = pageData.details.map((detail) => ({
    title: detail.title,
    value: _type == "dev" ? detail.value.default : detail.value,
  }));

  return { variables, name: pageData.name, type: _page };
}
