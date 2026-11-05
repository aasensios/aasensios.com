import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vite-plus/test";
import { DEFAULT_STYLE, isStyleId } from "./style";

describe("isStyleId", () => {
  it("accepts only the three style ids", () => {
    expect(isStyleId("marketing")).toBe(true);
    expect(isStyleId("saas")).toBe(true);
    expect(isStyleId("minimalist")).toBe(true);
    expect(isStyleId("brutalist")).toBe(false);
    expect(isStyleId(undefined)).toBe(false);
  });

  it("defaults to marketing", () => {
    expect(DEFAULT_STYLE).toBe("marketing");
  });
});

describe("browser storage", () => {
  const sourceFiles = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return sourceFiles(path);
      return /\.(astro|ts|js)$/.test(entry.name) && !entry.name.endsWith(".test.ts") ? [path] : [];
    });

  it("is never used: the style choice is not persisted", () => {
    const offenders = sourceFiles("src").filter((file) =>
      /\b(localStorage|sessionStorage|indexedDB|document\.cookie)\b/.test(
        readFileSync(file, "utf8"),
      ),
    );
    expect(offenders).toEqual([]);
  });
});
