/**
 * VITTESA — Product Card Image Carousel & Slideshow Engine
 * Supports desktop arrow navigation, mobile touch swipes, and pagination dots.
 */
import { PRODUCTS } from '../data/catalogue-data.js';

/**
 * Generates the inner HTML for .product-item-media.
 * If product has multiple images, creates a full slideshow structure.
 * If single image, returns standard static image.
 */
export function renderProductMedia(product) {
  const images = (product.images && product.images.length > 0) 
    ? product.images 
    : [product.image || '/assets/catalogue/olivera-editorial-hero.jpg'];

  if (images.length <= 1) {
    return `<img src="${images[0]}" alt="${product.name}" loading="lazy" />`;
  }

  const slidesHtml = images.map((imgSrc, idx) => `
    <img 
      src="${imgSrc}" 
      alt="${product.name} (View ${idx + 1})" 
      class="carousel-slide ${idx === 0 ? 'active' : ''}" 
      loading="${idx === 0 ? 'eager' : 'lazy'}" 
    />
  `).join('');

  const dotsHtml = images.map((_, idx) => `
    <button 
      class="carousel-dot ${idx === 0 ? 'active' : ''}" 
      type="button" 
      data-index="${idx}" 
      aria-label="View ${idx + 1}"
    ></button>
  `).join('');

  return `
    <div class="carousel-track">
      ${slidesHtml}
    </div>
    <span class="carousel-counter">1 / ${images.length}</span>
    <button class="carousel-nav-btn prev" type="button" aria-label="Previous image">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="carousel-nav-btn next" type="button" aria-label="Next image">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    <div class="carousel-dots-container">
      ${dotsHtml}
    </div>
  `;
}

/**
 * Initializes interactive slideshow behaviour on all .product-item-media.has-carousel
 * inside the given container.
 */
export function attachCarouselHandlers(container = document) {
  const mediaElements = container.querySelectorAll('.product-item-media.has-carousel');

  mediaElements.forEach(mediaEl => {
    if (mediaEl.dataset.carouselInitialized === 'true') return;
    mediaEl.dataset.carouselInitialized = 'true';

    const slides = mediaEl.querySelectorAll('.carousel-slide');
    const dots = mediaEl.querySelectorAll('.carousel-dot');
    const counter = mediaEl.querySelector('.carousel-counter');
    const prevBtn = mediaEl.querySelector('.carousel-nav-btn.prev');
    const nextBtn = mediaEl.querySelector('.carousel-nav-btn.next');

    if (slides.length <= 1) return;

    let currentIndex = 0;
    const total = slides.length;

    const updateSlide = (newIndex) => {
      currentIndex = (newIndex + total) % total;

      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      if (counter) {
        counter.textContent = `${currentIndex + 1} / ${total}`;
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        updateSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        updateSlide(currentIndex + 1);
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const targetIdx = parseInt(dot.dataset.index, 10);
        if (!isNaN(targetIdx)) {
          updateSlide(targetIdx);
        }
      });
    });

    // Touch swipe gestures
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    mediaEl.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    mediaEl.addEventListener('touchmove', (e) => {
      if (!isSwiping || e.touches.length !== 1) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = currentX - startX;
      const diffY = currentY - startY;

      // When gesture is horizontal, prevent browser back/forward gestures
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 12) {
        if (e.cancelable) e.preventDefault();
      }
    }, { passive: false });

    mediaEl.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;

      if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
        mediaEl.setAttribute('data-swiped', 'true');
        setTimeout(() => mediaEl.removeAttribute('data-swiped'), 250);

        if (diffX < 0) {
          updateSlide(currentIndex + 1);
        } else {
          updateSlide(currentIndex - 1);
        }
      }
    }, { passive: true });
  });
}

/**
 * Scans all .product-item-card on page and progressively mounts
 * image carousels for products that have multiple photos.
 */
export function initProductCarousels(root = document) {
  const cards = root.querySelectorAll('.product-item-card');

  cards.forEach(card => {
    const mediaEl = card.querySelector('.product-item-media');
    if (!mediaEl) return;

    // Detect product ID
    let prodId = card.dataset.productId || mediaEl.dataset.productId;
    if (!prodId) {
      const onclickAttr = mediaEl.getAttribute('onclick') || '';
      const match = onclickAttr.match(/vittesaOpenModal\(['"]([^'"]+)['"]\)/) || onclickAttr.match(/product\.html\?id=([^'"]+)/);
      if (match) {
        prodId = match[1];
      }
    }

    if (!prodId) return;

    const product = PRODUCTS.find(p => p.id === prodId || p.code.toLowerCase() === prodId.toLowerCase());
    if (!product || !product.images || product.images.length <= 1) return;

    mediaEl.classList.add('has-carousel');
    if (!mediaEl.querySelector('.carousel-track')) {
      mediaEl.innerHTML = renderProductMedia(product);
    }
  });

  attachCarouselHandlers(root);
}
