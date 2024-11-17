<script lang="ts">
	import { getHeatMap } from '$lib/helpers/inferenceHelpers';

	let videoElement: HTMLVideoElement;
	let intervalId: any;

	async function fetchFrame() {
		try {
			const response = await getHeatMap();
			// console.log('-------------fe-fe-fe-fefe', response.frame_ent);
			// console.log('-------------fadsasdsadasd', response.frame_exit);

			document.getElementById('heatmapImage').src = response.frame_heatmap;
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
</script>

<div class="flex flex-col">
	<div class="card grid grid-cols-2">
		<header class="card-header">
			<h1 class="sm:text-4xl text-lg">View Crowd Heatmap</h1>
			<button class="btn variant-filled-secondary" on:click={startSendingFrames}>Get Count</button>
			<button class="btn variant-filled-error" on:click={stopSendingFrames}>Stop Count</button>
		</header>

		<div class="p-4 video-box">
			<div class="video">
				<img id="heatmapImage" alt="image" />
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		/* text-align: center; */

		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

		width: 100%;
	}

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
