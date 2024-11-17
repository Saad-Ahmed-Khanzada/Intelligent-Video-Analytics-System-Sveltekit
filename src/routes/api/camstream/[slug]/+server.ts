// import { json } from '@sveltejs/kit';

// const fetchCategoryList = async (modelType?: String) => {
// 	let data: any = [];
// 	try {
// 		switch (modelType) {
// 			case 'selectCamera': {
// 				data = [
// 					{ cameraId: 1, cameraName: 'Entrane', href: '/cam1' },
// 					{ cameraId: 2, cameraName: 'Exit', href: '/cam2' },
// 					{ cameraId: 3, cameraName: 'HeadCount', href: '/cam3' },
// 					{ cameraId: 4, cameraName: 'Bag Detection', href: '/cam3' }
// 				];
// 				break;
// 			}
// 			case 'exit': {
// 				data = [
// 					{ cameraId: 3, cameraName: 'Camera 3', href: '/cam3' },
// 					{ cameraId: 4, cameraName: 'Camera 4', href: '/cam4' }
// 				];
// 				break;
// 			}
// 			case 'headCount': {
// 				data = [
// 					{ cameraId: 5, cameraName: 'Camera 5', href: '/cam5' },
// 					{ cameraId: 6, cameraName: 'Camera 6', href: '/cam6' }
// 				];
// 				break;
// 			}
// 			case 'bagDetection': {
// 				data = [
// 					{ cameraId: 5, cameraName: 'Camera 5', href: '/cam5' },
// 					{ cameraId: 6, cameraName: 'Camera 6', href: '/cam6' }
// 				];
// 				break;
// 			}
// 			default: {
// 				break;
// 			}
// 		}

// 		return data;
// 	} catch (error) {
// 		console.error('Error fetching stories:', error);
// 		return error;
// 	}
// };

// export const GET = async ({ params }: any) => {
// 	let catList: any = [];
// 	console.log('CATACAT', params);

// 	catList = await fetchCategoryList(params.slug);
// 	console.log('ssssssssssssssssss1', catList);

// 	return json({ catList: catList });

// };

// const fetchvideoStream = async (contentID: String) => {
// 	try {
// 		const res = await fetch(`https://bajao.pk/api/freeStreamLnk/${contentID.toString()}`, {
// 			headers: {
// 				token: 'test'
// 			}
// 		});

// 		const data = await res.json();
// 		return data;
// 	} catch (error) {
// 		console.error('Error fetching stories:', error);
// 		return error;
// 	}
// };
