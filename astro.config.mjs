import { defineConfig } from "astro/config";
import { gifReview } from "./src/dev/gif-review.ts";

export default defineConfig({
  site: "https://asensio.me",
  vite: { plugins: [gifReview()] },
});
