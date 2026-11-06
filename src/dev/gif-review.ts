import { readFile, writeFile } from "node:fs/promises";
import type { IncomingMessage, ServerResponse } from "node:http";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import {
  gifHeaderSize,
  giphyIds,
  swapGif,
  syncSizes,
  usedGifs,
  type Theme,
} from "../lib/gif-review";

const SITE = fileURLToPath(new URL("../content/site.ts", import.meta.url));
const SIZES = fileURLToPath(new URL("../content/gif-sizes.ts", import.meta.url));

/** Giphy searches per pet and button: dogs by day, cats by night; waving hello or at a computer. */
const SEARCHES: Record<string, string[]> = {
  "dog-Hi": ["dog-waving-hello", "puppy-waving", "dog-wave-hi", "dog-saying-hi"],
  "cat-Hi": ["cat-waving", "kitten-waving-hello", "cat-wave-hi", "cat-saying-hi"],
  "dog-Work": ["dog-typing-computer", "dog-working-laptop", "dog-on-computer"],
  "cat-Work": ["cat-typing-laptop", "cat-working-computer", "cat-on-computer"],
};

const pages = new Map<string, Promise<string[]>>();
const search = (term: string) => {
  if (!pages.has(term)) {
    pages.set(
      term,
      fetch(`https://giphy.com/search/${term}`, { headers: { "user-agent": "Mozilla/5.0" } })
        .then((r) => r.text())
        .then(giphyIds)
        .catch(() => []),
    );
  }
  return pages.get(term)!;
};

const sizeOf = async (id: string) => {
  const res = await fetch(`https://media.giphy.com/media/${id}/200w_s.gif`, {
    headers: { range: "bytes=0-9" },
  });
  if (!res.ok) return null;
  return gifHeaderSize(new Uint8Array(await res.arrayBuffer()));
};

const send = (res: ServerResponse, status: number, body: unknown) => {
  res.statusCode = status;
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(body));
};

const body = async (req: IncomingMessage) => {
  let text = "";
  for await (const chunk of req) text += chunk;
  return JSON.parse(text);
};

/**
 * Dev-server endpoints for the gallery's review tools, never part of the build:
 * GET  /__gifs/suggest?kind=dog&tag=Hi&skip=a,b  → an unused Giphy GIF that fits the slot
 * POST /__gifs/use {tag, day, theme, id, width, height} → writes it into site.ts and gif-sizes.ts
 */
export function gifReview(): Plugin {
  return {
    name: "gif-review",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__gifs/suggest", async (req, res) => {
        const url = new URL(req.url ?? "", "http://localhost");
        const terms = SEARCHES[`${url.searchParams.get("kind")}-${url.searchParams.get("tag")}`];
        if (!terms) return send(res, 400, { error: "Unknown kind or tag" });
        const skip = new Set(url.searchParams.get("skip")?.split(",") ?? []);
        const used = usedGifs(await readFile(SITE, "utf8"));
        for (const term of terms) {
          for (const id of await search(term)) {
            if (used.has(id) || skip.has(id)) continue;
            const size = await sizeOf(id);
            if (size) return send(res, 200, { id, ...size });
            skip.add(id);
          }
        }
        send(res, 404, { error: "No more suggestions" });
      });

      server.middlewares.use("/__gifs/use", async (req, res) => {
        if (req.method !== "POST") return send(res, 405, { error: "POST only" });
        const { tag, day, theme, id, width, height } = (await body(req)) as {
          tag: string;
          day: number;
          theme: Theme;
          id: string;
          width: number;
          height: number;
        };
        if (!/^[A-Za-z0-9]{8,}$/.test(id)) return send(res, 400, { error: "Bad id" });
        const site = swapGif(await readFile(SITE, "utf8"), tag, day, theme, id);
        const sizes = syncSizes(await readFile(SIZES, "utf8"), usedGifs(site), {
          id,
          width,
          height,
        });
        await writeFile(SIZES, sizes);
        await writeFile(SITE, site);
        send(res, 200, { ok: true });
      });
    },
  };
}
