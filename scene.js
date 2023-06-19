var audio = new Audio('assets/music.mp3')
audio.volume = 0.1
var scene = new THREE.Scene()
scene.background = null
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
var renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(1000, 500)
document.getElementById('scene-wrapper').appendChild(renderer.domElement)
var map = new THREE.TextureLoader().load('./obj/pig.png')
var material = new THREE.MeshBasicMaterial({ map: map })
var loader = new THREE.OBJLoader()
let pig
loader.load('obj/pig.obj', (object) => {
  pig = object
  pig.traverse(function(node) {
    if (node.isMesh) node.material = material
  })
  scene.add(pig)
})

camera.position.z = 25

function render() {
  requestAnimationFrame(render)
  if (pig) {
    pig.rotation.x += 0.01
    pig.rotation.y += 0.01
    pig.rotation.z += 0.01
  }
  renderer.render(scene, camera)
}
render()
audio.play()
