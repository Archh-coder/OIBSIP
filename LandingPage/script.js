const toogleBtn = document.querySelector(".navtoggle");
const navLinks = document.querySelector(".nav-links");

toogleBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("show");
});

window.addEventListener("scroll",()=>{
    document.querySelector("header")
    .classList.toggle("scrolled", window.scrollY>50);
})

// Fade in on scroll
const faders = document.querySelectorAll(".fade-up");
const appearOnScroll = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
});
faders.forEach(fader => appearOnScroll.observe(fader));

