//Main animation
let dots = [],
  bg = document.querySelector('#featureAnimation'),
  i,
  dot

const shapes = [
  "shape",
  "shape"
]

const images = [
    'flower_pot.png',
    'donkey.png',
  'trowel.png',
  'big_read.png',
  'city_print.png',
  'sock.png',
  'sock.png'
]

  // create 80 dot elements and put them in an array
for (i = 0; i < 30; i++) {
  dot = document.createElement('div')
  dot.setAttribute('class', "shape")
  bg.appendChild(dot)
  dots.push(dot)
}

  // assign random background images to dots
const setBackgroundImages = function () {
  dots.forEach (dot => {
const random = Math.floor(Math.random() * (0, images.length));
dot.style.backgroundImage = 'url(' + images[random] + ')';
  })

}
setBackgroundImages()

//set the initial position of all the dots, and pick a random color for each from an array of colors
gsap.set(dots, {
  scale: 'random(3, 3)',
  x: '50vw',
  y: '100vh',
  rotation: 'random(0, 360)'
})

// create the physics2D animation
   let timeLine = gsap.to(dots, {
  duration: 3.5,
  physics2D: {
    velocity: 'random(350, 400)',
    angle: "random(260, 280)",
    gravity: 'random(250, 300)',
    friction: 'random(0.05, 0.04)',
  },
   repeat: -1,
})
  