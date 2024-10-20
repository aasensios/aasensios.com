function applyTheme(isDarkMode) {
	document.body.classList.remove('latte', 'mocha')
	document.body.classList.add(isDarkMode ? 'mocha' : 'latte')
}

function applyFavicon(isDarkMode) {
	const favicon = document.getElementById('favicon')
	if (isDarkMode) {
		favicon.setAttribute('href', '/favicon-dark.svg')
	} else {
		favicon.setAttribute('href', '/favicon-light.svg')
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
	applyTheme(isDarkMode)
	applyFavicon(isDarkMode)
})

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', (event) => {
		const isDarkTheme = event.matches
		applyTheme(isDarkTheme)
		applyFavicon(isDarkTheme)
	})
