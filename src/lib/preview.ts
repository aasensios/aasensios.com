/**
 * A fresh screenshot of a website, rendered on demand by Microlink's free API and cached on
 * its CDN. The image is requested by the visitor's browser only when a preview is shown.
 */
export function previewImage(url: string): string {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "screenshot.type": "jpeg",
    "viewport.width": "1280",
    "viewport.height": "800",
  });
  return `https://api.microlink.io/?${params}`;
}

/** The host a visitor will land on, without the `www.` noise. */
export function previewHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}
