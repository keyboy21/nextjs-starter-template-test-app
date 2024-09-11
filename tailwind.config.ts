import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0070f3',
				secondary: '#f7f7f7',
				accent: '#f9f9f9',
				'accent-foreground': '#000000',
				'destructive': '#dc2626',
				'destructive-foreground': '#ffffff',
			}
		}
	},
	darkMode: 'class',
};
export default config;
