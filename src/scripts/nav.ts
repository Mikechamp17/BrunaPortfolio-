const nav = document.querySelector<HTMLElement>('nav');
const overlay = document.getElementById('nav-overlay');
const toggle = document.getElementById('nav-toggle');
const closeBtn = document.getElementById('nav-close');

// Opacity fade only on desktop (nav is always visible on mobile via CSS)
if (nav && window.matchMedia('(min-width: 768px)').matches) {
  const updateOpacity = () => {
    const progress = Math.min(window.scrollY / (window.innerHeight * 0.6), 1);
    nav.style.opacity = String(Math.max(progress, 0));
  };
  window.addEventListener('scroll', updateOpacity, { passive: true });
  updateOpacity();
}

// Mobile menu
const openMenu = () => {
  overlay?.classList.add('is-open');
  overlay?.setAttribute('aria-hidden', 'false');
  toggle?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  overlay?.classList.remove('is-open');
  overlay?.setAttribute('aria-hidden', 'true');
  toggle?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

toggle?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);

// Close on overlay link click
overlay?.querySelectorAll('[data-nav-close]').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
