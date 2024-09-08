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
				th_sarabun: ["TH SarabunPSK"],
				taviraj: ["Taviraj"]
			},
		},
	},
	plugins: [],
}
