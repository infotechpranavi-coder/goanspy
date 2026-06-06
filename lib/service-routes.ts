export const SERVICES_HUB_PATH = "/services";

export function servicePagePath(slug: string) {
  return `${SERVICES_HUB_PATH}/${slug}`;
}
