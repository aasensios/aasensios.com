import { describe, expect, it } from "vite-plus/test";
import { gifAnimated, gifStill } from "./gif";

describe("gif", () => {
  it("builds Giphy still and animated rendition URLs from an id", () => {
    expect(gifStill("JIX9t2j0ZTN9S")).toBe(
      "https://media.giphy.com/media/JIX9t2j0ZTN9S/200w_s.gif",
    );
    expect(gifAnimated("JIX9t2j0ZTN9S")).toBe(
      "https://media.giphy.com/media/JIX9t2j0ZTN9S/200w.webp",
    );
  });
});
