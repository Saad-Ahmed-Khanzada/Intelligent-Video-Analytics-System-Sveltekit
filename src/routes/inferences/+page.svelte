<script lang="ts">
	import { onMount } from 'svelte';
	import VideoCard from '$lib/components/VideoCard/VideoCard.svelte';
	// const fetchFrame = async () => {
	// 	try {
	// 		const res = await fetch('http://192.168.1.102:8888/get_entrance_frame');
	// 		const data = await res.json();
	// 		console.log('frame data', data);
	// 		return data;
	// 	} catch (error) {
	// 		console.error('Error fetching data:', error);
	// 	}
	// };
	// onMount(async () => {
	// 	fetchFrame();
	// });
</script>

<VideoCard />

<!-- <body class="flex">
	<div class="grid-container">
		<div class="video-box">
			<div class="video"></div>
		</div>
		<div class="video-box">
			<div class="video">
				
			</div>
		</div>
		<div class="video-box">
			<div class="video">
				
			</div>
		</div>
		<div class="video-box">
			<div class="video">
				
			</div>
		</div>
	</div>
</body> -->

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
			grid-template-columns: repeat(2, 1fr); /* Two columns */
			grid-template-rows: repeat(2, auto); /* Two rows */
			gap: 10px;
			padding: 20px; /* Add padding to the container */
			max-width: 100%; /* Set max width */

			margin: 0 auto; /* Center the grid container */
		}
	}
</style>
