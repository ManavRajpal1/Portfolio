// ---------- Navbar Scroll Effect ----------
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ---------- Mobile Menu Toggle ----------
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
}

// ---------- Smooth Scrolling ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (navLinks.classList.contains("active")) navLinks.classList.remove("active");
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    }
  });
});

// ---------- Fade-In Animation on Scroll ----------
const fadeElements = document.querySelectorAll(".fade-in");
function checkFade() {
  fadeElements.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100)
      el.classList.add("active");
  });
}
checkFade();
window.addEventListener("scroll", checkFade);

// ---------- Custom Cursor ----------
const cursor = document.querySelector(".custom-cursor");
if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}

// ---------- Dark/Light Mode ----------
document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.getElementById("dark-mode-toggle");

  if (!darkModeBtn) {
    console.warn("⚠️ Dark mode toggle button not found!");
    return;
  }

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    darkModeBtn.textContent = "🌑 Dark Mode";
  } else {
    darkModeBtn.textContent = "🌙 Light Mode";
  }

  // Toggle between themes
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    darkModeBtn.textContent = isLight ? "🌑 Dark Mode" : "🌙 Light Mode";
  });
});

