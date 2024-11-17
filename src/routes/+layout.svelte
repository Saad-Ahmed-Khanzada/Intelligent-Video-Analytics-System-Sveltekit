<script lang="ts">
	import '../app.postcss';

	// import DocsLogoFull from '$lib/components/SkeletonLogos/DocsLogoFull.svelte';

	import NavDrawer from '$lib/components/navDrawer/navDrawer.svelte';
	import { initializeStores, AppShell } from '@skeletonlabs/skeleton';

	initializeStores();
	// import SidebarMenu from '$lib/components/SidebarMenu/SidebarMenu.svelte';
	import PageSelectionRail from '$lib/components/PageSelectionRail/PageSelectionRail.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
</script>

<!-- <NavDrawer /> -->
<div class="flex justify-center items-center gap-x-5">
	<a href="/login" class="btn btn-sm variant-ringed-tertiary my-2 font-semibold">Login </a>
	<a href="/register" class="btn btn-sm variant-ringed-tertiary my-2 font-semibold">Register </a>
</div>

<AppShell class="text-white">
	<!-- Header -->
	<svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- <SidebarMenu class="hidden lg:grid w-[360px] overflow-hidden text-white" /> -->
		<!-- <PageSelectionRail class="hidden lg:grid w-[360px] overflow-hidden h-full p-10" /> -->
		<PageSelectionRail />
	</svelte:fragment>
	<slot />
</AppShell>
<!-- <SidebarMenu /> -->
