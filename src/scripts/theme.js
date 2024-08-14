function applyTheme(theme) {
	document.body.classList.remove("latte", "mocha");
	document.body.classList.add(theme);
}

function applyFavicon() {
	const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const favicon = document.getElementById("favicon");
	if (isDarkMode) {
		favicon.setAttribute("href", "/favicon-dark.svg");
	} else {
		favicon.setAttribute("href", "/favicon-light.svg");
	}
}

function detectColorScheme() {
	const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
	applyTheme(isDarkMode ? "mocha" : "latte");
	applyFavicon();
}

// Listen for changes to the color scheme
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (event) => {
		const newColorScheme = event.matches ? "mocha" : "latte";
		applyTheme(newColorScheme);
		applyFavicon();
	});

// Initial detection of color scheme
document.addEventListener("DOMContentLoaded", detectColorScheme);

// Listen for changes in color scheme
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", applyFavicon);
