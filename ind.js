// ---------- Navbar Scroll Effect ----------
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ---------- Mobile Menu Toggle ----------
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Toggle menu icon
    const icon = this.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// ---------- Smooth Scrolling for Nav Links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ---------- Scroll Animation for Fade-In Elements ----------
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Initial check on page load
checkFade();

// Check on scroll
window.addEventListener('scroll', checkFade);

// ---------- Custom Cursor ----------
const cursor = document.querySelector('.custom-cursor');
const interactiveElements = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

interactiveElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    elem.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hide cursor when it leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

// ---------- Dark/Light Mode Toggle ----------
const darkModeBtn = document.getElementById('dark-mode-toggle');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if(document.body.classList.contains('light-mode')){
        darkModeBtn.textContent = '🌑 Dark Mode';
    } else {
        darkModeBtn.textContent = '🌙 Light Mode';
    }
});

// ---------- Contact Form Email Functionality ----------
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();
    
    if(name && email && message){
        const mailtoLink = `mailto:manavrajpal2025@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message + "\n\nFrom: " + name + "\nEmail: " + email)}`;
        window.location.href = mailtoLink;
        contactForm.reset();
        alert('Email client opened! Please send your message.');
    } else {
        alert('Please fill all fields.');
    }
});
