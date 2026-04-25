document.documentElement.style.scrollBehavior = 'smooth';

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    mainNav.classList.toggle('hidden');
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
  });
}
