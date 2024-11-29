/* ---------------- toggle icon navbar -------------------- */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ---------------- scroll section active link -------------------- */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('heading nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){

            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*-' + id + ']').classList.add('active');
            });
        };
    });
  
    /* ---------------- sticky Navbar -------------------- */
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    /* ---------------- remove toggle icon and Navbar -------------------- */
    
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    
}

/* ---------------- scroll reviel  -------------------- */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-container, heading', {origin:'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', {origin:'button' });
ScrollReveal().reveal('.home-container h1, .about-img', {origin:'left' });
ScrollReveal().reveal('.home-container p, .about-content', {origin:'right' });

/* ---------------- typed JS  -------------------- */

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer'], // Fixed the key from 'string' to 'strings'
    typeSpeed: 70, // Typing speed
    backSpeed: 70, // Fixed typo from 'backspeed' to 'backSpeed'
    backDelay: 1000, // Delay before backspacing
    loop: true // Loops the typing animation
});
