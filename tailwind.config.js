/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.html",
		"./src/**/*.js",
		"./src/**/*.css",
		"./*.html",
		"./*.js",
		"./*.css",
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {},
		plugins: [
			require("@tailwindcss/typography"),
			require("tw-elements/dist/plugin.cjs"),
			require("tailwindcss-animated"),
		],
		darkMode: "class",
	},
};
