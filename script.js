

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        start: "90% 40%",
        end: "90% 90%",
        scrub: true,
        markers: true
    }
});

tl.to(".container",{
        opacity: 1,
        duration: 2,
        x: 400,
        y:300,
        delay:2
    }
)
