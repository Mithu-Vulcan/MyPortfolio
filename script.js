function toggleMenu () {
    document.getElementById("section-nav").classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    let tl = gsap.timeline()

    tl.from("#hero-stagger", {
        y: 200,
        duration: 0.6,
        ease: "power1.inOut",
        opacity: 0,
        stagger: 0.2
    })
})