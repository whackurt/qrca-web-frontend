/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,jsx,js,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				primary: '#ed2f2f',
			},
			backgroundImage: {
				police:
					"url('data:image/jpeg;base64,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')",
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};