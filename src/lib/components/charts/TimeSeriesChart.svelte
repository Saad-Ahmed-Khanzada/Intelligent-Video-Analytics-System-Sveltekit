<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';
	import { getDashboardData } from '$lib/helpers/getDashboardData'; // Adjust this import as per your project structure

	let entranceCanvas: HTMLCanvasElement;
	let headcountCanvas: HTMLCanvasElement;
	let bagcountCanvas: HTMLCanvasElement;
	let entranceChart: Chart | null = null;
	let headcountChart: Chart | null = null;
	let bagcountChart: Chart | null = null;
	let estimatedFootfall: number | null = null;
	let estimatedEntrances: number | null = null;
	let estimatedExits: number | null = null;

	async function fetchData() {
		try {
			const response = await getDashboardData('/api/entexitData');
			// console.log('22222222222222222222', response.body);
			const entranceAnalysis = response.body.entranceData.analysis;
			const headcountAnalysis = response.body.headcountData.analysis;
			const bagcountAnalysis = response.body.bagcountData.analysis;
			// console.log('4444444444444444444', entranceAnalysis, headcountAnalysis, bagcountAnalysis);

			// console.log('Entrance Analysis:', entranceAnalysis);
			// console.log('Headcount Analysis:', headcountAnalysis);
			// console.log('Bagcount Analysis:', bagcountAnalysis);

			// Set the estimated values for the first API
			estimatedFootfall = response.body.entranceData.estimated_footfall;
			estimatedEntrances = response.body.entranceData.estimated_entrances;
			estimatedExits = response.body.entranceData.estimated_exits;

			// Process the data for Chart.js
			const entrancesData = entranceAnalysis.map(
				(data: { time: string; count_entrance: number }) => ({
					x: data.time,
					y: data.count_entrance
				})
			);
			const exitsData = entranceAnalysis.map((data: { time: string; count_exit: number }) => ({
				x: data.time,
				y: data.count_exit
			}));
			const headcountData = headcountAnalysis.map((data: { time: string; count: number }) => ({
				x: data.time,
				y: data.count
			}));
			const bagcountData = bagcountAnalysis.map((data: { time: string; count: number }) => ({
				x: data.time,
				y: data.count
			}));

			// entranceChart?.destroy();
			// headcountChart?.destroy();
			// bagcountChart?.destroy();

			entranceChart = createChart(entranceCanvas, 'Entrances', 'Exits', entrancesData, exitsData);
			headcountChart = createChart(headcountCanvas, 'Headcount', '', headcountData, []);
			bagcountChart = createChart(bagcountCanvas, 'Bagcount', '', bagcountData, []);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	function createChart(
		canvas: HTMLCanvasElement,
		label1: string,
		label2: string,
		data1: { x: string; y: number }[],
		data2: { x: string; y: number }[]
	) {
		const ctx = canvas.getContext('2d');
		if (ctx) {
			const chart = new Chart(ctx, {
				type: 'line',
				data: {
					datasets: [
						{
							label: label1,
							data: data1,
							borderColor: 'rgb(75, 192, 192)',
							backgroundColor: 'rgba(75, 192, 192, 0.5)'
						},
						...(data2.length > 0
							? [
									{
										label: label2,
										data: data2,
										borderColor: 'rgb(255, 99, 132)',
										backgroundColor: 'rgba(255, 99, 132, 0.5)'
									}
								]
							: [])
					]
				},
				options: {
					scales: {
						x: {
							type: 'time',
							time: {
								unit: 'day'
							},
							title: {
								display: true,
								text: 'Date'
							}
						},
						y: {
							beginAtZero: true,
							title: {
								display: true,
								text: 'Count'
							}
						}
					},
					responsive: true,
					plugins: {
						legend: {
							position: 'top'
						},
						tooltip: {
							mode: 'index',
							intersect: false
						}
					},
					interaction: {
						mode: 'nearest',
						axis: 'x',
						intersect: false
					}
				}
			});
			return chart;
		}
		return null;
	}

	onMount(async () => {
		setInterval(async () => {
			try {
				await fetchData();
				// entranceChart?.destroy();
				// headcountChart?.destroy();
				// bagcountChart?.destroy();
				// entranceChart?.update();
				// headcountChart?.update();
				// bagcountChart?.update();
			} catch (error) {
				console.error('Error fetching frame:', error);
			}
		}, 200); // 500 milliseconds = 0.5 seconds
	});

	onDestroy(() => {
		if (entranceChart) entranceChart.destroy();
		if (headcountChart) headcountChart.destroy();
		if (bagcountChart) bagcountChart.destroy();
	});
</script>

<div class="count-box">
	<div class="box">
		<h2>{estimatedFootfall ?? 'Loading...'}</h2>
		<p>Estimated Footfall</p>
	</div>
	<div class="box">
		<h2>{estimatedEntrances ?? 'Loading...'}</h2>
		<p>Estimated Entrances</p>
	</div>
	<div class="box">
		<h2>{estimatedExits ?? 'Loading...'}</h2>
		<p>Estimated Exits</p>
	</div>
</div>
<div class="grid grid-cols-2 grid-rows-2">
	<div class="col-span-2">
		<canvas bind:this={entranceCanvas} class="chart"></canvas>
	</div>
	<div>
		<canvas bind:this={headcountCanvas} class="chart"></canvas>
	</div>
	<div>
		<canvas bind:this={bagcountCanvas} class="chart"></canvas>
	</div>
</div>

<style>
	.count-box {
		display: flex;
		gap: 20px;
		margin-bottom: 20px;
	}
	.box {
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
		text-align: center;
		flex: 1;
	}
	.box h2 {
		margin: 0;
		font-size: 2em;
	}
	.box p {
		margin-top: 0.2em;
		font-size: 1em;
		color: #555;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
		.grid .col-span-2 {
			grid-column: span 2;
		}
	}

	.chart {
		width: 100%;
		height: 200px; /* Adjust the height as needed */
	}

	canvas {
		margin-bottom: 20px;
	}
</style>
