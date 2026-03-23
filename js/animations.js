/* Advanced Animations for TECHNITUDE IPL AUCTION 2026 */
/* Uses GSAP and Motion One */

document.addEventListener('DOMContentLoaded', () => {
    // 1. GSAP Hero Entrance Animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

    tl.to("#heroLogoContainer", { opacity: 1, y: 0, delay: 0.5 })
      .to("#heroTitle", { opacity: 1, duration: 1 }, "-=0.8")
      .to("#heroSubtitle", { opacity: 1, duration: 1 }, "-=0.6")
      .to(".registerTrigger", { opacity: 1, stagger: 0.2 }, "-=0.6");

    // 2. ScrollTrigger Animations for Sections
    gsap.registerPlugin(ScrollTrigger);

    // About Section Parallax & Animate
    gsap.to("#parallaxStadium", {
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: 100,
        ease: "none"
    });

    gsap.to(".section-animate-left", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        x: 0,
        duration: 1.2
    });

    gsap.to(".section-animate-right", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2
    });

    // How It Works Steps
    gsap.to(".how-step", {
        scrollTrigger: {
            trigger: "#how-it-works",
            start: "top 70%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3
    });

    // Team Cards Animation
    gsap.from(".team-card", {
        scrollTrigger: {
            trigger: "#teams",
            start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    // Player Cards Grid stagger
    gsap.from(".player-card", {
        scrollTrigger: {
            trigger: "#players",
            start: "top 60%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });


    // 3. Motion One (Framer Motion Engine) Animations
    const { animate, spring } = Motion;

    // Delegate hover sounds or effects if needed, but for now just basic interactions
    const setupInteractions = () => {
        const interactiveItems = document.querySelectorAll('.registerTrigger, .filter-role, .filter-country, .team-card, .player-card');
        interactiveItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                animate(item, { scale: 1.03 }, { easing: spring() });
            });
            item.addEventListener('mouseleave', () => {
                animate(item, { scale: 1 }, { easing: spring() });
            });
        });
    };

    // Call interactions setup
    setupInteractions();

    // Export for main.js to call after re-rendering players
    window.setupInteractions = setupInteractions;

    console.log('Animations Initialized Successfully');
});
