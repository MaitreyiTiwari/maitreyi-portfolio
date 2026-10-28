// =====================
// Theme Toggle (Bright / Dark)
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

// Close mobile menu when clicking a link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('active'));
});

// =====================
// Scroll Animation (fade in on scroll)
// =====================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.edu-card, .project-card, .timeline-item, .achievement-card, .skill-category, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// =====================
// CV Download Guard
// =====================
const cvDownload = document.getElementById('cvDownload');
cvDownload.addEventListener('click', (e) => {
    // If assets/cv.pdf doesn't exist yet, this will 404 — that's expected until you add the file.
    console.log('CV download triggered. Make sure assets/cv.pdf exists.');
});

// =====================
// Contact Form (demo only)
// =====================
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a static demo — connect your form backend (Formspree, Netlify Forms, etc.) to receive emails.');
    e.target.reset();
});

// =====================
// Add extra floating doodles dynamically
// =====================
function addDoodle() {
    const doodles = document.getElementById('doodles');
    const d = document.createElement('div');
    d.className = 'doodle';
    d.style.left = Math.random() * 100 + 'vw';
    d.style.top = Math.random() * 100 + 'vh';
    d.style.fontSize = (12 + Math.random() * 24) + 'px';
    d.innerText = Math.random() > 0.5 ? '✨' : '💖';
    d.style.animationDuration = (3 + Math.random() * 5) + 's';
    d.style.animationDelay = Math.random() * 2 + 's';
    doodles.appendChild(d);
    setTimeout(() => d.remove(), 8000);
}
setInterval(addDoodle, 900);