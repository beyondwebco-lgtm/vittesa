/**
 * VITTESA — Specification Tray Drawer & Export Engine
 */
import { PRODUCTS } from '../data/catalogue-data.js';
import { state } from './state.js';

export function initTray() {
  const drawer = document.getElementById('spec-tray-drawer');
  const openButtons = document.querySelectorAll('.open-tray-btn');
  const closeBtn = document.getElementById('close-tray-btn');
  const proceedBtn = document.getElementById('tray-proceed-btn');

  const openTray = () => {
    drawer?.classList.add('open');
    drawer?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderTrayItems();
  };

  const closeTray = () => {
    drawer?.classList.remove('open');
    drawer?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openButtons.forEach(b => b.addEventListener('click', openTray));
  closeBtn?.addEventListener('click', closeTray);

  drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) closeTray();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      closeTray();
    }
  });

  proceedBtn?.addEventListener('click', () => {
    closeTray();
    const codes = state.specTray.map(t => `${t.code} (${t.name})`).join(', ');
    const noteField = document.getElementById('enq-notes');
    if (noteField) {
      noteField.value = `Specification Schedule Request for: ${codes}`;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  });

  updateTrayBadge();
}

export function addToTray(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const exists = state.specTray.find(p => p.id === productId);
  if (!exists) {
    state.specTray.push({
      id: product.id,
      code: product.code,
      name: product.name,
      collection: product.collection,
      dimensions: product.dimensions,
      image: product.image
    });
    localStorage.setItem('vittesa_spec_tray', JSON.stringify(state.specTray));
    updateTrayBadge();
    renderTrayItems();
  }
}

export function removeFromTray(productId) {
  state.specTray = state.specTray.filter(p => p.id !== productId);
  localStorage.setItem('vittesa_spec_tray', JSON.stringify(state.specTray));
  updateTrayBadge();
  renderTrayItems();
}

export function updateTrayBadge() {
  const badges = document.querySelectorAll('.tray-badge');
  const count = state.specTray.length;
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

export function renderTrayItems() {
  const container = document.getElementById('tray-items');
  const emptyState = document.getElementById('tray-empty');
  const countEl = document.getElementById('tray-count-indicator');
  const proceedBtn = document.getElementById('tray-proceed-btn');

  if (!container || !emptyState) return;

  if (countEl) countEl.textContent = state.specTray.length;

  if (state.specTray.length === 0) {
    emptyState.style.display = 'block';
    container.innerHTML = '';
    if (proceedBtn) proceedBtn.disabled = true;
    return;
  }

  emptyState.style.display = 'none';
  if (proceedBtn) proceedBtn.disabled = false;

  container.innerHTML = state.specTray.map(p => `
    <div class="tray-item-row">
      <img src="${p.image}" alt="${p.name}" class="tray-item-thumb" />
      <div class="tray-item-info">
        <div class="tray-item-code">${p.code}</div>
        <div class="tray-item-title">${p.name}</div>
        <div class="tray-item-collection">${p.collection} • ${p.dimensions || ''}</div>
      </div>
      <button class="tray-item-remove" onclick="window.vittesaRemoveFromTray('${p.id}')" title="Remove piece">✕</button>
    </div>
  `).join('');
}
