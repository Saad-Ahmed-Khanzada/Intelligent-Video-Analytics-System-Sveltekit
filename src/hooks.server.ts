import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
// src/hooks.server.js

export async function handle({ event, resolve }: { event: any; resolve: any }) {
	// event.locals.pb = new PocketBase('127.0.0.1:8090');
	event.locals.pb = new PocketBase(env.POCKETBASE_HOST);

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)

		event.locals.pb.authStore.isValid;
		event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh());
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: false })
	);
}

// export const handle: Handle = async ({ event, resolve }) => {
// 	let theme = '';

// 	const cookieTheme = event.cookies.get('theme');

// 	if (cookieTheme) {
// 		theme = cookieTheme;
// 	} else {
// 		event.cookies.set('theme', 'skeleton', { path: '/' });
// 		theme = 'skeleton';
// 	}

// 	return await resolve(event, {
// 		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
// 	});
// };

// src/hooks.server.ts

// src/hooks.server.js
