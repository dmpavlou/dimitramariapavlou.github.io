import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	
	site: 'https://dmpavlou.github.io',

	vite: {
		plugins: [tailwindcss()],
	},

	
});
