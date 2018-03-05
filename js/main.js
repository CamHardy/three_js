// main.js

window.onload = function () {
	// set the scene size
	const WIDTH = 400;
	const HEIGHT = 300;

	// set camera attributes
	const VIEW_ANGLE = 45;
	const ASPECT = WIDTH / HEIGHT;
	const NEAR = 0.1;
	const FAR = 10000;

	// get the DOM element to attach to
	const container = document.getElementById('the_zone');

	// create a WebGL renderer, camera, and a scene
	const renderer = new THREE.WebGLRenderer();
	const camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
	const scene = new THREE.Scene();

	// add the camera to the scene
	scene.add(camera);

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the renderer-supplied DOM element
	container.appendChild(renderer.domElement);
}
