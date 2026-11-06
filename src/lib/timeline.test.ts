import { describe, expect, it } from "vite-plus/test";
import { axisYears, barPosition, runClimb, trackPath } from "./timeline";

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

  it("draws the first job as a flat run", () => {
    expect(trackPath(5, 20, { mid: 18, curve: 1, continues: true })).toBe("M 5 18 L 23 18");
  });

  it("climbs from the lane below and reaches the lane exactly at the job start", () => {
    expect(trackPath(25, 50, { mid: 18, rise: 36, curve: 1, continues: false })).toBe(
      "M 23 54 C 24 54 24 18 25 18 L 75 18",
    );
  });

  it("keeps rising within a job and starts the next climb from that height", () => {
    const opts = { mid: 18, curve: 1, slope: 0.5 };
    const earlier = trackPath(5, 20, { ...opts, continues: true });
    expect(earlier).toBe("M 5 18 L 23 9");
    const lift = runClimb(5, 20, { ...opts, continues: true });
    const later = trackPath(25, 50, { ...opts, rise: 36, lift, continues: false });
    expect(later.startsWith("M 23 45 ")).toBe(true);
  });

  it("meets the next job's climb where it begins", () => {
    const earlier = trackPath(5, 20, { mid: 18, curve: 1, continues: true });
    const later = trackPath(25, 50, { mid: 18, rise: 36, curve: 1, continues: false });
    expect(earlier.endsWith("L 23 18")).toBe(true);
    expect(later.startsWith("M 23 ")).toBe(true);
  });
});
