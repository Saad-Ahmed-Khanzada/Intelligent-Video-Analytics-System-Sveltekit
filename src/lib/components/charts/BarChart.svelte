<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';
	import { getDailyData, getHourlyData, getTotalData } from '$lib/helpers/getDashboardData';

	let canvasElement: any;

	// export const DAILY_DATA = [
	// 	{ date: '2024-05-01', entrances: 400, exits: 380 },
	// 	{ date: '2024-05-02', entrances: 450, exits: 430 },
	// 	{ date: '2024-05-03', entrances: 500, exits: 480 },
	// 	{ date: '2024-05-04', entrances: 550, exits: 530 },
	// 	{ date: '2024-05-05', entrances: 600, exits: 580 },
	// 	{ date: '2024-05-06', entrances: 650, exits: 630 },
	// 	{ date: '2024-05-07', entrances: 700, exits: 680 }
	// ];

	onMount(async () => {
		const res = await getTotalData();
		console.log('------------------------res', res);
		const labels = Object.keys(res);
		const data = Object.values(res);
		// const exitsData = res.map((data) => ({ x: data.date, y: data.exits }));
		console.log('------------------------res', res.currentHeadCount);
		const ctx = canvasElement.getContext('2d');
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Total Stats',
						data: data,

						backgroundColor: [
							'rgba(255, 99, 132, 0.6)',
							'rgba(255, 159, 64, 0.6)',
							'rgba(255, 205, 86, 0.6)',
							'rgba(75, 192, 192, 0.6)'
						]
					}
				]
			},
			// 			{
			// 				label: 'Head Count',
			// 				data: res.currentHeadCount,
			// 				borderColor: 'rgb(75, 192, 192)',
			// 				backgroundColor: 'rgba(75, 192, 192, 0.5)'
			// 			}
			// 			// {
			// 			// 	label: 'Head Count',
			// 			// 	data: res.currentHeadCount,
			// 			// 	borderColor: 'rgb(75, 192, 192)',
			// 			// 	backgroundColor: 'rgba(75, 192, 192, 0.5)'
			// 			// },
			// 			// {
			// 			// 	label: 'Head Count',
			// 			// 	data: res.currentHeadCount,
			// 			// 	borderColor: 'rgb(75, 192, 192)',
			// 			// 	backgroundColor: 'rgba(75, 192, 192, 0.5)'
			// 			// },
			// 			// {
			// 			// 	label: 'Head Count',
			// 			// 	data: res.currentHeadCount,
			// 			// 	borderColor: 'rgb(75, 192, 192)',
			// 			// 	backgroundColor: 'rgba(75, 192, 192, 0.5)'
			// 			// }
			// 		]
			// },
			options: {
				// 	scales: {
				// 		x: {
				// 			type: 'time',
				// 			time: {
				// 				unit: 'day'
				// 			},
				// 			title: {
				// 				display: true,
				// 				text: 'Date'
				// 			}
				// 		},
				// 		y: {
				// 			beginAtZero: true,
				// 			title: {
				// 				display: true,
				// 				text: 'Count'
				// 			}
				// 		}
				// 	},
				responsive: true,
				plugins: {
					legend: {
						position: 'top'
					},
					tooltip: {
						mode: 'index',
						intersect: false
					}
				}
				// 	interaction: {
				// 		mode: 'nearest',
				// 		axis: 'x',
				// 		intersect: false
				// 	}
			}
		});
	});
</script>

<canvas bind:this={canvasElement}></canvas>
