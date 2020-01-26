import App from './App.svelte';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = MAPBOX_API_KEY;

console.log(MAPBOX_API_KEY);

window.addEventListener('DOMContentLoaded', event => {
	let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		// style: 'mapbox://styles/mapbox/light-v10',
		zoom: 12,
		center: [-122.447303, 37.753574]
	});

	map.on('load', () => {
		// Todo
	});
});


const app = new App({
	target: document.body,
	props: {}
});

export default app;