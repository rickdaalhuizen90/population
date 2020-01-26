<svelte:head>
	<link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
</svelte:head>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
	}

	#map {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100vh;
	}
</style>

<div id="map"></div>