<script lang="ts">
	import { page } from '$app/stores';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import DocsIcon from '$lib/components/DocsIcon/DocsIcon.svelte';
	// import SidebarMenu from '../SidebarMenu/SidebarMenu.svelte';
	import { getCamList } from '$lib/helpers/cameraHelpers';
	import { getCatList } from '$lib/helpers/categoryHelpers';
	// import MdiBagPersonal from '~icons/mdi/bag-personal';
	import MdiCameraIris from '~icons/mdi/camera-iris';
	import MdiAccountGroup from '~icons/mdi/account-group';
	import MdiDoorOpen from '~icons/mdi/door-open';
	import MdiChartAreaspline from '~icons/mdi/chart-areaspline';
	import MdiHeatingCoil from '~icons/mdi/heating-coil';

	$: cameraList = [];
	$: categoryList = [];

	let selectedPage = $page.url.pathname;

	const fetchCameraList = async (model: any) => {
		const res = await getCamList(model);
		cameraList = res.camList;
		console.log('====+++++++++++++++++++=', cameraList);
	};

	const fetchCategoryList = async (model: any) => {
		const res = await getCatList(model);
		categoryList = res.categoryList;
		console.log('category list', categoryList);
	};
</script>

<!-- 
{#if selectedPage==}

{/if} -->
<section class="h-full w-32 sm:w-28 bg-surface-50-900-token overflow-hidden">
	<div class="grid grid-cols-1">
		<AppRail background="bg-transparent" border="border-r border-surface-500/30" width="0px">
			<AppRailAnchor
				href="/dashboard"
				selected={$page.url.pathname === '/dashboard'}
				regionLabel="px-2"
			>
				<svelte:fragment slot="lead"><MdiChartAreaspline style="font-size: 2em" /></svelte:fragment>
				<span class="font-bold text-xs sm:text-sm">Dashboard</span>
			</AppRailAnchor>
			<AppRailAnchor
				regionLabel="px-2"
				href="/selectCamera"
				selected={$page.url.pathname === '/selectCamera'}
				on:click={async () => {
					selectedPage = '/selectCamera';
					await fetchCameraList('/selectCamera');
				}}
			>
				<svelte:fragment slot="lead"><MdiCameraIris style="font-size: 2em" /></svelte:fragment>
				<span class="font-bold text-xs sm:text-sm">Select Cameras</span>
			</AppRailAnchor>
			<AppRailAnchor
				regionLabel="px-2"
				href="/liveDemo"
				selected={$page.url.pathname === '/liveDemo'}
				on:click={async () => {
					selectedPage = '/liveDemo';
					await fetchCameraList(selectedPage);
				}}
			>
				<svelte:fragment slot="lead"><MdiAccountGroup style="font-size: 2em" /></svelte:fragment>
				<span class="font-bold text-xs sm:text-sm">Live Demo</span>
			</AppRailAnchor>
			<AppRailAnchor
				regionLabel="px-2"
				href="/heatmap"
				selected={$page.url.pathname === '/heatmap'}
				on:click={async () => {
					selectedPage = '/heatmap';
					await fetchCameraList(selectedPage);
				}}
			>
				<svelte:fragment slot="lead"><MdiHeatingCoil style="font-size: 2em" /></svelte:fragment>
				<span class="font-bold text-xs sm:text-sm">Heatmap</span>
			</AppRailAnchor>
			<!-- <AppRailAnchor
				regionLabel="px-2"
				href="/bagDetection"
				selected={$page.url.pathname === '/bagDetection'}
				on:click={async () => {
					selectedPage = '/bagDetection';
					await fetchCameraList(selectedPage);
				}}
			>
				<svelte:fragment slot="lead">
					<MdiBagPersonal style="font-size: 2em" /></svelte:fragment
				>
				<span class="font-bold pl-4 text-xl">Bag Detection</span>
			</AppRailAnchor> -->
		</AppRail>
	</div>
</section>

<style lang="postcss">
</style>
