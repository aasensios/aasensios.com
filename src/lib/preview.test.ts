import { describe, expect, it } from "vite-plus/test";
import { previewHost, previewImage } from "./preview";

describe("preview", () => {
  it("asks Microlink for a desktop-sized jpeg screenshot of the page", () => {
    const src = new URL(previewImage("https://www.trustyou.com"));
    expect(src.origin).toBe("https://api.microlink.io");
    expect(src.searchParams.get("url")).toBe("https://www.trustyou.com");
    expect(src.searchParams.get("embed")).toBe("screenshot.url");
    expect(src.searchParams.get("viewport.width")).toBe("1280");
  });

  it("shows the bare host", () => {
    expect(previewHost("https://www.capitole-consulting.com/es/")).toBe("capitole-consulting.com");
  });
});
