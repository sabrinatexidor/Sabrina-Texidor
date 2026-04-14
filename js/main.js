/* ============================================
   SABRINA TEXIDOR — MAIN JS
   ============================================ */


// ── Navigation ──
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navMobile = document.querySelector('.nav__mobile');
const navLinks = document.querySelectorAll('.nav__links a, .nav__mobile a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMobile.classList.toggle('open');
    document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navMobile?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
setActiveNav();

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// ── Contact Form ──
const contactForm = document.getElementById('contactForm');
const formSuccess = document.querySelector('.form-success');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('show');
    }, 1200);
  });
}

// ── Cursor Glow ──
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.opacity = '1';
  });
  document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });
}

// ── Parallax Hero ──
const heroBgImg = document.querySelector('.hero__bg-img');
if (heroBgImg) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBgImg.style.transform = `scale(1.08) translateY(${scrollY * 0.25}px)`;
  }, { passive: true });
}

// ── Animated Stats Counter ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEl = entry.target.querySelector('.stat-number');
      if (numEl) animateCounter(numEl);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-item').forEach(el => statObserver.observe(el));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
  item.addEventListener('click', () => {
    if (lightbox && lightboxImg) {
      lightboxImg.src = item.dataset.src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
function closeLightbox() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

// Filmstrip sprocket holes
['sl','sr'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    for (let i = 0; i < 80; i++) {
      const h = document.createElement('div');
      h.className = 'hole';
      el.appendChild(h);
    }
  }
});
