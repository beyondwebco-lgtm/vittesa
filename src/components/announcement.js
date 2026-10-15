/**
 * VITTESA — Top Announcement Bar Slider
 * Rotates brand & promotional messages with understated luxury transitions,
 * pausing on hover/focus and respecting reduced motion preferences.
 */
let announcementTimer = null;

export function initAnnouncementSlider() {
  const slider = document.getElementById('announcement-slider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.announcement-slide'));
  if (slides.length <= 1) return;

  let currentIndex = slides.findIndex(s => s.classList.contains('active'));
  if (currentIndex === -1) {
    currentIndex = 0;
    slides[0].classList.add('active');
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ROTATE_INTERVAL = 3500; // 3.5 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startRotation() {
    stopRotation();
    if (!prefersReducedMotion) {
      announcementTimer = setInterval(nextSlide, ROTATE_INTERVAL);
    }
  }

  function stopRotation() {
    if (announcementTimer) {
      clearInterval(announcementTimer);
      announcementTimer = null;
    }
  }

  // Accessibility & interaction: pause rotation when hovered or focused
  slider.addEventListener('mouseenter', stopRotation);
  slider.addEventListener('mouseleave', startRotation);
  slider.addEventListener('focusin', stopRotation);
  slider.addEventListener('focusout', startRotation);

  // Initialize aria-hidden state on all slides
  slides.forEach((s, idx) => {
    s.setAttribute('aria-hidden', idx === currentIndex ? 'false' : 'true');
  });

  // Start auto-rotation
  startRotation();
}
