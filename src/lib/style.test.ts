import { describe, expect, it } from "vite-plus/test";
import { DEFAULT_STYLE, readStoredStyle, writeStoredStyle } from "./style";

describe("readStoredStyle", () => {
  it("returns a valid stored style", () => {
    expect(readStoredStyle(() => ({ getItem: () => "saas" }))).toBe("saas");
  });

  it("falls back to marketing for empty, unknown, missing or throwing storage", () => {
    expect(readStoredStyle(() => ({ getItem: () => null }))).toBe(DEFAULT_STYLE);
    expect(readStoredStyle(() => ({ getItem: () => "brutalist" }))).toBe("marketing");
    expect(readStoredStyle(() => null)).toBe("marketing");
    expect(
      readStoredStyle(() => {
        throw new Error("SecurityError");
      }),
    ).toBe("marketing");
    expect(
      readStoredStyle(() => ({
        getItem: () => {
          throw new Error("denied");
        },
      })),
    ).toBe("marketing");
  });
});

describe("writeStoredStyle", () => {
  it("swallows storage errors", () => {
    expect(() =>
      writeStoredStyle(
        () => ({
          setItem: () => {
            throw new Error("quota");
          },
        }),
        "saas",
      ),
    ).not.toThrow();
  });
});
