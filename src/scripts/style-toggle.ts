import { DEFAULT_STYLE, isStyleId, writeStoredStyle, type StyleId } from "../lib/style";

const root = document.documentElement;

function syncPressed(style: StyleId) {
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-set-style]")) {
    button.setAttribute("aria-pressed", String(button.dataset.setStyle === style));
  }
}

function applyStyle(style: StyleId) {
  root.dataset.style = style;
  syncPressed(style);
  writeStoredStyle(() => window.localStorage, style);
}

document.addEventListener("click", (event) => {
  const button = (event.target as Element | null)?.closest<HTMLButtonElement>("[data-set-style]");
  const style = button?.dataset.setStyle;
  if (isStyleId(style)) applyStyle(style);
});

syncPressed(isStyleId(root.dataset.style) ? root.dataset.style : DEFAULT_STYLE);
