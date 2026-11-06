import { describe, expect, it } from "vite-plus/test";
import { careerY, curvePath, logEase } from "./curve";

describe("career curve", () => {
  const box = { from: 10, top: 10, bottom: 130 };

  it("eases logarithmically: steep early, level late", () => {
    expect(logEase(0)).toBe(0);
    expect(logEase(1)).toBeCloseTo(1, 10);
    expect(logEase(0.25)).toBeGreaterThan(0.5);
  });

  it("runs from the bottom at the first job to the top today", () => {
    expect(careerY(10, box)).toBe(130);
    expect(careerY(100, box)).toBeCloseTo(10, 10);
    expect(careerY(0, box)).toBe(130);
  });

  it("climbs more in its first half than its second", () => {
    const early = careerY(10, box) - careerY(55, box);
    const late = careerY(55, box) - careerY(100, box);
    expect(early).toBeGreaterThan(late * 2);
  });

  it("joins neighbouring jobs exactly, since each is a slice of the same curve", () => {
    const y = (x: number) => careerY(x, box);
    const a = curvePath(10, 30, y);
    const b = curvePath(30, 100, y);
    expect(a.split(" L ").at(-1)).toBe(b.slice(2).split(" L ")[0]);
  });
});
