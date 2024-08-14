function applyTheme(theme) {
  document.body.classList.remove('latte', 'mocha');
  document.body.classList.add(theme);
}

function detectColorScheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(isDarkMode ? 'mocha' : 'latte');
}

// Listen for changes to the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  const newColorScheme = event.matches ? 'mocha' : 'latte';
  applyTheme(newColorScheme);
});

// Initial detection of color scheme
document.addEventListener('DOMContentLoaded', detectColorScheme);
