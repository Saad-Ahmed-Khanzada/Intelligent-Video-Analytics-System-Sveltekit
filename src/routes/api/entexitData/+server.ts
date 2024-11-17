import { json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		// Define the URLs
		const entranceUrl = 'http://localhost:8888/dash_estfootfall_line_entexit';
		const headcountUrl = 'http://localhost:8888/dash_headcount';
		const bagcountUrl = 'http://localhost:8888/dash_bagcount';

		// Fetch all data concurrently
		const [entranceRes, headcountRes, bagcountRes] = await Promise.all([
			fetch(entranceUrl, { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
			fetch(headcountUrl, { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
			fetch(bagcountUrl, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
		]);

		// Parse the JSON responses
		const entranceData = await entranceRes.json();
		const headcountData = await headcountRes.json();
		const bagcountData = await bagcountRes.json();

		// console.log('ENTRANCE EXIT DATASET', entranceData);
		// console.log('HEADCOUNT DATASET', headcountData);
		// console.log('BAGCOUNT DATASET', bagcountData);

		return json({
			status: 200,
			body: {
				entranceData,
				headcountData,
				bagcountData
			}
		});
	} catch (error: any) {
		return json({
			status: 500,
			body: { error: error.message }
		});
	}
};
