import { existsSync } from "node:fs";
import { describe, expect, it } from "vite-plus/test";
import { site } from "./site";

const monthIndex = (ym: { year: number; month: number }) => ym.year * 12 + ym.month;

describe("site content", () => {
  it("sorts experience newest first", () => {
    const starts = site.experience.map((e) => monthIndex(e.start));
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it("computes the years in the facts sentence instead of hardcoding them", () => {
    expect(site.copy.facts(8)).toContain("more than 8 years");
  });

  it("gives each contact button 28 distinct memes: a dog and a cat for every day", () => {
    const ids = site.links.flatMap((l) => l.gifs.flatMap((d) => [d.light, d.dark]));
    expect(ids).toHaveLength(28);
    expect(new Set(ids).size).toBe(28);
  });

  it("references logos that exist in src/assets/logos/", () => {
    for (const e of site.experience) {
      expect(existsSync(`src/assets/logos/${e.logo}`)).toBe(true);
    }
  });
});
