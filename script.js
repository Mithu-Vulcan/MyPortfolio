function toggleMenu () {
    document.getElementById("section-nav").classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    let tl = gsap.timeline()

    tl.from(".header-name", {
        y: -200,
        opacity: 0,
        duration: 0.6,
    })


    tl.from('.nav-item', {
        y: -200,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "elasic"
    })

    tl.from("#hero-stagger", {
        y: 200,
        duration: 0.6,
        ease: "power1.inOut",
        opacity: 0,
        stagger: 0.2
    })

    tl.from("#hero-vector", {
        opacity: 0,
        duration: 0.6,
        x: 400
    })

    tl.from(".contact-btn", {
        opacity: 0,
        duration: 0.6,
        
    })

    tl.from(".header img", {
        x: 200,
        duration: 0.6
    })
})