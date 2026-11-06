import { describe, expect, it } from "vite-plus/test";
import { axisYears, barPosition, logEase, runClimb, trackPath } from "./timeline";

describe("timeline", () => {
  const now = { year: 2026, month: 11 };

  it("spans Jan of firstYear to Dec of the current year", () => {
    expect(axisYears(2019, now)).toEqual([2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]);
  });

  it("positions bars by months", () => {
    const p = barPosition({ year: 2022, month: 8 }, null, 2019, now);
    expect(p.left).toBeCloseTo((43 / 96) * 100, 5);
    expect(p.width).toBeCloseTo((52 / 96) * 100, 5);
  });

  it("keeps the present bar inside the axis after a January rebuild", () => {
    const jan = { year: 2027, month: 1 };
    expect(axisYears(2019, jan).at(-1)).toBe(2027);
    const p = barPosition({ year: 2022, month: 8 }, null, 2019, jan);
    expect(p.left + p.width).toBeLessThanOrEqual(100);
  });

  it("ends a bar where the next job starts when they share a month", () => {
    const bsc = barPosition({ year: 2019, month: 6 }, { year: 2021, month: 6 }, 2019, now, {
      year: 2021,
      month: 6,
    });
    const capitole = barPosition({ year: 2021, month: 6 }, { year: 2021, month: 11 }, 2019, now);
    expect(bsc.left + bsc.width).toBeCloseTo(capitole.left, 5);
  });

  it("keeps the inclusive end month when the next job starts later", () => {
    const p = barPosition({ year: 2021, month: 6 }, { year: 2021, month: 11 }, 2019, now, {
      year: 2021,
      month: 12,
    });
    expect(p.width).toBeCloseTo((6 / 96) * 100, 5);
  });

  it("draws a job without growth as a flat run", () => {
    expect(trackPath(5, 20, { mid: 18, curve: 1, continues: true })).toMatch(
      /^M 5 18 (L [\d.]+ 18 ?)+$/,
    );
  });

  it("climbs in from the lane below and reaches the lane exactly at the job start", () => {
    const d = trackPath(25, 50, { mid: 18, rise: 36, curve: 1, continues: false });
    expect(d.startsWith("M 23 54 C 24 54 24 18 25 18 ")).toBe(true);
    expect(d.endsWith("L 75 18")).toBe(true);
  });

  it("grows logarithmically: steep early, level late, longer jobs climb more", () => {
    expect(logEase(0)).toBe(0);
    expect(logEase(1)).toBeCloseTo(1, 10);
    expect(logEase(0.25)).toBeGreaterThan(0.25);
    const opts = { mid: 18, curve: 1, growth: 3, continues: false };
    expect(runClimb(5, 40, opts)).toBeGreaterThan(runClimb(5, 10, opts));
    expect(runClimb(5, 40, opts) / runClimb(5, 10, opts)).toBeLessThan(4);
  });

  it("starts the next job's climb from where the earlier run ended", () => {
    const opts = { mid: 18, curve: 1, growth: 3 };
    const earlier = trackPath(5, 20, { ...opts, continues: true });
    const lift = runClimb(5, 20, { ...opts, continues: true });
    expect(earlier.endsWith(`L 23 ${Math.round((18 - lift) * 1000) / 1000}`)).toBe(true);
    const later = trackPath(25, 50, { ...opts, rise: 36, lift, continues: false });
    expect(later.startsWith(`M 23 ${Math.round((54 - lift) * 1000) / 1000} `)).toBe(true);
  });
});
