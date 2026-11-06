export function previewHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

/** Screenshots live in src/assets/previews, named after the site's host without its TLD. */
export function previewName(url: string): string {
  return previewHost(url).split(".")[0];
}
