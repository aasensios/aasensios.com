import { describe, expect, it } from "vite-plus/test";
import { barPosition, yearSpans } from "./timeline";

describe("timeline", () => {
  const first = { year: 2019, month: 6 };
  const now = { year: 2026, month: 11 };
  const total = 90;

  it("starts at the first job and ends with the current month", () => {
    const bsc = barPosition(first, { year: 2021, month: 6 }, first, now);
    expect(bsc.left).toBe(0);
    const current = barPosition({ year: 2022, month: 8 }, null, first, now);
    expect(current.left + current.width).toBeCloseTo(100, 5);
    expect(current.width).toBeCloseTo((52 / total) * 100, 5);
  });

  it("ends a bar where the next job starts when they share a month", () => {
    const bsc = barPosition(first, { year: 2021, month: 6 }, first, now, { year: 2021, month: 6 });
    const capitole = barPosition({ year: 2021, month: 6 }, { year: 2021, month: 11 }, first, now);
    expect(bsc.left + bsc.width).toBeCloseTo(capitole.left, 5);
  });

  it("splits the axis into whole and partial years that fill it exactly", () => {
    const spans = yearSpans(first, now);
    expect(spans.map((s) => s.year)).toEqual([2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]);
    expect(spans[0].width).toBeCloseTo((7 / total) * 100, 5);
    expect(spans.at(-1)!.width).toBeCloseTo((11 / total) * 100, 5);
    expect(spans.reduce((sum, s) => sum + s.width, 0)).toBeCloseTo(100, 5);
  });
});
