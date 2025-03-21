// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP animation for smooth fade-in
    gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3
    });

    gsap.from("h1, .tagline", {
        opacity: 0,
        y: -20,
        duration: 1
    });

    // Glitch Effect
    const glitchText = document.getElementById("glitch-text");
    setInterval(() => {
        glitchText.style.animation = "none";
        setTimeout(() => glitchText.style.animation = "glitch 0.8s infinite alternate", 10);
    }, 2000);
});
