<script lang="ts">
	// import { get } from 'http';
	import CameraSelectionRail from '$lib/components/PageSelectionRail/PageSelectionRail.svelte';
	import VideoCard from '$lib/components/VideoCard/VideoCard.svelte';
	import { fade } from 'svelte/transition';

	// let videoUrl = 'https://example.com/streaming-video-endpoint';
	// let imageUrl = 'https://example.com/image-endpoint';

	let videoElement;
	let imageElement;
	// export let data: PageData;

	// console.log(data);
	// const getCamList = async () => {
	// 	const response = await fetch('/api/camStream');
	// 	const data = await response.json();
	// 	return data;
	// };

	// onMount(async () => {
	// const res = getCamList();
	// console.log;
	// Fetch the video stream
	// videoElement.src = videoUrl;
	// Fetch the image
	// imageElement.src = imageUrl;
	// });

	// $: {
	// 	videoElement = document.querySelector('.video');
	// 	imageElement = document.querySelector('.image');
	// }
</script>

<!-- <div class="container p-10" transition:fade={{ delay: 250, duration: 300 }}>
	<video class="video" controls autoplay></video>
	<img class="image" alt="Image" />
</div> -->
<VideoCard />

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.video {
		width: 50%;
	}

	.image {
		width: 50%;
	}
</style>
