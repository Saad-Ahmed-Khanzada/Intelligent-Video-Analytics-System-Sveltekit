<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { getDailyData } from '$lib/helpers/getDashboardData';

	let canvasElement;

	onMount(async () => {
		const res = await getDailyData();
		// console.log('-----------------------res', res);
		const ctx = canvasElement.getContext('2d');
		new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ['Red', 'Blue', 'Yellow'],
				datasets: [
					{
						label: 'My First Dataset',
						data: [300, 50, 100],
						backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
						hoverOffset: 4
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'top'
					},
					tooltip: {
						enabled: true
					}
				}
			}
		});
	});
</script>

<canvas bind:this={canvasElement}></canvas>
