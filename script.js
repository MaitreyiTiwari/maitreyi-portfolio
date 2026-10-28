// =====================
// Theme Toggle
// =====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';

html.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// =====================
// Mobile Menu
// =====================
const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');

mobileMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('active'));
});

// =====================
// Subtle Reveal on Scroll
// =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.edu-card, .project-card, .timeline-item, .achievement-card, .skill-category, .stat-card').forEach(el => {
    observer.observe(el);
});

// =====================
// Contact Form (demo)
// =====================
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! Connect a form backend (Formspree, Netlify Forms, etc.) to receive emails.');
    e.target.reset();
});
