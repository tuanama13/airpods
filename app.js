const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const texth2 = intro.querySelector('h3');

const section = document.querySelector('section');
const end = section.querySelector('h1');


const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 10500,
    triggerElemnt : intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity : 1}, { opacity: 0});
// const textAnim = TweenMax.fromTo(text, 3, { opacity : 1}, { opacity: 0});
const textAnimh2 = TweenMax.fromTo(texth2, 3, { opacity : 1}, { opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElemnt: intro,
    triggerHook : 0
})
.setTween(textAnim)
.addTo(controller);


//Video Animation
let accelamount = 0.21;
let scrollpos = 0;
let delay = 0.05;

scene.on('update', e => {

    scrollpos = e.scrollPos / 1000;
    // console.log(e);    
});

setInterval(()=>{
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);

    video.currentTime = delay;
    
}, 83.3);


