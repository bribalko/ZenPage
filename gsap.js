const tl = gsap.timeline();
tl.fromTo('.hero__toptitle',{
        x:-100,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        duration:1
    },
).fromTo('.hero__title',{
        y:50,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:1
    },
    0.5
).fromTo('.hero__text',{
       y:50,
       opacity:0,

    },
    {
        y:0,
        opacity:1,
        duration:1.4
    },
   0.7
).fromTo('.hero-platform__item',{
        y:50,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        duration:1.3,
        stagger:0.7
    },
    1.7

).fromTo('.hero__img',{
        x:-20,
        opacity:0        
    },
    {   x:0,
        opacity:1,
        duration:1
    },
    2.9
).fromTo('.header__logo',{
        y:-20,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        duration:1,
        
    },
    3.7
).fromTo('.header-info__list li',{
        y:-20,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        duration:1,
        stagger:0.5
    },
    3.9
).fromTo('.header__list li',{
        y:-20,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1,
        stagger:0.5,
    },
    4.9
)


function animateFrom(elem, direction) {
    direction = direction || 2;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 2, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  
// preloder animation
  window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
  