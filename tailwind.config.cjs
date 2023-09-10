/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {},
		colors: {
			'primary': '#1a202c',
			'secondary': '#282c37',
			'action': '#6364ff',
			'text-primary': '#8c8dff',
			'text': '#d9e1e8',
			'text-secondary': '#606984',
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
    require('flowbite/plugin'),
	],
}
