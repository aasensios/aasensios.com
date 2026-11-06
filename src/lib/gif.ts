const base = (id: string) => `https://media.giphy.com/media/${id}`;

export const gifStill = (id: string) => `${base(id)}/200w_s.gif`;

export const gifAnimated = (id: string) => `${base(id)}/200w.webp`;
