import type { YearMonth } from "./dates";

/** Years shown on the axis: from `firstYear` through the current year. */
export function axisYears(firstYear: number, now: YearMonth): number[] {
  return Array.from({ length: now.year - firstYear + 1 }, (_, i) => firstYear + i);
}

/** Bar offset and width, in percent of an axis running Jan `firstYear` to Dec of `now.year`. */
export function barPosition(
  start: YearMonth,
  end: YearMonth | null,
  firstYear: number,
  now: YearMonth,
): { left: number; width: number } {
  const total = axisYears(firstYear, now).length * 12;
  const index = (ym: YearMonth) => (ym.year - firstYear) * 12 + (ym.month - 1);
  const from = Math.max(0, index(start));
  const to = Math.min(total, index(end ?? now) + 1);
  return { left: (from / total) * 100, width: (Math.max(0, to - from) / total) * 100 };
}
