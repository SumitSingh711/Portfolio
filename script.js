// ── Typed hero subtitle ────────────────────────────────────────────────────────
const phrases = [
  'Applied AI Engineer',
  'Computer Vision Engineer',
  'LLM & RAG Specialist',
  'MLOps Practitioner',
  'Multi-Agent Systems Builder',
];

const typedEl = document.getElementById('typed');
let phraseIdx = 0;
let charIdx   = 0;
let deleting  = false;
let pause     = false;

function type() {
  if (pause) { setTimeout(type, 1800); pause = false; return; }

  const current = phrases[phraseIdx];

  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { pause = true; deleting = true; }
    setTimeout(type, 80);
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting  = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
    setTimeout(type, 45);
  }
}
type();

// ── Hamburger menu ─────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Navbar scroll shadow ───────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 30
    ? '0 2px 20px rgba(0,0,0,0.5)'
    : 'none';
});

// ── Scroll reveal ──────────────────────────────────────────────────────────────
const revealTargets = [
  '.timeline-card',
  '.project-card',
  '.skill-group',
  '.stat-card',
  '.education-card',
  '.contact-card',
  '.about-text p',
  '.section-title',
];

revealTargets.forEach(sel => {
  document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Smooth active nav highlight ────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));
