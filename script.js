const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");
    
    if (navLinks.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

const typingElement = document.getElementById("typing");
const words = [
    "Full Stack Web Developer",
    "Android App Developer",
    "Frontend Developer",
    "HTML5 Developer",
    "CSS Developer",
    "Bootstrap Developer",
    "Tailwind CSS Developer",
    "JavaScript Developer",
    "React.js Developer",
    "Backend Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Content Creator",
    "Video Editor",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, deleting ? 45 : 80);
}
typeEffect();

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const sendOptions = document.getElementById("sendOptions");
const whatsappBtn = document.getElementById("whatsappBtn");
const emailBtn = document.getElementById("emailBtn");

let messageData = {};


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = contactForm.querySelector(
        'input[placeholder="Enter your name"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[placeholder="Enter your email"]'
    ).value.trim();

    const subject = contactForm.querySelector(
        'input[placeholder="Enter subject"]'
    ).value.trim();

    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    messageData = {
        name,
        email,
        subject,
        message
    };

    sendOptions.style.display = "flex";

    formMessage.textContent = "Choose WhatsApp or Email.";

    sendOptions.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});


whatsappBtn.addEventListener("click", function() {

    const phoneNumber = "923403838594";

    const whatsappMessage =
        `Hello Waseem Anwar!\n\n` +
        `Name: ${messageData.name}\n` +
        `Email: ${messageData.email}\n` +
        `Subject: ${messageData.subject}\n\n` +
        `Message:\n${messageData.message}`;

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});


emailBtn.addEventListener("click", function() {

    const emailAddress = "waseemanwarkhoso222@gmail.com";

    const subject = encodeURIComponent(messageData.subject);

    const body = encodeURIComponent(
        `Hello Waseem Anwar!\n\n` +
        `Name: ${messageData.name}\n` +
        `Email: ${messageData.email}\n\n` +
        `Message:\n${messageData.message}`
    );

    const emailURL =
        `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = emailURL;
});


const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.getElementById("year").textContent =
    new Date().getFullYear();

const animatedElements = document.querySelectorAll(`
    .section-heading,
    .about-image,
    .about-content,
    .skill-card,
    .timeline-item,
    .project-card,
    .service,
    .contact-info,
    .contact-form,
    .footer-content
`);

animatedElements.forEach((element, index) => {
    element.classList.add("animate-on-scroll");

    const siblings = Array.from(element.parentElement.children);
    const position = siblings.indexOf(element);

    element.style.transitionDelay = `${(position % 4) * 120}ms`;
});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    }
);

animatedElements.forEach(element => {
    revealObserver.observe(element);
});

const nameElement = document.querySelector(".hero h1 span");

if (nameElement) {
    nameElement.classList.add("name-light-effect");
}

