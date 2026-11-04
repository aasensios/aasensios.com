/** A calendar month. `month` is 1–12. */
export type YearMonth = { year: number; month: number };

const EN_DASH = "–";
const MIDDLE_DOT = "·";

/** Number of months from `start` to `end`, counting both months. */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

/** "9 months" under a year, otherwise whole years rounded down ("4 years"). */
export function formatDuration(months: number): string {
  if (months < 12) return `${months} ${months === 1 ? "month" : "months"}`;
  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? "year" : "years"}`;
}

/** "2021–2022", "2021–2021", or "2022–now" when `end` is null (present). */
export function formatYearRange(start: YearMonth, end: YearMonth | null): string {
  return `${start.year}${EN_DASH}${end ? end.year : "now"}`;
}

/** "2022–now · 4 years". */
export function formatPeriod(start: YearMonth, end: YearMonth | null, now: YearMonth): string {
  return `${formatYearRange(start, end)} ${MIDDLE_DOT} ${formatDuration(monthsBetween(start, end ?? now))}`;
}

/** Whole years elapsed since `start`, rounded down. */
export function yearsSince(start: YearMonth, now: YearMonth): number {
  return Math.floor(monthsBetween(start, now) / 12);
}

export function toYearMonth(date: Date): YearMonth {
  return { year: date.getFullYear(), month: date.getMonth() + 1 };
}
