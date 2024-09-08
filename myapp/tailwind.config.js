/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: [
		'./templates/**/*.html'
	],
	theme: {
		extend: {
			fontFamily: {
				angsana: ["Angsana New"],
				sarabun: ["Sarabun"],
				taviraj: ["Taviraj"],
				prompt: ["Prompt"],
				mitr: ["Mitr"],
			},
		},
	},
	plugins: [],
}
