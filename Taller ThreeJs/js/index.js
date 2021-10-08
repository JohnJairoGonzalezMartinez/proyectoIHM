import { OrbitControls } from './OrbitControls.js'
import * as THREE from './three.module.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)


const loader = new THREE.TextureLoader()
loader.load( './js/img1.jpg', (texture) =>{
	material.map = texture
	animate()
} )


camera.position.z = 4


const controls = new OrbitControls( camera, renderer.domElement )
controls.update()

controls.screenSpacePanning = true
controls.minDistance = 3
controls.maxDistance = 10

const animate = function () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

let angle1 = 0
let angle2 = Math.PI
let radius = 4

window.onkeydown = function(e){
	/*
	switch( e.key ){
		case 's': angle2 -= 0.03; break
		case 'w': angle2 += 0.03; break
		case 'a': angle1 += 0.03; break
		case 'd': angle1 -= 0.03; break
		default: return
	}
	camera.position.x = radius * Math.cos( angle1 ) * Math.sin( angle2 )
	camera.position.z = radius * Math.sin( angle1 ) * Math.sin( angle2 )
	camera.position.y = radius * Math.cos( angle2 )
	controls.update()
	*/
	switch( e.key ){
		case "w": cube.rotation.x += 0.1; break;
		case "a": cube.rotation.z += 0.1; break;
		case "s": cube.rotation.x -= 0.1; break;
		case "d": cube.rotation.z -= 0.1; break;
		default: return
	}
	controls.update()


}

//animate()

//Vector3 {x: -0.027871364178619466, y: 6.999944513141431, z: -0} -0.22813082230430315 -0.0039816339744922075
//Vector3 {x: 0.3220148794766925, y: 6.992589392878407, z: 0} 2.636658153349813 0.046018366025507795