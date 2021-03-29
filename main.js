gsap.registerPlugin(ScrollTrigger);



//Global JS
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



//Index specific JS
const index = document.getElementById('index')
if(index){

  // gsap.registerPlugin(DrawSVGPlugin);
  

// Global scroll attributes
ScrollTrigger.defaults({
  markers: false,
})

///COUNTER
// const ContTotal = {val: 0},
//   NewVal = 159191;

// const tlCounter = gsap.timeline();
// tlCounter.to(ContTotal, 4, {
//   val: NewVal,
//   roundProps: 'val',
//   onUpdate: function() {
//     const formattedNumber = ContTotal.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

//     document.getElementById('gift-counter').innerHTML = formattedNumber;
//   }
// }, 0);

// ScrollTrigger.create({
//   animation: tlCounter,
//   trigger: ".last-year",
//   start: "0%",
//   end: "70%",
//   scrub: 1,
//   id: "COUNTER",
//   anticipatePin: 1,
// });


///Looper
// const tlLooper = gsap.timeline();

// tlLooper.fromTo("#looper",{drawSVG:"0%"}, {drawSVG:"100%"})
// .fromTo("#arrow-head", {drawSVG:"0%"}, {drawSVG:"100%"})
// .fromTo("#so-far", {scale: 0}, {scale: 1}, "-=0.8");


// ScrollTrigger.create({
//   animation: tlLooper,
//   trigger: ".total-gifts",
//   start: "-25%",
//   end: "10%",
//   scrub: 1,
//   id: "Looper",
//   anticipatePin: 1,
// });



///Insta
// const tlInsta = gsap.timeline();
// tlInsta
// .to(".emoji-wrap",  18,{yPercent: -94.5, ease: "none"},)
// .to(".feed-wrapper", 18,{yPercent: -94.3, ease: "none"}, 0);

// , ease:  CustomEase.create("custom", "M0,0,C0.104,0.204,0.536,1.12,1,1")
// , ease: CustomEase.create("custom", "M0,0,C0.104,0.204,0.536,1.12,1,1")

// ScrollTrigger.create({
//   animation: tlInsta,
//   trigger: ".wins",
//   start: "-5%",
//   anticipatePin: 1,
//   toggleActions: "play pause resume reset",
// });




// const tlWinner = gsap.timeline({ repeat:1, yoyo:true }).delay(4);
// tlWinner
// .fromTo(".winner", 1, {scale: 0, opacity:0, rotationY: 0, rotationY: 0,}, {scale: 1, opacity:0.7, rotationY: 540,});
// ScrollTrigger.create({
//   animation: tlWinner,
//   trigger: ".wins",
//   start: "-20%",
// });
  

//Marquee
const giftZone = '<h1>gift for you</h1>';
const giftImage = '<div class="g-box"> 🎁 </div>';
const newtext = new Array(120).fill(giftZone).join(giftImage);

const marqueeText = document.querySelector('.marquee-text')
marqueeText.innerHTML = newtext


//Cards
// const tlCards = gsap.timeline();
// tlCards.set(".card", {opacity:"0", y:"80px",})
// tlCards.staggerTo(".card", 0.3, {opacity: "1", y:"0",}, 0.09,);

// ScrollTrigger.create({
//   animation: tlCards,
//   trigger: ".more",
//   start: "-5%",
// });


//Pass in name to form
// const queryString = window.location.search;

// const urlParams = new URLSearchParams(queryString);

// const fname = urlParams.get('fname')

// const lname = urlParams.get('lname')

// const email = urlParams.get('email')

// const firstNameTag = document.querySelectorAll(".fname")
// const lastNameTag = document.querySelectorAll(".lname")
// const titleName = document.querySelectorAll(".title-name")

//   firstNameTag.forEach((firstNameInput) => {
//     firstNameInput.value = fname
//   });

//   lastNameTag.forEach((lastNameInput) => {
//     lastNameInput.value = lname
//   });


//   if (fname) {
//     titleName.forEach((name) => {
//       name.innerHTML = fname
//     });
//   } else {
//     titleName.forEach((name) => {
//       name.innerHTML = "there"
//     });
//   }



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














