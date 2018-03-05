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
	const CAMERA_R = 300;

	var time = 0;

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
	camera.position.z = CAMERA_R;
	scene.add(camera);

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the renderer-supplied DOM element
	container.appendChild(renderer.domElement);

	scene.add(createSphere());
	scene.add(createLight(0, 0,  150, 0xFF0000));
	scene.add(createLight(0, 0, -150, 0xFF0000));
	scene.add(createLight(0,  150, 0, 0x00FF00));
	scene.add(createLight(0, -150, 0, 0x00FF00));
	scene.add(createLight( 150, 0, 0, 0x0000FF));
	scene.add(createLight(-150, 0, 0, 0x0000FF));

	function update() {
		// draw the scene!
		renderer.render(scene, camera);

		// advance time
		time += 0.02 % (2 * Math.PI);

		// move camera
		camera.position.x = CAMERA_R * Math.cos(time);
		camera.position.y = CAMERA_R * Math.sin(time) / 2;
		camera.position.z = CAMERA_R * Math.sin(time);
		camera.lookAt(scene.position);

		// schedule the next frame
		requestAnimationFrame(update);
	}

	// schedule the first frame
	requestAnimationFrame(update);
}

function createSphere() {
	// set up the sphere constants
	const RADIUS = 50;
	const SEGMENTS = 16;
	const RINGS = 16;
	const sphereMaterial = new THREE.MeshLambertMaterial(
	{
		color: 0xFFFFFF
	});

	// create a new mesh with sphere geometry
	const sphere = new THREE.Mesh(
		new THREE.SphereGeometry(
			RADIUS,
			SEGMENTS,
			RINGS),
		sphereMaterial);

	return sphere;
}

function createLight(x, y, z, color) {
	// create a point light
	const pointLight = new THREE.PointLight(color);

	// set the light's position
	pointLight.position.x = x;
	pointLight.position.y = y;
	pointLight.position.z = z;

	return pointLight;
}
