/** Logarithmic easing: fast early growth that levels off, 0 at t = 0 and 1 at t = 1. */
export const logEase = (t: number) => Math.log1p(9 * t) / Math.log(10);

const round = (n: number) => Math.round(n * 1000) / 1000;

/**
 * The career line's height at `x` (percent of the axis): one logarithmic curve from the
 * first job at `from` (y = `bottom`) to today at x = 100 (y = `top`).
 */
export function careerY(
  x: number,
  { from, top, bottom }: { from: number; top: number; bottom: number },
) {
  const t = Math.min(1, Math.max(0, (x - from) / (100 - from)));
  return bottom - (bottom - top) * logEase(t);
}

/** A polyline that follows `y` from `x0` to `x1`, finely enough to read as a curve. */
export function curvePath(x0: number, x1: number, y: (x: number) => number, samples = 24): string {
  const points = Array.from({ length: samples + 1 }, (_, i) => x0 + ((x1 - x0) * i) / samples);
  return points.map((x, i) => `${i ? "L" : "M"} ${round(x)} ${round(y(x))}`).join(" ");
}
