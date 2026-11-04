export const STYLES = ["marketing", "saas", "minimalist"] as const;

export type StyleId = (typeof STYLES)[number];

export const DEFAULT_STYLE: StyleId = "marketing";

export const STORAGE_KEY = "aasensios:style";

export const STYLE_LABELS: Record<StyleId, string> = {
  marketing: "Marketing",
  saas: "SaaS",
  minimalist: "Minimalist",
};

export function isStyleId(value: unknown): value is StyleId {
  return typeof value === "string" && (STYLES as readonly string[]).includes(value);
}

/** The visitor's stored style, or the default when storage is missing, blocked or holds junk. */
export function readStoredStyle(
  getStorage: () => Pick<Storage, "getItem"> | null | undefined,
): StyleId {
  try {
    const value = getStorage()?.getItem(STORAGE_KEY);
    return isStyleId(value) ? value : DEFAULT_STYLE;
  } catch {
    return DEFAULT_STYLE;
  }
}

/** Remembers the visitor's style; silently does nothing when storage is unavailable. */
export function writeStoredStyle(
  getStorage: () => Pick<Storage, "setItem"> | null | undefined,
  style: StyleId,
): void {
  try {
    getStorage()?.setItem(STORAGE_KEY, style);
  } catch {
    // Storage blocked or full: the choice just won't persist.
  }
}
