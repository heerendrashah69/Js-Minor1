var tl = gsap.timeline()
tl.from("#nav h1, #nav h4, #nav button",{
    opacity:0,
    y: -20,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.1
})
.from("#page1-cont h1, #page1-cont p, #page1-cont button",{
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger: 0.4
})
gsap.from("#up h1, #up i",{
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger:{
        trigger: "#up h1",
        scroller: "body",
        marker: true,
        start: "top 70%"
    }
})
gsap.from("#page2-cont",{
    opacity: 0,
    x: 300,
    duration: 1,
    scrollTrigger:{
        trigger: "#page2-cont",
        scroller: "body",
        marker: true,
        start: "top 70%"
    }
})
