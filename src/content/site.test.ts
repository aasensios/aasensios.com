import { existsSync } from "node:fs";
import { describe, expect, it } from "vite-plus/test";
import { experienceLabel, site } from "./site";

const monthIndex = (ym: { year: number; month: number }) => ym.year * 12 + ym.month;

describe("site content", () => {
  it("lists the stack in the spec order", () => {
    expect(site.stack.map((t) => t.name)).toEqual([
      "Claude",
      "TypeScript",
      "React",
      "TanStack",
      "shadcn/ui",
      "Astro",
      "Vite+",
      "Nx",
      "pnpm",
      "Playwright",
      "Storybook",
      "Docker",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "ClickHouse",
    ]);
  });

  it("lists exactly the four side projects in order", () => {
    expect(site.projects.map((p) => p.title)).toEqual([
      "Google Forms clone",
      "Gmail clone",
      "Medical blog",
      "Ocikitos",
    ]);
  });

  it("labels consultancy roles as Employer (Client)", () => {
    expect(experienceLabel(site.experience[1])).toBe("Frontend Engineer at Cognizant (Inditex)");
    expect(experienceLabel(site.experience[0])).toBe("Product Engineer at TrustYou");
  });

  it("sorts experience newest first", () => {
    const starts = site.experience.map((e) => monthIndex(e.start));
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it("contains no em dashes or email links", () => {
    const json = JSON.stringify(site);
    expect(json).not.toContain("—");
    expect(json).not.toContain("mailto:");
  });

  it("references only images that exist in public/", () => {
    const paths = [
      ...site.experience.map((e) => e.icon),
      ...site.stack.map((t) => t.logo),
      ...site.links.map((l) => l.logo),
      site.avatar,
    ];
    for (const path of paths) expect(existsSync(`public${path}`), path).toBe(true);
  });
});
