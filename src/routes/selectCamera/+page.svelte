<script lang="ts">
	import { flip } from 'svelte/animate';
	// import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	// import { each } from 'chart.js/helpers';
	// let valueSingle: string = '';
	let camList = [
		{ id: 1, name: 'Entrance', imgPath: '/img/cam1.jpeg' },
		{ id: 2, name: 'Exit', imgPath: '/img/cam2.jpeg' },
		{ id: 3, name: 'Corridor 1', imgPath: '/img/cam3.jpeg' },
		{ id: 4, name: 'Corridor 2', imgPath: '/img/cam4.jpeg' },
		{ id: 5, name: 'Hall 1', imgPath: '/img/cam5.jpeg' },
		{ id: 6, name: 'Hall 2', imgPath: '/img/cam6.jpeg' }
	];

	$: selectedCamera = { id: 1, name: 'entrance', imgPath: '/img/cam1.jpeg' };

	const setCamera = (camera: any) => {
		selectedCamera = camera;
		// console.log(selectedCamera);
	};
</script>

<div class="card container flex flex-col">
	{#if selectedCamera}
		<div class="grid grid-cols-2">
			<header class="card-header">
				<h1 class="sm:text-4xl text-lg">Select Camera</h1>
				<ul class="list fade-in-list">
					{#each camList as camera}
						<li class="block card card-hover p-4">
							<button on:click={() => setCamera(camera)} class="flex-auto">{camera.name}</button>
						</li>
					{/each}
				</ul>
			</header>
			<div class="p-4">
				<img src={selectedCamera.imgPath} alt={selectedCamera.name} class="fade-in-image" />
			</div>
		</div>
	{/if}
</div>

<style>
	.fade-in-image {
		animation: fadeIn 5s ease;
	}

	.fade-in-list {
		animation: fadeIn 0.5s ease;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	/* body {
		font-family: 'Arial, sans-serif';
		background-color: #f0f4f8;
		color: #333;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	} */

	.container {
		/* text-align: center; */

		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

		width: 100%;
	}

	.title {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: rgb(255, 255, 255);
	}

	.nav {
		margin-top: 1rem;
	}

	.nav-list {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.nav-item {
		margin: 0.5rem 0;
	}

	.nav-link {
		font-size: 1.2rem;
		color: #ffffff;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;
	}

	.nav-link:hover {
		background-color: #41013a;
		color: white;
		transform: translateY(-2px);
	}
</style>
