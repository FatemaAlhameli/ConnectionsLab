

let scene = new THREE.Scene();
scene.background = new THREE.Color('black');

//Create a camera
let camera = new THREE.PerspectiveCamera(500, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 3;

//Create a renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//Add the renderer to the DOM
document.body.appendChild(renderer.domElement);

let geometry = new THREE.SphereGeometry(2);

let imageLink = 'mars.jpg';
let imageLoader =  new THREE.TextureLoader();
let imageTexture =  imageLoader.load(imageLink);
//Now we can pass the texture onto the material
let material = new THREE.MeshBasicMaterial( { map: imageTexture} );
const controls = new THREE.OrbitControls(camera, renderer.domElement);
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let rotate = true;
let rotateX = 0.01;
let rotateY = 0.01;

function animate(){

	if(rotate){
		cube.rotation.x += rotateX;
		cube.rotation.y += rotateY;
	}

	//allow for controls to update
	// controls.update();

	//call render
	renderer.render(scene, camera);

	// call animate again 
	requestAnimationFrame(animate);
}

animate();