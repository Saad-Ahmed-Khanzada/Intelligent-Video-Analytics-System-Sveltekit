import { env } from '$env/dynamic/private';
// import { POCKETBASE_USERNAME, POCKETBASE_PASSWORD } from '$env/static/private';
import { redirect, json } from '@sveltejs/kit';
import { cookieSerialize } from 'pocketbase';

import { pb } from '$lib/database';

const loginToPocketbase = async () => {
	try {
		await pb.collection('users').authWithPassword(env.POCKETBASE_USERNAME, env.POCKETBASE_PASSWORD);

		let token = pb.authStore.token;

		if (!token || typeof token !== 'string') {
			throw redirect(303, '/');
		}

		// Serialize the token into a cookie
		const cookie = cookieSerialize('auth_token', token, {
			httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
			path: '/' // Makes the cookie available across your site
		});

		return {
			status: 200,
			headers: {
				'Set-Cookie': cookie
			},
			body: {
				message: 'Logged in successfully'
			}
		};
		// throw redirect(303, '/');
	} catch (err) {
		console.error(err);
		return {
			status: 301,
			body: {
				message: 'Failed to login'
			}
		};
	}
};

export const POST = async () => {
	let pocketbaseAuthRes = await loginToPocketbase();
	return new Response(JSON.stringify(pocketbaseAuthRes.body), {
		status: pocketbaseAuthRes.status,
		headers: pocketbaseAuthRes.headers
	});
};
