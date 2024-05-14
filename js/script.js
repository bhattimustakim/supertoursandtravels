gsap.from("header", {
  y: -300,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".nav-item", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".offer", {
  y: 100,

  scrollTrigger: {
    trigger: ".offer_main",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 50%",
    scrub: 2,
  },
});
