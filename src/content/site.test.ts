import { existsSync } from "node:fs";
import { describe, expect, it } from "vite-plus/test";
import { site } from "./site";

const monthIndex = (ym: { year: number; month: number }) => ym.year * 12 + ym.month;

describe("site content", () => {
  it("lists exactly the four side projects in order", () => {
    expect(site.projects.map((p) => p.title)).toEqual([
      "Google Forms clone",
      "Gmail clone",
      "Medical blog",
      "Ocikitos",
    ]);
  });

  it("sorts experience newest first", () => {
    const starts = site.experience.map((e) => monthIndex(e.start));
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it("computes the years in the facts sentence instead of hardcoding them", () => {
    expect(site.copy.facts(8)).toContain("more than 8 years");
  });

  it("contains no em dashes or email links", () => {
    const json = JSON.stringify(site);
    expect(json).not.toContain("—");
    expect(json).not.toContain("mailto:");
  });

  it("references logos that exist in src/assets/logos/", () => {
    for (const e of site.experience) {
      expect(existsSync(`src/assets/logos/${e.logo}`)).toBe(true);
    }
  });
});
