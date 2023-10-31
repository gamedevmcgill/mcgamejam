const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}"
	],

	theme: {
		screens: {
			'lt-2xl': {'max': '1535px'},
			// => @media (max-width: 1535px) { ... }

			'lt-xl': {'max': '1279px'},
			// => @media (max-width: 1279px) { ... }

			'lt-lg': {'max': '1023px'},
			// => @media (max-width: 1023px) { ... }

			'lt-md': {'max': '767px'},
			// => @media (max-width: 767px) { ... }

			'lt-sm': {'max': '639px'},
			// => @media (max-width: 639px) { ... }

			'gt-2xl': {'min': '1536px'},
			// => @media (min-width: 1536px) { ... }

			'gt-xl': {'min': '1280px'},
			// => @media (min-width: 1280px) { ... }

			'gt-lg': {'min': '1024px'},
			// => @media (min-width: 1024px) { ... }

			'gt-md': {'min': '768px'},
			// => @media (min-width: 768px) { ... }

			'gt-sm': {'min': '640px'},
			// => @media (min-width: 640px) { ... }
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				shadowPulse: 'shadowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},
					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
				pulse: {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.025)' },
					'30%': { transform: 'scale(1)' },
					'55%': { transform: 'scale(1.025)' },
					'60%': { transform: 'scale(1)' },
				},
				shadowPulse: {
					'0%, 100%': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
					'25%': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.09)' },
					'30%': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
					'55%': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.09)' },
					'60%': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
