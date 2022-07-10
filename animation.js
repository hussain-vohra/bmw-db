gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".bws_content", // class to start the scroll
  start: "top 20%", // Scroll start position
  end: "bottom 550px", // Scroll end position
  pin: ".bws_content", // pins the section
  // pinSpacing: false,
  markers: {
    startColor: "black",
    endColor: "black",
    fontSize: "18px",
    fontWeight: "bold",
    indent: 20,
  },
});

// gsap.set(".section-img", { className: "sticky" });

gsap.from(".section-text", {
  y: 750,
  ease: "none",
  scrollTrigger: {
    trigger: "#scrollable-section",
    start: "-20% 20%",
    end: "bottom 550px",
    scrub: 1.5,
    markers: {
      startColor: "black",
      endColor: "black",
      fontSize: "18px",
      fontWeight: "bold",
      indent: 20,
    },
  },
});
