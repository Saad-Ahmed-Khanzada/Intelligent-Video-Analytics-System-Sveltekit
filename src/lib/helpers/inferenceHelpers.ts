import { DAILY_DATA } from '$lib/dummyData/daily_data';

// export const getEntranceData = async (frame: any) => {
// 	const res = await fetch('/api/detectCount', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({ image: frame })
// 	});
// 	const data = await res.json();
// 	return data.body;
// };
export const getEntranceData = async () => {
	try {
		const res = await fetch('/api/detectCount', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		return data.body;
	} catch (error) {
		console.error('Error fetching entrance data:', error);
		throw error; // Rethrow the error to handle it in the calling code
	}
};

export const getHeatMap = async () => {
	try {
		const res = await fetch('/api/heatmap', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		return data.body;
	} catch (error) {
		console.error('Error fetching entrance data:', error);
		throw error; // Rethrow the error to handle it in the calling code
	}
};
