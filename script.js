// Scroll animation
const sections = document.querySelectorAll('.fade');

const reveal = () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Dark / Light Mode
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
