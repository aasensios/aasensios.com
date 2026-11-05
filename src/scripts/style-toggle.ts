import { DEFAULT_STYLE, isStyleId, type StyleId } from "../lib/style";

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let switching = false;

function applyStyle(style: StyleId) {
  root.dataset.style = style;
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-set-style]")) {
    button.setAttribute("aria-pressed", String(button.dataset.setStyle === style));
  }
  // The clicked control's panel is now hidden; keep keyboard focus on the same option in the new one.
  document
    .querySelector<HTMLElement>(
      `[data-style-panel="${style}"] [data-set-style="${style}"], [data-style-panel="${style}"] [data-preview-style="${style}"]`,
    )
    ?.focus();
}

/** How long a toggle's own control animates before the page changes (its `--travel-ms`). */
function travelMs(toggle: HTMLElement | null): number {
  if (!toggle || reduceMotion.matches) return 0;
  return Number.parseFloat(getComputedStyle(toggle).getPropertyValue("--travel-ms")) || 0;
}

type SwitchOptions = {
  /** The control that started the switch; its toggle's `--travel-ms` delays the page change. */
  trigger?: HTMLElement | null;
  /** An element (a preview of the new style) that grows into the new page. */
  morphFrom?: HTMLElement | null;
};

/**
 * Switches the page style. The trigger's toggle may play its own motion first; then the page
 * cross-fades where view transitions exist, and `morphFrom` grows into the new style's panel.
 */
export function switchStyle(
  style: StyleId,
  { trigger = null, morphFrom = null }: SwitchOptions = {},
) {
  const current = root.dataset.style ?? DEFAULT_STYLE;
  if (switching) return;
  if (style === current) {
    applyStyle(style);
    return;
  }
  switching = true;
  const toggle = trigger?.closest<HTMLElement>(".style-toggle") ?? null;
  toggle?.setAttribute("data-target", style);
  window.setTimeout(() => {
    const target = document.querySelector<HTMLElement>(`[data-style-panel="${style}"]`);
    const swap = () => {
      if (morphFrom) morphFrom.style.viewTransitionName = "";
      applyStyle(style);
      if (morphFrom && target) target.style.viewTransitionName = "style-preview";
      toggle?.removeAttribute("data-target");
    };
    if (reduceMotion.matches || !document.startViewTransition) {
      swap();
      if (target) target.style.viewTransitionName = "";
      switching = false;
      return;
    }
    if (morphFrom) morphFrom.style.viewTransitionName = "style-preview";
    const transition = document.startViewTransition(swap);
    void transition.finished.finally(() => {
      if (target) target.style.viewTransitionName = "";
      switching = false;
    });
  }, travelMs(toggle));
}

document.addEventListener("click", (event) => {
  const button = (event.target as Element | null)?.closest<HTMLButtonElement>("[data-set-style]");
  const style = button?.dataset.setStyle;
  if (button && isStyleId(style)) switchStyle(style, { trigger: button });
});
