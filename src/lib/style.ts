export const STYLES = ["marketing", "saas", "minimalist"] as const;

export type StyleId = (typeof STYLES)[number];

/** Shown on every page load; the toggle's choice is not persisted. */
export const DEFAULT_STYLE: StyleId = "marketing";

export const STYLE_LABELS: Record<StyleId, string> = {
  marketing: "Marketing",
  saas: "SaaS",
  minimalist: "Minimalist",
};

export function isStyleId(value: unknown): value is StyleId {
  return typeof value === "string" && (STYLES as readonly string[]).includes(value);
}
