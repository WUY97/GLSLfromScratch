//Enter your code here

// Create a scene
const scene = new THREE.Scene();
// Create a camera
const camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0.1, 10 );
// Create a renderer
const renderer = new THREE.WebGLRenderer();
// Set the size of the renderer to full screen
renderer.setSize( window.innerWidth, window.innerHeight );
// Add the renderer to the current document
document.body.appendChild( renderer.domElement );

// Create a plane
const geometry = new THREE.PlaneGeometry( 2, 2 );
const material = new THREE.ShaderMaterial();
const plane = new THREE.Mesh( geometry, material );
// Add the plane to the scene
scene.add( plane );

// Set the camera position
camera.position.z = 1;

// Set the shader code
onWindowResize();
animate();

//End of your code
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

function onWindowResize( event ) {
  const aspectRatio = window.innerWidth/window.innerHeight;
  let width, height;
  if (aspectRatio>=1){
    width = 1;
    height = (window.innerHeight/window.innerWidth) * width;
  }else{
    width = aspectRatio;
    height = 1;
  }
  camera.left = -width;
  camera.right = width;
  camera.top = height;
  camera.bottom = -height;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}