import { PAGE_TYPES, VARIABLES } from "./constants";

export function getDevTemplateData(_page: keyof typeof PAGE_TYPES) {
  const variables = Object.fromEntries(
    Object.entries(VARIABLES).map(([key, value]) => [key, value.default]),
  );
  const pageData = PAGE_TYPES[_page];
  return { variables, name: pageData.name, type: _page };
}

export function getBuildTemplateData(_page: keyof typeof PAGE_TYPES) {
  const variables = Object.fromEntries(
    Object.entries(VARIABLES).map(([key, value]) => [
      key,
      `%%${value.variable}%%`,
    ]),
  );
  const pageData = PAGE_TYPES[_page];
  return { variables, name: pageData.name, type: _page };
}
