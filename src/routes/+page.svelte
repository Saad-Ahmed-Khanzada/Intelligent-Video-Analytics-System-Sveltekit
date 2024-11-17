<script lang="ts">
	import Home from './home/+page.svelte';

	import Dashboard from './dashboard/+page.svelte';
</script>

<Home />

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
	/* Hero Gradient */
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.sveltekit-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.tailwind-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}

	/* Radial */
	/* prettier-ignore */
	.bottom-cta-gradient {
		@apply bg-primary-500 text-on-primary-token;
		background-image:
		radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%),
		radial-gradient(at 100% 100%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%);
	}
</style>
