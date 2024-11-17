<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import DocsLogoFull from '../SkeletonLogos/DocsLogoFull.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<DocsLogoFull />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
	<!-- <svelte:fragment slot="trail">(actions)</svelte:fragment> -->
</AppBar>
