const nav = document.querySelector<HTMLElement>('nav');
const overlay = document.getElementById('nav-overlay');
const toggle = document.getElementById('nav-toggle');
const closeBtn = document.getElementById('nav-close');

// Nav links and logo — for colour switching
const navLinks = nav?.querySelectorAll<HTMLElement>('a, button');

const heroHeight = () => {
  const hero = document.getElementById('home');
  return hero ? hero.offsetHeight : window.innerHeight;
};

const updateNav = () => {
  if (!nav) return;
  const scrollY = window.scrollY;
  const inHero = scrollY < heroHeight() * 0.85;

  // Opacity: mobile always visible, desktop fades in
  if (window.matchMedia('(min-width: 768px)').matches) {
    const progress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
    nav.style.opacity = String(Math.max(progress, 0));
  }

  // Text colour: white in hero, black once past it
  const color = inHero ? '#ffffff' : '#0A0A0A';
  navLinks?.forEach((el) => {
    (el as HTMLElement).style.color = color;
  });
};

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

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

overlay?.querySelectorAll('[data-nav-close]').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
