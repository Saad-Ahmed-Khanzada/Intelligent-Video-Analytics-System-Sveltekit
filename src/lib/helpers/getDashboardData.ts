import { DAILY_DATA } from '$lib/dummyData/daily_data';
import { TOTAL_COUNTS } from '$lib/dummyData/total_counts';

export const getDailyData = async () => {
	// console.log('-------------------------------DAILY_DATA', DAILY_DATA);
	return DAILY_DATA;
};

export const getHourlyData = async () => {
	// console.log('-------------------------------DAILY_DATA', DAILY_DATA);
	return DAILY_DATA;
};

export const getTotalData = async () => {
	// console.log('-------------------------------DAILY_DATA', DAILY_DATA);
	return TOTAL_COUNTS;
};

export const getDashboardData = async (url: string) => {
	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Error fetching dashboard data:', error);
		throw error; // Rethrow the error to handle it in the calling code
	}
};
