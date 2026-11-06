/**
 * Source edits behind the dev-only GIF review: swapping one slot's GIF in site.ts and keeping
 * gif-sizes.ts in step. Pure string-in, string-out so they can be tested without touching disk.
 */

export type Theme = "light" | "dark";

const SLOT = /\{ light: "([A-Za-z0-9]+)", dark: "([A-Za-z0-9]+)" \}/g;

/** Every GIF id the site's links use, light and dark, across the week. */
export function usedGifs(site: string): Set<string> {
  return new Set([...site.matchAll(SLOT)].flatMap((m) => [m[1], m[2]]));
}

/** Puts `id` in one link's week (found by its tag), on `day` (0 is Sunday), for `theme`. */
export function swapGif(site: string, tag: string, day: number, theme: Theme, id: string): string {
  const start = site.indexOf(`tag: "${tag}"`);
  if (start < 0) throw new Error(`No link tagged ${tag}`);
  const gifs = site.indexOf("gifs: [", start);
  const slots = [...site.slice(gifs).matchAll(SLOT)].slice(0, 7);
  const slot = slots[day];
  if (!slot || slot.index === undefined) throw new Error(`No ${tag} GIF for day ${day}`);
  const [, light, dark] = slot;
  const next = theme === "light" ? { light: id, dark } : { light, dark: id };
  const at = gifs + slot.index;
  return `${site.slice(0, at)}{ light: "${next.light}", dark: "${next.dark}" }${site.slice(at + slot[0].length)}`;
}

const SIZE = /^\s+"?([A-Za-z0-9]+)"?: \[\d+, \d+\],\n/gm;

/** Adds the new GIF's size and drops sizes for GIFs nothing uses any more. */
export function syncSizes(
  sizes: string,
  used: Set<string>,
  add?: { id: string; width: number; height: number },
): string {
  let out = sizes.replace(SIZE, (line, id: string) => (used.has(id) ? line : ""));
  if (add && !new RegExp(`"?${add.id}"?: \\[`).test(out)) {
    out = out.replace(/\n};\s*$/, `\n  "${add.id}": [${add.width}, ${add.height}],\n};\n`);
  }
  return out;
}

/** A GIF's width and height, from bytes 6–9 of its header (little-endian). */
export function gifHeaderSize(bytes: Uint8Array): { width: number; height: number } {
  return { width: bytes[6] + bytes[7] * 256, height: bytes[8] + bytes[9] * 256 };
}

/** Giphy ids of the results on a search page, in order; page decorations aren't tagged this way. */
export function giphyIds(html: string): string[] {
  const ids = [...html.matchAll(/data-giphy-id="([A-Za-z0-9]{8,})"/g)];
  return [...new Set(ids.map((m) => m[1]))];
}
