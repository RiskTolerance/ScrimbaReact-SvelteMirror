/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'svelte-orange': '#f96743',
				'react-blue': '#61dafb'
			}
		}
	},
	plugins: []
};
