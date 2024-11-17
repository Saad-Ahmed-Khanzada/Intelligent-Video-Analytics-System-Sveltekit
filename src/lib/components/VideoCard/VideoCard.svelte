<script lang="ts">
	import { onMount } from 'svelte';
	import { getEntranceData } from '$lib/helpers/inferenceHelpers';

	let videoElement: HTMLVideoElement;
	let intervalId: any;

	async function fetchFrame() {
		try {
			const response = await getEntranceData();
			// console.log('-------------fe-fe-fe-fefe', response.frame_ent);
			// console.log('-------------fadsasdsadasd', response.frame_exit);

			document.getElementById('entranceImage').src = response.frame_ent;
			document.getElementById('exitImage').src = response.frame_exit;
			document.getElementById('headImage').src = response.frame_head;
			document.getElementById('bagImage').src = response.frame_bag;
			if (videoElement) {
				videoElement.src = response.frame;
			} else {
				console.error('Video element is null.');
			}
		} catch (error) {
			console.error('Error fetching frame:', error);
		}
	}

	function startSendingFrames() {
		if (intervalId) clearInterval(intervalId);

		intervalId = setInterval(async () => {
			try {
				await fetchFrame();
			} catch (error) {
				console.error('Error fetching frame:', error);
			}
		}, 1000); // 500 milliseconds = 0.5 seconds
	}

	function stopSendingFrames() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
			console.log('Stopped sending frames.');
		}
	}

	// onMount(() => {
	// 	fetchFrame();

	// });
</script>

<body class="flex flex-col">
	<div class="card text-center">
		<header class="card-header">
			<button class="btn variant-filled-secondary" on:click={startSendingFrames}>Start Demo</button>
			<button class="btn variant-filled-error" on:click={stopSendingFrames}>Stop Demo</button>
		</header>
	</div>
	<div class="grid-container">
		<div class="card video-box">
			<div class="video">
				<img id="entranceImage" alt="--" />
			</div>
		</div>
		<div class="video-box">
			<div class="video">
				<img id="exitImage" alt="--" />
			</div>
		</div>
		<div class="video-box">
			<div class="video">
				<img id="headImage" alt="--" />
			</div>
		</div>
		<div class="video-box">
			<div class="video">
				<img id="bagImage" alt="--" />
			</div>
		</div>
	</div>
</body>

<!-- <div class="flex justify-center mb-4">
	<button class="btn variant-filled-primary" on:click={stopSendingFrames}>Stop Count</button>
</div> -->

<!-- <div class="grid grid-cols-1 grid-rows-1 place-items-center gap-y-5 ml-20">
	<div
		class="variant-soft-success badge flex flex-col rounded-e-full border-2 border-green-200 max-w-full"
	>
		<div class="card">
			<header class="card-header badge">Fetched Frame</header>
			<section class="p-4">
			
				<video id="myVideo" bind:this={videoElement} controls crossOrigin="anonymous" autoplay muted
				></video>
			</section>
			<footer class="card-footer">
				<button class="btn variant-filled-primary" on:click={fetchFrame}>Get Count</button>
			</footer>
		</div>
	</div>
</div> -->

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
		gap: 10px;
		padding: 20px;
	}

	.video-box {
		width: 100%;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	.video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 600px) {
		.grid-container {
			grid-template-columns: repeat(
				auto-fit,
				minmax(100px, 1fr)
			); /* Adjust column width for smaller screens */
		}
	}
	@media screen and (min-width: 768px) and (max-width: 3000px) {
		.grid-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, auto);
			gap: 10px;
			padding: 20px;
			max-width: 100%;
			margin: 0 auto;
		}
	}
</style>
