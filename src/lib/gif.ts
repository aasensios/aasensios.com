/** Giphy serves every GIF in several renditions under the same id; these are the two we use. */
const base = (id: string) => `https://media.giphy.com/media/${id}`;

/** The first frame, 200px wide: a light thumbnail and the reduced-motion stand-in. */
export const gifStill = (id: string) => `${base(id)}/200w_s.gif`;

/** The animation, 200px wide, as WebP: a fraction of the size of the original GIF. */
export const gifAnimated = (id: string) => `${base(id)}/200w.webp`;
