/**
 * VITTESA — Header & Mobile Drawer Navigation
 */
import { updateTrayBadge } from './tray.js';

export function initHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  updateTrayBadge();
}

export function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.btn-close-mobile-nav');
  const links = document.querySelectorAll('.mobile-nav-links a');
  const footerLinks = document.querySelectorAll('.mobile-nav-footer a, .mobile-nav-footer button');

  const openMobile = () => {
    overlay?.classList.add('open');
    toggleBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobile = () => {
    overlay?.classList.remove('open');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn?.addEventListener('click', openMobile);
  closeBtn?.addEventListener('click', closeMobile);
  backdrop?.addEventListener('click', closeMobile);
  links.forEach(l => l.addEventListener('click', closeMobile));
  footerLinks.forEach(b => b.addEventListener('click', closeMobile));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay?.classList.contains('open')) {
      closeMobile();
    }
  });
}
