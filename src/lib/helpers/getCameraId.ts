import { writable } from 'svelte/store';

// Create a writable store for selectedCameraId
export const selectedCameraId = writable<number>(0);

// Function to set the selected camera ID
export function getCameraId(id: number) {
	selectedCameraId.set(id);
}
