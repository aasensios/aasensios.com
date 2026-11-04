import { describe, expect, it } from "vite-plus/test";
import { axisYears, barPosition } from "./timeline";

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
});
