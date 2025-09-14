
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll("section")

// Theme toggle
themeToggle.addEventListener("click", () => {
    if (document.body.getAttribute("data-theme") === "dark") {
        document.body.removeAttribute("data-theme");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
        document.body.setAttribute("data-theme", "dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
})

// Navigation toggle
navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("show");
})

// Close nav menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("show");
    });
});

// highlight current section on scroll
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    })
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active"); 
        }
    })
});


const texts = ["AI Integrated", "Full Stack Developer", "Creative Coder."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting 
    ? 60 + Math.random() * 20 
    : 100 + Math.random() * 30; 


  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 1500; // 
    charIndex = currentText.length - 1; 
  } 
  else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();


    // Contact form handling
    const contactForm = document.querySelector(".contact-form");
    const submitButton = document.querySelector(".submit-button");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        submitButton.disabled = true;

        emailjs.sendForm("service_bm0qn6q", "template_ik3wr02", contactForm)
            .then(function () {
                alert("Email Sent!!");
                contactForm.reset();
                setTimeout(() => {
                    submitButton.disabled = false;
                }, 3000);
            }, function (error) {
                alert("Failed to send. Please try again later!");
                console.error(error);
                submitButton.disabled = false;
            });
    });
