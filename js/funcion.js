
/* ---- iconos ---- */
if (window.lucide) lucide.createIcons();
document.addEventListener('DOMContentLoaded', () => { if (window.lucide) lucide.createIcons(); });

/* ---- menu ---- */
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* ---- nav---- */
const navLinks = document.querySelectorAll('.nav-menu-desktop a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) current = s.id; });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });

  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

/* ---- tarjetas---- */
document.querySelectorAll('.card-slider').forEach(slider => {
  const imgs = slider.querySelectorAll('img');
  if (imgs.length < 2) return;
  let idx = 0;
  setInterval(() => {
    imgs[idx].classList.remove('active');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('active');
  }, 2200);
});

/* ---- Scroll ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Hero slider */
const heroImgs = document.querySelectorAll('.hero-slider img');
const dotsContainer = document.getElementById('heroDots');
let heroIdx = 0;

heroImgs.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});

function goToSlide(idx) {
  heroImgs[heroIdx].classList.remove('active');
  dotsContainer.children[heroIdx].classList.remove('active');
  heroIdx = idx;
  heroImgs[heroIdx].classList.add('active');
  dotsContainer.children[heroIdx].classList.add('active');
}

setInterval(() => goToSlide((heroIdx + 1) % heroImgs.length), 3000);
