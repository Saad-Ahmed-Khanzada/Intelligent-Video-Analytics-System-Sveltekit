import { json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const res = await fetch('http://localhost:8888/heatmap', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = await res.json();
		console.log('=result is here', result);

		return json({
			status: 200,
			body: result
		});
	} catch (error: any) {
		return json({
			status: 500,
			body: { error: error.message }
		});
	}
};
