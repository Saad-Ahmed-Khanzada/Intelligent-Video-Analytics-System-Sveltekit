import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
			style: {
				css: {
					postcss: join(__dirname, 'postcss.config.cjs')
				}
			}
		})
	],
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) return;
		handler(warning);
	},
	vitePlugin: {
		inspector: true
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ out: 'build' })
	}
};

export default config;
