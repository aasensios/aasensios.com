import { describe, expect, it } from "vite-plus/test";
import { previewHost, previewName } from "./preview";

describe("preview", () => {
  it("shows the bare host", () => {
    expect(previewHost("https://www.capitole-consulting.com/es/")).toBe("capitole-consulting.com");
  });

  it("names the screenshot after the host without its TLD", () => {
    expect(previewName("https://www.capitole-consulting.com/es/")).toBe("capitole-consulting");
    expect(previewName("https://www.bsc.es")).toBe("bsc");
  });
});
