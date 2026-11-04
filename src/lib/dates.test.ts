import { describe, expect, it } from "vite-plus/test";
import { formatDuration, formatPeriod, formatYearRange, monthsBetween, yearsSince } from "./dates";

const now = { year: 2026, month: 11 };

describe("monthsBetween (inclusive)", () => {
  it("matches LinkedIn durations", () => {
    expect(monthsBetween({ year: 2021, month: 12 }, { year: 2022, month: 8 })).toBe(9);
    expect(monthsBetween({ year: 2021, month: 6 }, { year: 2021, month: 11 })).toBe(6);
    expect(monthsBetween({ year: 2019, month: 6 }, { year: 2021, month: 6 })).toBe(25);
    expect(monthsBetween({ year: 2022, month: 8 }, now)).toBe(52);
  });
});

describe("formatDuration", () => {
  it("uses months under a year, whole years otherwise, with singulars", () => {
    expect(formatDuration(1)).toBe("1 month");
    expect(formatDuration(9)).toBe("9 months");
    expect(formatDuration(12)).toBe("1 year");
    expect(formatDuration(23)).toBe("1 year");
    expect(formatDuration(25)).toBe("2 years");
    expect(formatDuration(52)).toBe("4 years");
  });
});

describe("formatYearRange / formatPeriod", () => {
  it("is explicit even within one year and uses 'now' for present", () => {
    expect(formatYearRange({ year: 2021, month: 6 }, { year: 2021, month: 11 })).toBe("2021–2021");
    expect(formatYearRange({ year: 2022, month: 8 }, null)).toBe("2022–now");
    expect(formatPeriod({ year: 2022, month: 8 }, null, now)).toBe("2022–now · 4 years");
    expect(formatPeriod({ year: 2021, month: 12 }, { year: 2022, month: 8 }, now)).toBe(
      "2021–2022 · 9 months",
    );
  });
  it("never emits an em dash", () => {
    expect(formatPeriod({ year: 2019, month: 6 }, { year: 2021, month: 6 }, now)).not.toContain(
      "—",
    );
  });
});

describe("yearsSince", () => {
  it("rounds down", () => {
    expect(yearsSince({ year: 2019, month: 6 }, now)).toBe(7);
    expect(yearsSince({ year: 2019, month: 6 }, { year: 2026, month: 4 })).toBe(6);
  });
});
