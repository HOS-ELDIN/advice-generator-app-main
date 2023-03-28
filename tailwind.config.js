/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Manrope", "sans-serif"],
			},
			colors: {
				// ### Primary
				LightCyan: "hsl(193, 38%, 86%)",
				NeonGreen: "hsl(150, 100%, 66%)",

				// ### Neutral
				GrayishBlue: "hsl(217, 19%, 38%)",
				DarkGrayishBlue: "hsl(217, 19%, 24%)",
				DarkBlue: "hsl(218, 23%, 16%)",
				atribution: "hsl(228, 45%, 44%)"
			},
		},
	},
	plugins: [],
};
