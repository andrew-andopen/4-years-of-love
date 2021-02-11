gsap.registerPlugin(ScrollTrigger);



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




const index = document.getElementById('index')

if(index){

// Insta
// ScrollTrigger.defaults({
//   markers: true,
// })


///COUNTER
const ContTotal = {val: 0},
  NewVal = 200000;

const tlInsta = gsap.timeline();
tlInsta
.to(".emoji-wrap",  5.5,{yPercent: -96, ease:  CustomEase.create("custom", "M0,0,C0.104,0.204,0.536,1.12,1,1")},)
.to(".feed-wrapper", 5.5,{yPercent: -80.9, ease: CustomEase.create("custom", "M0,0,C0.104,0.204,0.536,1.12,1,1")}, 0)
.to(ContTotal, 4, {
  val: NewVal,
  roundProps: 'val',
  onUpdate: function() {
    const formattedNumber = ContTotal.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    document.getElementById('wins-counter').innerHTML = formattedNumber + '<br>happy customers';
  }
}, 0);


ScrollTrigger.create({
  animation: tlInsta,
  trigger: ".wins",
  start: "-20%",
});

// const tlWinner = gsap.timeline({ repeat:1, yoyo:true }).delay(4);
// tlWinner
// .fromTo(".winner", 1, {scale: 0, opacity:0, rotationY: 0, rotationY: 0,}, {scale: 1, opacity:0.7, rotationY: 540,});
// ScrollTrigger.create({
//   animation: tlWinner,
//   trigger: ".wins",
//   start: "-20%",
// });
  

//Marquee
const giftZone = '<h1>Gift Zone</h1>';
const giftImage = '<img src="oprah.png" class="oprah">';
const newtext = new Array(120).fill(giftZone).join(giftImage);

const marqueeText = document.querySelector('.marquee-text')
marqueeText.innerHTML = newtext


//Pass in name to form
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const fname = urlParams.get('fname')
console.log(fname);

const lname = urlParams.get('lname')
console.log(lname);

const email = urlParams.get('email')
console.log(email);

const firstNameTag = document.querySelectorAll(".fname")
const lastNameTag = document.querySelectorAll(".lname")
const emailTag = document.querySelectorAll(".email")
const titleName = document.querySelectorAll(".title-name")

  firstNameTag.forEach((firstNameInput) => {
    firstNameInput.value = fname
  });

  lastNameTag.forEach((lastNameInput) => {
    lastNameInput.value = lname
  });

  emailTag.forEach((emailInput) => {
    emailInput.value = email
  });

  titleName.forEach((name) => {
    name.innerHTML = fname
  });


//validate non requered fields
const addressTwoTag = document.getElementById('address-two');
const addressTwoLabeltag = document.getElementById('address-two-label');

const checkValue = function () {
     const value = addressTwoTag.value.trim()
  if (value) {
   addressTwoLabeltag.classList.add('valid-form');
  } else {
 addressTwoLabeltag.classList.remove('valid-form');
  }
}

addressTwoTag.addEventListener('focus', (evt) => {
  addressTwoLabeltag.classList.add('valid-form');
})

addressTwoTag.addEventListener('blur', (evt) => {
  addressTwoLabeltag.classList.remove('valid-form');
checkValue()
})

addressTwoTag.addEventListener('input', evt => {
checkValue()
})

}
