import { PAGE_TYPES, VARIABLES } from "./constants";

export function getDevTemplateData(_page: keyof typeof PAGE_TYPES) {
  const variables = Object.fromEntries(
    Object.entries(VARIABLES).map(([key, value]) => [key, value.default]),
  );
  return { variables };
}

export function getBuildTemplateData(_page: keyof typeof PAGE_TYPES) {
  const variables = Object.fromEntries(
    Object.entries(VARIABLES).map(([key, value]) => [
      key,
      `%%${value.variable}%%`,
    ]),
  );
  return { variables };
}
