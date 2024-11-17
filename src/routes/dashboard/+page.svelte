<script lang="ts">
	// import { onMount } from 'svelte';
	// import { Pie, Line, Chart } from 'svelte-chartjs';
	import BarChart from '$lib/components/charts/BarChart.svelte';
	import PieChart from '$lib/components/charts/PieChart.svelte';
	import TimeSeriesChart from '$lib/components/charts/TimeSeriesChart.svelte';
	import 'chart.js/auto';
	import { writable } from 'svelte/store';

	import { fade, blur } from 'svelte/transition';
	// import { getEntranceDashboardData } from '$lib/helpers/getDashboardData';
	import { onMount } from 'svelte';
	// Data for Time Series Graph
	let intervalId: any;
	const lineData = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [0, 10, 5, 2, 20, 30, 45]
			}
		]
	};
	// async function fetchData() {
	// 	try {
	// 		const response = await getEntranceDashboardData();
	// 		console.log('-------------DASHBOARD ENTRANCE RESPONSE', await response.analysis[0]);
	// 	} catch (error) {
	// 		console.error('Error fetching data:', error);
	// 	}
	// }
	// onMount(() => {
	// 	fetchData();
	// });

	// function startSendingFrames() {
	// 	if (intervalId) clearInterval(intervalId);

	// 	intervalId = setInterval(async () => {
	// 		try {
	// 			await fetchFrame();
	// 		} catch (error) {
	// 			console.error('Error fetching frame:', error);
	// 		}
	// 	}, 1000);
	// }

	// onMount(() => {
	// 	const interval = setInterval(() => {
	// 		counter.update((n) => n + 1);
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// });
</script>

<TimeSeriesChart />

<!-- <section
	class="grid grid-cols-2 md:grid-cols-2 gap-2 p-10 items-center justify-center"
	transition:fade={{ delay: 250, duration: 300 }}
>
	<div class="flex flex-col justify-center items-center"></div>
</section> -->

<!-- <div class="grid gap-4">
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
		<div>
			<img
				class="h-auto max-w-full rounded-lg"
				src="https://images.unsplash.com/photo-1610220941077-1ec123e7c043?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4NjV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
				alt=""
			/>
		</div>
	</div> -->

<style>
	:global(body) {
		@apply bg-gray-100;
	}
</style>
