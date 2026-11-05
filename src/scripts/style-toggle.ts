import { isStyleId, type StyleId } from "../lib/style";

const root = document.documentElement;

function applyStyle(style: StyleId) {
  root.dataset.style = style;
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-set-style]")) {
    button.setAttribute("aria-pressed", String(button.dataset.setStyle === style));
  }
  // The clicked button's panel is now hidden; keep keyboard focus on the same option in the new one.
  document
    .querySelector<HTMLButtonElement>(`[data-style-panel="${style}"] [data-set-style="${style}"]`)
    ?.focus();
}

document.addEventListener("click", (event) => {
  const button = (event.target as Element | null)?.closest<HTMLButtonElement>("[data-set-style]");
  const style = button?.dataset.setStyle;
  if (isStyleId(style)) applyStyle(style);
});
