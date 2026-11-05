/** Escape hides an open company card until the pointer or focus leaves its name. */
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  for (const co of document.querySelectorAll<HTMLElement>(".co:hover, .co:focus-within")) {
    co.dataset.dismissed = "";
    const reset = () => {
      delete co.dataset.dismissed;
      co.removeEventListener("pointerleave", reset);
      co.removeEventListener("focusout", reset);
    };
    co.addEventListener("pointerleave", reset);
    co.addEventListener("focusout", reset);
  }
});
