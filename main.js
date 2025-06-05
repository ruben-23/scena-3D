
import * as THREE from "three";
import getLayer from "./getLayer.js";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'jsm/loaders/GLTFLoader.js';

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
renderer.setClearColor(0x667eea);
document.body.appendChild(renderer.domElement);

const ctrls = new OrbitControls(camera, renderer.domElement);
ctrls.enableDamping = true;

const loader = new GLTFLoader();

// pamant
const groundGeometry = new THREE.PlaneGeometry(20, 20);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22, side: THREE.DoubleSide, roughness: 0.8 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = - Math.PI / 2;
ground.position.y = 0;
scene.add(ground);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); 
directionalLight.position.set(5, 10, 7.5); 
directionalLight.castShadow = true;
scene.add(directionalLight);

// soare
const gradientBackground = getLayer({
  hue: 0.15,        
  numSprites: 12,   
  opacity: 0.3,     
  radius: 12,       
  size: 100,
  z: -  40.5
});
scene.add(gradientBackground);

// cerc animatie cal
const radius = 2;
let angle = 0; 
const circleCenter = {
  x: -6.5, 
  y: 0, 
  z: -5  
};


// -- adaugare modele --

const mixers = [];
// vaca
loadModel('public/Grooving_cow.glb', { x: 0, y: 0, z: -5 }, 0.4, { x: Math.PI / 9, y: 0, z: 0 });
// gard
loadModel('public/fence_wood.glb', { x: -0.8, y: 0, z: -9 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: -3.9, y: 0, z: -9 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: -6.9, y: 0, z: -9 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: -9.9, y: 0, z: -9 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: -0.8, y: 0, z: -1 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: -3.9, y: 0, z: -1 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: -6.9, y: 0, z: -1 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: -9.9, y: 0, z: -1 }, 0.8, { x: 0, y: 20, z: 0 });
loadModel('public/fence_wood.glb', { x: 2.5, y: 0, z: -9 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: 2.5, y: 0, z: -6 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: 2.5, y: 0, z: -4.2 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: -2.5, y: 0, z: -9 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: -2.5, y: 0, z: -6 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: -2.5, y: 0, z: -4.2 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: -9.9, y: 0, z: -9 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: -9.9, y: 0, z: -6 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });
loadModel('public/fence_wood.glb', { x: -9.9, y: 0, z: -4.2 }, 0.8, { x: 0, y: -Math.PI / 2 + 1.2, z: 0 });

// drum
loadModel('public/gravel_path.glb', { x: -8.4, y: 0.035, z: 0.1 }, 1, { x: 0, y: -Math.PI / 2 + 1.5, z: 0 });
loadModel('public/gravel_path.glb', { x: -5.6, y: 0.035, z: 0.2 }, 1, { x: 0, y: -Math.PI / 2 + 1.5, z: 0 });
loadModel('public/gravel_path.glb', { x: -2.8, y: 0.035, z: 0.3 }, 1, { x: 0, y: -Math.PI / 2 + 1.5, z: 0 });
loadModel('public/gravel_path.glb', { x: 0.08, y: 0.035, z: 0.4 }, 1, { x: 0, y: -Math.PI / 2 + 1.5, z: 0 });
loadModel('public/gravel_path.glb', { x: 2.9, y: 0.035, z: 0.5 }, 1, { x: 0, y: -Math.PI / 2 + 1.5, z: 0 });
loadModel('public/gravel_path.glb', { x: 5.7, y: 0.035, z: 0.6 }, 1, { x: 0, y: -Math.PI / 2 + 1.5, z: 0 });
loadModel('public/gravel_path.glb', { x: 8.5, y: 0.035, z: 0.7 }, 1, { x: 0, y: -Math.PI / 2 + 1.5, z: 0 });

// hambar
loadModel('public/Red_barn.glb', { x: 6.5, y: 0, z: -5 }, 2.2);
// cusca caine
loadModel('public/dog_house.glb', { x: 6, y: 0.1, z: 6 }, 0.5, { x: 0, y: 0, z: 0 });

// gaini
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function addRandomChickens(count = 80) {
  const modelOptions = [
    {
      path: 'public/chicken_rig.glb',
      scale: 1,
    },
    {
      path: 'public/cartoon_chicken.glb',
      scale: 0.01,
    }
  ];
  for (let i = 0; i < count; i++) {
    const modelType = modelOptions[Math.floor(Math.random() * modelOptions.length)];
    const position = {
      x: getRandomArbitrary(-10, 10),
      y: 0,
      z: getRandomArbitrary(-10, 10),
    };
    const rotation = {
      x: 0,
      y: getRandomArbitrary(0, Math.PI * 2),
      z: 0,
    };
    loadModel(modelType.path, position, modelType.scale, rotation);
  }
}
addRandomChickens();

// caine
loadModel('public/Rover.glb', { x: 9.3, y: 0, z: 5 }, 0.5);
// tractor
loadModel('public/final_tractor.glb', { x: -6, y: 0, z: 8.5 }, 0.5, { x: 0, y: -Math.PI / 2, z: 0 });

// cal
let horseModel;
loadModel('public/horse.glb', { x: -6, y: 0, z: -5 }, 1.5, { x: 0, y: 0, z: 0 }, (gltf) => {
  console.log("Horse model loaded");
  horseModel = gltf.scene; 
});


// functie pentru incarcare modele
function loadModel(path, position = { x: 0, y: 0, z: 0 }, scale = 1, rotation = { x: 0, y: 0, z: 0 }, onLoadCallback = null) {
  loader.load(
    path,
    (gltf) => {
      gltf.scene.position.set(position.x, position.y, position.z);
      gltf.scene.scale.set(scale, scale, scale);
      gltf.scene.rotation.set(rotation.x, rotation.y, rotation.z);
      scene.add(gltf.scene);

      if (gltf.animations.length > 0) {
        const localMixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          localMixer.clipAction(clip).play();
        });
        mixers.push(localMixer);
      }

      if (onLoadCallback)
        onLoadCallback(gltf);
    },
    undefined,
    (error) => {
      console.error(`Error loading model ${path}:`, error);
    }
  );
}


function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta(); // Get the time elapsed since the last frame
  // Update each mixer
  mixers.forEach((mixer) => {
    mixer.update(delta); // Update the mixer with the elapsed time
  });

  // animatie cal - cerc
  if (horseModel) {
    angle += 0.009; 
    horseModel.position.x = circleCenter.x - (radius * Math.cos(angle)); 
    horseModel.position.z = circleCenter.z + (radius * Math.sin(angle)); 

    horseModel.rotation.y = Math.atan2(horseModel.position.x - circleCenter.x, horseModel.position.z - circleCenter.z) + Math.PI / 2;
  }

  renderer.render(scene, camera); // Render the scene
}

const clock = new THREE.Clock();

animate();

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);


