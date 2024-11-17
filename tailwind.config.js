/** @type {import('tailwindcss').Config} */

import { join } from 'path';

// 1. Import the Skeleton plugin
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

module.exports = {
	// 2. Opt for dark mode to be handled via the class method
	// darkMode: 'class',
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('tailwindcss'),
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					},
					{
						name: 'crimson',
						enhancements: true
					},{
						name: 'gold-nouveau',
						enhancements: true
					}
				]
			}
		})
	]
};
