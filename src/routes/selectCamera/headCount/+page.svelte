<script lang="ts">
	import { getCameraId, selectedCameraId } from '$lib/helpers/getCameraId';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let cameras = [
		{ id: 7, name: 'camera7' },
		{ id: 8, name: 'camera8' },
		{ id: 9, name: 'camera9' }
	];

	// Local variable to store the selected camera ID
	let currentCameraId: number = 0;

	// Subscribe to the selectedCameraId store
	onMount(() => {
		// Reset the selectedCameraId to 0 when the component mounts
		selectedCameraId.set(0);

		const unsubscribe = selectedCameraId.subscribe((value) => {
			currentCameraId = value;
		});

		// Cleanup subscription when the component is destroyed
		return () => {
			unsubscribe();
		};
	});
</script>

<h1 class="flex justify-center items-center mt-5 text-3xl">Select Camera for Head Count</h1>
<a href="/selectCamera" class="bg-white bg-opacity-10 p-1 rounded-2xl"
	>Click to go Back to Select Cameras</a
>

<div class="flex flex-col items-center mt-5">
	{#each cameras as camera}
		<button class="m-2 p-2 bg-blue-500 text-white rounded" on:click={() => getCameraId(camera.id)}>
			{camera.name}
		</button>
	{/each}
</div>

{#if currentCameraId !== 0}
	<p class="flex justify-center items-center mt-5 text-xl">
		Selected Camera ID: {currentCameraId}
	</p>
{/if}

<style>
	.flex {
		display: flex;
	}
	.justify-center {
		justify-content: center;
	}
	.items-center {
		align-items: center;
	}
	.mt-5 {
		margin-top: 1.25rem;
	}
	.text-3xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}
	.m-2 {
		margin: 0.5rem;
	}
	.p-2 {
		padding: 0.5rem;
	}
	.bg-blue-500 {
		background-color: #4299e1;
	}
	.text-white {
		color: #ffffff;
	}
	.rounded {
		border-radius: 0.25rem;
	}
	.text-xl {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
</style>
