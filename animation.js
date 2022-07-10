gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#scrollable-section", // class to start the scroll
  start: "top 20%", // Scroll start position
  end: "bottom 550px", // Scroll end position
  pin: "#scrollable-section", // pins the section
  markers: {
    startColor: "black",
    endColor: "black",
    fontSize: "18px",
    fontWeight: "bold",
    indent: 20,
  },
});

gsap.from(".section-text", {
  y: 850,
  ease: "none",
  scrollTrigger: {
    trigger: "#scrollable-section",
    start: "-15% 20%",
    end: "bottom 650px",
    scrub: 1,
    markers: {
      startColor: "black",
      endColor: "black",
      fontSize: "18px",
      fontWeight: "bold",
      indent: 20,
    },
  },
});
