// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Hacker-style typing effect
    let text = "Parth Kalumali";
    let i = 0;
    let speed = 150;
    let element = document.getElementById("hacker-text");

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    element.innerHTML = "";
    typeWriter();

    // Smooth scroll
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skills progress bars
    let skills = document.querySelectorAll(".progress");
    skills.forEach(skill => {
        let width = skill.style.width;
        skill.style.width = "0";
        setTimeout(() => {
            skill.style.transition = "width 1.5s ease-in-out";
            skill.style.width = width;
        }, 500);
    });

    // GSAP animation for fade-in effects
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
});
