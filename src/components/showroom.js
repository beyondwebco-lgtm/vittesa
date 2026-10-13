/**
 * VITTESA — Showroom Explorer & Filter Engine
 */
import { PRODUCTS } from '../data/catalogue-data.js';
import { state } from './state.js';

export function initShowroom() {
  const showroomGrid = document.getElementById('showroom-grid');
  if (!showroomGrid) return;

  const collectionChips = document.querySelectorAll('[data-collection]');
  const categoryChips = document.querySelectorAll('[data-category]');
  const searchInput = document.getElementById('showroom-search');

  collectionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      collectionChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeCollectionFilter = chip.dataset.collection;
      renderShowroomGrid();
    });
  });

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeCategoryFilter = chip.dataset.category;
      renderShowroomGrid();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    renderShowroomGrid();
  });

  renderShowroomGrid();
}

export function renderShowroomGrid() {
  const showroomGrid = document.getElementById('showroom-grid');
  const countEl = document.getElementById('showroom-results-count');
  if (!showroomGrid) return;

  let filtered = PRODUCTS.filter(p => {
    const matchCol = state.activeCollectionFilter === 'all' || p.collectionId === state.activeCollectionFilter;
    const matchCat = state.activeCategoryFilter === 'all' || p.category === state.activeCategoryFilter;
    const matchSearch = !state.searchQuery || 
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.code.toLowerCase().includes(state.searchQuery) ||
      p.collection.toLowerCase().includes(state.searchQuery);
    return matchCol && matchCat && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} piece${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    showroomGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <p style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--ink-secondary); margin-bottom: 0.5rem;">No matching porcelain pieces found.</p>
        <p style="font-size: 0.8125rem; color: var(--ink-muted);">Try adjusting your filter selection or clear the search field.</p>
      </div>
    `;
    return;
  }

  showroomGrid.innerHTML = filtered.map(p => `
    <div class="product-item-card" data-category="${p.category}">
      <span class="product-item-badge">${p.code}</span>
      <div class="product-item-media" onclick="window.vittesaOpenModal('${p.id}')">
        <img src="${p.image}" alt="${p.name} - ${p.code}" loading="lazy" />
      </div>
      <div class="product-item-body">
        <div>
          <div class="product-item-code">${p.code} • ${p.collection}</div>
          <h3 class="product-item-title">${p.name}</h3>
          <div class="product-item-dimensions">${p.dimensions || ''}</div>
          <p class="product-item-specs-preview">${p.editorialCaption || ''}</p>
        </div>
        <div class="product-item-actions">
          <button class="btn-item-action" onclick="window.vittesaOpenModal('${p.id}')">Quick View</button>
          <button class="btn-item-action primary" onclick="window.vittesaAddToTray('${p.id}')">+ Spec Tray</button>
        </div>
      </div>
    </div>
  `).join('');
}
