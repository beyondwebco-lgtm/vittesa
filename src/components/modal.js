/**
 * VITTESA — Product Quick-View Modal
 */
import { PRODUCTS } from '../data/catalogue-data.js';
import { state } from './state.js';
import { addToTray } from './tray.js';

export function initModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
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
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.currentModalProduct = product;
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  const img = document.getElementById('modal-img');
  const code = document.getElementById('modal-code');
  const title = document.getElementById('modal-title');
  const col = document.getElementById('modal-collection');
  const specsTable = document.getElementById('modal-specs-table');

  if (img) img.src = product.image;
  if (code) code.textContent = product.code;
  if (title) title.textContent = product.name;
  if (col) col.textContent = `${product.collection} COLLECTION`;

  if (specsTable) {
    const specs = [
      { label: "Reference Code", val: product.code },
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
