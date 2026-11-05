/*
 * Style keywords in the Marketing hero ("Same portfolio, three moods: Marketing, SaaS or
 * Minimalist"). Pointing at or focusing one opens the speaker card under the line with that
 * style's real page in its grille; clicking one switches straight away, growing the preview
 * into the new page where view transitions exist. Touch: one tap switches.
 */
import { DEFAULT_STYLE, isStyleId, type StyleId } from "../lib/style";
import { switchStyle } from "./style-toggle";

const speaker = document.querySelector<HTMLElement>("[data-speaker]");
const panel = document.querySelector<HTMLElement>('[data-style-panel="marketing"]');

if (speaker && panel) {
  const triggers = [...panel.querySelectorAll<HTMLButtonElement>(".mood[data-preview-style]")];
  const railItems = [...speaker.querySelectorAll<HTMLElement>("[data-rail-style]")];
  const pill = speaker.querySelector<HTMLElement>(".rail-pill");
  const grille = speaker.querySelector<HTMLElement>(".grille")!;
  const preview = speaker.querySelector<HTMLElement>("[data-preview]")!;
  const label = speaker.querySelector<HTMLElement>("[data-glass-label]")!;
  const labels = JSON.parse(speaker.dataset.labels ?? "{}") as Record<string, string>;
  const card = speaker.closest<HTMLElement>(".speaker-card");
  const current = () => (document.documentElement.dataset.style ?? DEFAULT_STYLE) as StyleId;

  function fit() {
    const page = preview.firstElementChild as HTMLElement | null;
    if (page) page.style.transform = `scale(${grille.clientWidth / 1280})`;
  }

  function placePill() {
    const on = railItems.find((el) => el.hasAttribute("data-on"));
    if (!pill || !on || !on.offsetWidth) return;
    pill.style.setProperty("--pill-x", `${on.offsetLeft}px`);
    pill.style.setProperty("--pill-w", `${on.offsetWidth}px`);
  }

  function select(style: StyleId) {
    for (const el of railItems) el.toggleAttribute("data-on", el.dataset.railStyle === style);
    for (const t of triggers)
      t.setAttribute("aria-pressed", String(t.dataset.previewStyle === style));
    const isCurrent = style === current();
    label.textContent = isCurrent ? (labels.current ?? "") : (labels[style] ?? "");
    speaker!.toggleAttribute("data-current", isCurrent);
    const page = previewPage(style);
    preview.replaceChildren(...(page ? [page] : []));
    fit();
    placePill();
  }

  for (const trigger of triggers) {
    const style = trigger.dataset.previewStyle;
    if (!isStyleId(style)) continue;
    trigger.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse") select(style);
    });
    trigger.addEventListener("focus", () => select(style));
    trigger.addEventListener("click", () => {
      if (style === current()) return;
      // Grow out of the preview only when the card is actually showing.
      const showing = card && getComputedStyle(card).visibility === "visible";
      switchStyle(style, { morphFrom: showing ? grille : null });
    });
  }

  // Back on Marketing: the card resets to "You're already here".
  new MutationObserver(() => {
    if (current() === "marketing") select("marketing");
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-style"] });

  new ResizeObserver(() => {
    fit();
    placePill();
  }).observe(grille);
}

const clones = new Map<StyleId, HTMLElement>();

/** A fresh, inert copy of a style's panel for a miniature preview (one per container). */
export function previewPage(style: StyleId): HTMLElement | null {
  let template = clones.get(style);
  if (!template) {
    const source = document.querySelector<HTMLElement>(`[data-style-panel="${style}"]`);
    if (!source) return null;
    template = source.cloneNode(true) as HTMLElement;
    template.removeAttribute("data-style-panel");
    // A Marketing copy would carry its own speaker card and peel; drop them.
    for (const el of template.querySelectorAll(".speaker-card, .peel")) el.remove();
    for (const el of [template, ...template.querySelectorAll<HTMLElement>("[id]")]) {
      el.removeAttribute("id");
    }
    template.setAttribute("inert", "");
    template.className = "preview-page";
    clones.set(style, template);
  }
  return template.cloneNode(true) as HTMLElement;
}

/*
 * The page turn at the bottom-right corner: the next style shows under the curled corner,
 * and clicking it turns the page into that style, growing from the corner.
 */
const peel = document.querySelector<HTMLElement>("[data-peel]");
const peelHit = document.querySelector<HTMLButtonElement>("[data-peel-hit]");
if (peel && peelHit) {
  const next = peel.dataset.next;
  const under = peel.querySelector<HTMLElement>(".peel-under");
  const page = peel.querySelector<HTMLElement>("[data-peel-page]");
  const tip = peel.querySelector<HTMLElement>("[data-peel-label]");
  if (tip) tip.textContent = peel.dataset.tip ?? "";
  if (isStyleId(next)) {
    const fill = () => {
      if (page && !page.firstElementChild) {
        const clone = previewPage(next);
        if (clone) page.append(clone);
      }
    };
    // Prepare the page underneath once the browser is idle, so the first peel is instant.
    if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(fill);
    else setTimeout(fill, 1200);
    peelHit.addEventListener("pointerenter", fill);
    peelHit.addEventListener("focus", fill);
    peelHit.addEventListener("click", () => {
      fill();
      switchStyle(next, { morphFrom: under });
    });
  }
}
