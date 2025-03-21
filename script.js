document.addEventListener("DOMContentLoaded", function () {
    gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

    const glitchText = document.getElementById("glitch-text");
    gsap.to(glitchText, {
        textShadow: "3px 3px 0px #ff00ff, -3px -3px 0px #00ffff",
        repeat: -1,
        yoyo: true,
        duration: 0.1
    });

    const button = document.querySelector(".animated-button");

    button.addEventListener("mouseenter", function () {
        gsap.to(button, {
            borderColor: "#00ffff",
            color: "#ff0080",
            duration: 0.3
        });
    });

    button.addEventListener("mouseleave", function () {
        gsap.to(button, {
            borderColor: "#ff0080",
            color: "#fff",
            duration: 0.3
        });
    });

});
