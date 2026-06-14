// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

}

// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");
        return;
    }

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");

    contactForm.reset();

});

}

// SCROLL REVEAL ANIMATION

const revealElements =
document.querySelectorAll(
".feature-card, .service-card, .team-card, .mv-card, .stat-card"
);

function revealOnScroll() {

revealElements.forEach((element) => {

    const elementTop =
        element.getBoundingClientRect().top;

    const windowHeight =
        window.innerHeight;

    if (elementTop < windowHeight - 100) {

        element.classList.add("show");

    }

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ACTIVE NAVIGATION LINK

const currentPage =
window.location.pathname.split("/").pop();

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

const href =
    link.getAttribute("href");

if (href === currentPage) {

    link.classList.add("active");

}

});
