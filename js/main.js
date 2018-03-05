// main.js
'use strict';

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

	addSphere(scene);
	addLight(scene);

	function update() {
	// draw the scene!
	renderer.render(scene, camera);

	// schedule the next frame
	requestAnimationFrame(update);
	}

	// schedule the first frame
	requestAnimationFrame(update);
}

function addSphere(scene) {
	// set up the sphere constants
	const RADIUS = 50;
	const SEGMENTS = 16;
	const RINGS = 16;
	const sphereMaterial = new THREE.MeshLambertMaterial(
	{
		color: 0x0000CC
	});

	// create a new mesh with sphere geometry
	const sphere = new THREE.Mesh(
		new THREE.SphereGeometry(
			RADIUS,
			SEGMENTS,
			RINGS),
		sphereMaterial);

	// move the sphere where we can see it
	sphere.position.z = -300;

	// add the sphere to the scene
	scene.add(sphere);
}

function addLight(scene) {
	// create a point light
	const pointLight = new THREE.PointLight(0xFFFFFF);

	// set the light's position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);
}
