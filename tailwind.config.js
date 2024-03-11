/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/_components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")],
};
