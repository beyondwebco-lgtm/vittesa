/**
 * VITTESA — Product Quick-View Modal
 */
import { PRODUCTS } from '../data/catalogue-data.js';
import { state } from './state.js';
import { addToTray } from './tray.js';
import { attachCarouselHandlers } from './carousel.js';

export function initModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn') || modal?.querySelector('.btn-close-modal');
  const addBtn = document.getElementById('modal-add-btn');
  const enquireBtn = document.getElementById('modal-enquire-btn');

  const closeModal = () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.currentModalProduct = null;
  };

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });

  addBtn?.addEventListener('click', () => {
    if (state.currentModalProduct) {
      addToTray(state.currentModalProduct.id);
      addBtn.textContent = '✓ Added to Tray';
      setTimeout(() => {
        addBtn.textContent = 'Add to Specification Tray';
      }, 1800);
    }
  });

  enquireBtn?.addEventListener('click', () => {
    if (state.currentModalProduct) {
      const p = state.currentModalProduct;
      closeModal();
      window.location.href = `/#contact?item=${encodeURIComponent(p.code + ' ' + p.name)}`;
    }
  });
}

export function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId || p.code.toLowerCase() === productId.toLowerCase());
  if (!product) return;

  state.currentModalProduct = product;
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  const photoCol = modal.querySelector('.modal-photo-col');
  const code = document.getElementById('modal-code');
  const title = document.getElementById('modal-title');
  const col = document.getElementById('modal-collection');
  const specsTable = document.getElementById('modal-specs-table');

  const images = (product.images && product.images.length > 0) ? product.images : [product.image];

  if (photoCol) {
    if (images.length > 1) {
      photoCol.classList.add('has-carousel');
      photoCol.innerHTML = `
        <div class="carousel-track">
          ${images.map((src, idx) => `
            <img 
              src="${src}" 
              alt="${product.name} - View ${idx + 1}" 
              class="carousel-slide ${idx === 0 ? 'active' : ''}" 
            />
          `).join('')}
        </div>
        <span class="carousel-counter">1 / ${images.length}</span>
        <button class="carousel-nav-btn prev" type="button" aria-label="Previous view">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="carousel-nav-btn next" type="button" aria-label="Next view">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div class="carousel-dots-container">
          ${images.map((_, idx) => `
            <button class="carousel-dot ${idx === 0 ? 'active' : ''}" type="button" data-index="${idx}" aria-label="View ${idx + 1}"></button>
          `).join('')}
        </div>
      `;
      photoCol.removeAttribute('data-carousel-initialized');
      attachCarouselHandlers(photoCol);
    } else {
      photoCol.classList.remove('has-carousel');
      photoCol.innerHTML = `<img id="modal-img" src="${images[0]}" alt="${product.name}" />`;
    }
  }

  if (code) {
    code.textContent = '';
    code.style.display = 'none';
  }
  if (title) title.textContent = product.name;
  if (col) col.textContent = `${product.collection} COLLECTION`;

  if (specsTable) {
    const specs = [
      { label: "Collection", val: product.collection },
      { label: "Category", val: product.categoryLabel },
      { label: "Dimensions", val: product.dimensions || (product.specs && (product.specs.diameter || product.specs.dimensions)) || "Standard" },
      { label: "Capacity / Spec", val: (product.specs && product.specs.capacity) || "N/A" },
      { label: "Surface Finish", val: (product.specs && product.specs.finish) || "High-Density European Vitrified" },
      { label: "Commercial Suitability", val: "Heavy Hospitality & Industrial Dishwasher Safe" }
    ];

    specsTable.innerHTML = specs.map(s => `
      <tr>
        <th>${s.label}</th>
        <td>${s.val}</td>
      </tr>
    `).join('');
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
