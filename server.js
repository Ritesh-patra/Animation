//somoth scrolling 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap animation
gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 2,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#heading h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1.3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from (".anim2" , {
    stagger : .2,
    y: 30,
    opacity: 0 ,
    ease : Expo,
    duration : 1
  })

  gsap.from ("#imgntext", {
    y:"70",
    opacity: 0,
    duration: 2,
    ease : Expo,
  })

  Shery.imageEffect("#imgntext img", {
    style:3,
   config:{"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":6.61,"range":[0,100]},"uFrequencyZ":{"value":20.66,"range":[0,100]},"geoVertex":{"range":[1,64],"value":11.93},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500050731278188},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })

  Shery.imageEffect(".imgff img", {
    style:5,
    config: {"a":{"value":2.23,"range":[0,30]},"b":{"value":-0.65,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666804573053},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":18.7},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":4.96,"range":[0,100]},"uFrequencyZ":{"value":45.45,"range":[0,100]}}
  })

  Shery.imageEffect("#bimg", {
    style: 5,
    config: {"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.403109573842284},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.74,"range":[1,15]},"durationOut":{"value":0.5,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.74,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.42,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.45,"range":[0,2]},"noise_scale":{"value":10.74,"range":[0,100]}},
    gooey: true,
  })

  document.querySelector('#ftext button')
  .addEventListener("mouseover" , function() {
    gsap.to("#future video" , {
        opacity:1,
        duration: 1,
        ease : Power4
    })

  })

  document.querySelector('#ftext button')
  .addEventListener("mouseleave" , function() {
    gsap.to("#future video" , {
        opacity:0,
        duration: .5,
        ease : Power4
    })


  })