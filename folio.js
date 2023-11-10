var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.first',
    triggerHook:0.5,
})
.setClassToggle('.first', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".first", { opacity: 1, duration: 1 , ease: Power2.easeIn });

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.services-container',
    triggerHook:0.5,
})
.setClassToggle('.services-container', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".first", { opacity: 1, duration: 1 , ease: Power2.easeIn });

// Add the animation to the ScrollMagic scene
scene.setTween(tl);


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.second',
    triggerHook:0.5,
})
.setClassToggle('.second', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".second", { opacity: 1, duration: 1, ease: Power2.easeIn});

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.image',
    triggerHook:0.5,
})
.setClassToggle('.image', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".image", { opacity: 1, duration: 1, ease: Power2.easeIn});

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.link',
    triggerHook:0.5,
})
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.about-image',
    triggerHook:0.5,
})
.setClassToggle('.about-image', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".about-image", { opacity: 1, duration: 1, ease: Power2.easeIn});

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.fourth',
    triggerHook:0.5,
})
.setClassToggle('.fourth', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".fourth", { opacity: 1, duration: 1, ease: Power2.easeIn});

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.fifth',
    triggerHook:0.5,
})
.setClassToggle('.fifth', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".fifth", { opacity: 1, duration: 1, ease: Power2.easeIn });

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.sixth',
    triggerHook:0.5,
})
.setClassToggle('.sixth', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".sixth", { opacity: 1, duration: 1, ease: Power2.easeIn});

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.link2',
    triggerHook:0.5,
})
.setClassToggle('.link2', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".link2", { opacity: 1, duration: 1,ease: Power2.easeIn });

// Add the animation to the ScrollMagic scene
scene.setTween(tl);



var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.seven',
    triggerHook:0.5,
})
.setClassToggle('.seven', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".seven", { opacity: 1, duration: 1, ease: Power2.easeIn });

// Add the animation to the ScrollMagic scene
scene.setTween(tl);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.heading',
    triggerHook:0.5,
})
.setClassToggle('.heading', 'show')
.addTo(controller);
var tl = gsap.timeline();
tl.to(".heading", { opacity: 1, duration: 1, ease: Power2.easeIn });


scene.setTween(tl);

var menu = document.querySelector('.nav, .menu');
var mobile_menu = document.querySelector('.nav, .navlinks ');
var header = document.querySelector('.nav');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});












