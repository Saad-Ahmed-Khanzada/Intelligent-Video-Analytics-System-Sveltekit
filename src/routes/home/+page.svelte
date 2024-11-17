<script lang="ts">
	import { filter, Emerald, BlueNight /* ... */ } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	// import VideoCard from '$lib/components/videoCard/videoCard.svelte';
	// import ImageCard from '$lib/components/imageCard/imageCard.svelte';
	// import { onMount } from 'svelte';

	// let videos: any = [];
	// let selectedVideo = '';
	// let videoSrc = '';
	// let countMessage = '';
	// let processedImage = ''; // URL of the processed image to display

	// // Fetch list of videos on mount
	// onMount(async () => {
	// 	// const res = await fetch('http://localhost:8123/list-videos/');
	// 	// const data = await res.json();
	// 	// videos = data.videos;
	// 	// if (videos.length > 0) {
	// 	// 	selectedVideo = videos[0];
	// 	// 	videoSrc = `http://localhost:8123/videos/${selectedVideo}`;
	// 	// }

	// 	const response = await fetch('http://localhost:8123/list-videos/');
	// 	const data = await response.json();
	// 	videos = data.videos;
	// 	if (videos.length > 0) {
	// 		// selectedVideo = `http://localhost:8123/videos/${videos[0]}`;
	// 		selectedVideo = 'http://localhost:8123/videos/output.mp4';
	// 		console.log(selectedVideo);
	// 	}
	// });

	// // Function to handle video change
	// function handleVideoChange(event) {
	// 	selectedVideo = event.target.value;
	// 	videoSrc = `http://localhost:8123/videos/${selectedVideo}`;
	// }

	// // Function to count people
	// const countPeople = async () => {
	// 	const videoElement = document.querySelector('video');
	// 	videoElement.pause();
	// 	const canvas = document.createElement('canvas');
	// 	canvas.width = videoElement.videoWidth;
	// 	canvas.height = videoElement.videoHeight;
	// 	const ctx = canvas.getContext('2d');
	// 	ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
	// 	canvas.toBlob(async (blob) => {
	// 		const formData = new FormData();
	// 		formData.append('file', blob, 'frame.jpg');
	// 		const response = await fetch('http://localhost:8123/count-people/', {
	// 			method: 'POST',
	// 			body: formData
	// 		});
	// 		const result = await response.json();
	// 		countMessage = `People in frame: ${result.count}`;
	// 		// videoElement.play();
	// 	});
	// };

	// async function processFrame() {
	// 	const videoElement = document.querySelector('video');
	// 	videoElement.pause();
	// 	const canvas = document.createElement('canvas');
	// 	canvas.width = videoElement.videoWidth;
	// 	canvas.height = videoElement.videoHeight;
	// 	const ctx = canvas.getContext('2d');
	// 	ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
	// 	canvas.toBlob(async (blob) => {
	// 		const formData = new FormData();
	// 		formData.append('file', blob, 'frame.jpg');
	// 		const response = await fetch('http://localhost:8123/process-frame/', {
	// 			method: 'POST',
	// 			body: formData
	// 		});
	// 		processedImage = URL.createObjectURL(await response.blob());
	// 		// videoElement.play();
	// 	});
	// }
	

</script>

<!-- <h1 class="flex justify-center items-center mt-5 text-3xl text-black">
	Welcome to Badar Expo Analytics
</h1> -->

<div class="hero-video">
	<video autoplay muted loop playsinline>
		<source src="videos/output.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="overlay"></div>
	<!-- Grey overlay -->
	<div class="content" use:filter={'#Emerald'} transition:fade={{ delay: 500, duration: 800 }}>
		<!-- <h1 class="flex justify-center items-center mt-5 text-3xl text-black">
			Welcome to Badar Expo Analytics
		</h1> -->
		<h1 class="text-6xl">
			<span
				class="bg-gradient-to-br from-red-700 to-slate-500 bg-clip-text text-transparent box-decoration-clone"
				>Welcome to VC Analytics</span
			>
		</h1>

		<p class="text-2xl">
			<span
				class="bg-gradient-to-br from-slate-300 to-red-800 bg-clip-text text-transparent box-decoration-clone"
				>A revolutionary platform to gain crowd insights</span
			>
		</p>
	</div>
</div>

<!-- <select bind:value={selectedVideo} on:change={handleVideoChange}>
	{#each videos as video}
		<option value={video}>{video}</option>
	{/each}
</select>
<div class="grid grid-cols-2 gap-4">
	<div>
		<VideoCard {selectedVideo} />
	</div>
	<div>
		{#if processedImage}
			<ImageCard image={processedImage} />
		{/if}
	</div>
</div>
<button on:click={countPeople}>Count People in Frame</button>
<button on:click={processFrame}>Process Current Frame</button>
<p>{countMessage}</p> -->

<!-- <script lang="ts">
	import { onMount } from 'svelte';

	let videos: any = [];
	let selectedVideo = '';

	onMount(async () => {
		// console.log('------------', 'inonMount');
		const response = await fetch('http://localhost:8123/list-videos/');
		// console.log('------------', response);
		const data = await response.json();
		// console.log('------------', data);
		videos = data.videos;
		if (videos.length > 0) {
			selectedVideo = `http://localhost:8123/videos/${videos[0]}`;
			console.log(selectedVideo);
		}
	});

	const changeVideo = (event: any) => {
		selectedVideo = `http://localhost:8123/videos/${event.target.value}`;
	};

	async function countPeople() {
		const response = await fetch('http://localhost:8123/count-people/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ video: selectedVideo })
		});
		const result = await response.json();
		alert(`People counted: ${result.count}`);
	}
</script>

<select on:change={changeVideo}>
	{#each videos as video}
		<option value={video}>{video}</option>
	{/each}
</select>

{#if selectedVideo}

	<video id="myVideo" src={selectedVideo} controls style="width:100%;">
		Your browser does not support the video tag.
	</video>

	<button on:click={countPeople}>Count People</button>
{/if} -->

<style>
	.hero-video {
		position: relative;
		width: 100%;
		height: 100vh; /* Full height */
		overflow: hidden;
	}

	.hero-video > video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: auto;
		min-width: 100%;
		height: auto;
		min-height: 100%;
		z-index: -1; /* Ensure video stays in the background */
		filter: blur(8px); /* Apply a blur effect to the video */
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey */
		z-index: 0; /* Between the video and the content */
	}

	.content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white; /* Ensure text is readable */
		z-index: 1; /* Above the video */
		background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey */
		padding: 20px; /* Spacing around text */
		border-radius: 10px; /* Optional: rounded corners */
		max-width: 80%; /* Limits the width, adjust as needed */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: soft shadow for 3D effect */
	}
</style>
