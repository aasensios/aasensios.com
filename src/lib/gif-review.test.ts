import { describe, expect, it } from "vite-plus/test";
import { gifHeaderSize, giphyIds, swapGif, syncSizes, usedGifs } from "./gif-review";

const site = `
  links: [
    {
      tag: "Hi",
      gifs: [
        { light: "aaaaaaaa1", dark: "bbbbbbbb1" },
        { light: "aaaaaaaa2", dark: "bbbbbbbb2" },
      ],
    },
    {
      tag: "Work",
      gifs: [
        { light: "cccccccc1", dark: "dddddddd1" },
        { light: "cccccccc2", dark: "dddddddd2" },
      ],
    },
  ],
`;

describe("gif review", () => {
  it("lists every GIF in use", () => {
    expect([...usedGifs(site)].sort()).toEqual([
      "aaaaaaaa1",
      "aaaaaaaa2",
      "bbbbbbbb1",
      "bbbbbbbb2",
      "cccccccc1",
      "cccccccc2",
      "dddddddd1",
      "dddddddd2",
    ]);
  });

  it("swaps only the chosen link, day and theme", () => {
    const out = swapGif(site, "Work", 1, "dark", "zzzzzzzz9");
    expect(out).toContain('{ light: "cccccccc2", dark: "zzzzzzzz9" }');
    expect(out).toContain('{ light: "aaaaaaaa2", dark: "bbbbbbbb2" }');
    expect(usedGifs(out).has("dddddddd2")).toBe(false);
  });

  it("adds the new size and prunes unused ones", () => {
    const sizes = `export const gifSizes = {\n  aaaaaaaa1: [200, 150],\n  "1gone0000": [200, 200],\n};\n`;
    const out = syncSizes(sizes, new Set(["aaaaaaaa1", "zzzzzzzz9"]), {
      id: "zzzzzzzz9",
      width: 200,
      height: 112,
    });
    expect(out).toContain("aaaaaaaa1: [200, 150]");
    expect(out).not.toContain("1gone0000");
    expect(out).toContain('"zzzzzzzz9": [200, 112]');
  });

  it("reads a GIF's size from its header", () => {
    expect(gifHeaderSize(new Uint8Array([71, 73, 70, 56, 57, 97, 200, 0, 44, 1]))).toEqual({
      width: 200,
      height: 300,
    });
  });

  it("finds only search results' Giphy ids", () => {
    const html = `<style>.x:before{background:url(https://media.giphy.com/media/decor00000/200.gif)}</style><a href="/gifs/cat-abcdEFGH12" data-giphy-id="abcdEFGH12"></a><a data-giphy-id="abcdEFGH12"></a><a data-giphy-id="zyxwVUTS98"></a>`;
    expect(giphyIds(html)).toEqual(["abcdEFGH12", "zyxwVUTS98"]);
  });
});
