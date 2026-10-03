import { BRAND_INFO, COLLECTIONS, PRODUCTS, HOSPITALITY_APPLICATIONS, PRIVATE_LABEL_PILLARS } from './data/catalogue-data.js';

// Application State
const state = {
  activeLumeraColor: 'azure',
  activeCollectionFilter: 'all',
  activeCategoryFilter: 'all',
  searchQuery: '',
  specTray: JSON.parse(localStorage.getItem('vittesa_spec_tray') || '[]'),
  currentModalProduct: null
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initLumeraColorSwitcher();
  initEssentialWhiteTabs();
  initShowroom();
  initModal();
  initTray();
  initEnquiryForm();
  initMobileNav();
  renderDynamicSections();
});

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Update tray badge
  updateTrayBadge();
}

function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.btn-close-mobile-nav');
  const links = document.querySelectorAll('.mobile-nav-links a');

  toggleBtn?.addEventListener('click', () => {
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeMobile = () => {
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeMobile);
  links.forEach(l => l.addEventListener('click', closeMobile));
}

/* ==========================================================================
   LUMÉRA COLOR EXPLORATION
   ========================================================================== */
function initLumeraColorSwitcher() {
  const section = document.getElementById('lumera-section');
  const swatchBtns = document.querySelectorAll('.swatch-btn');
  const metaDesc = document.querySelector('.color-active-meta');

  const lumeraData = COLLECTIONS.find(c => c.id === 'lumera');
  if (!lumeraData) return;

  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const colorId = btn.dataset.color;
      state.activeLumeraColor = colorId;

      swatchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Section Tone Theme
      section.classList.remove('tone-azure', 'tone-olive', 'tone-sienna');
      section.classList.add(`tone-${colorId}`);

      const matchedColor = lumeraData.colorDirections.find(c => c.id === colorId);
      if (matchedColor && metaDesc) {
        metaDesc.innerHTML = `<strong>${matchedColor.name}</strong> — ${matchedColor.descriptor} <em>${matchedColor.description}</em>`;
      }
    });
  });
}

/* ==========================================================================
   ESSENTIAL WHITE TABS
   ========================================================================== */
function initEssentialWhiteTabs() {
  const tabBtns = document.querySelectorAll('.white-tab-btn');
  const tabPanes = document.querySelectorAll('.white-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(`white-tab-${targetCategory}`);
      activePane?.classList.add('active');
    });
  });
}

/* ==========================================================================
   SHOWROOM FILTERING & SEARCH
   ========================================================================== */
function initShowroom() {
  const collectionChips = document.querySelectorAll('.filter-chip[data-collection]');
  const categoryChips = document.querySelectorAll('.filter-chip[data-category]');
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

function renderShowroomGrid() {
  const grid = document.getElementById('showroom-grid');
  const countEl = document.getElementById('results-count');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCollection = state.activeCollectionFilter === 'all' || 
      (state.activeCollectionFilter === 'curated-tones' 
        ? ['urbane-grey', 'paradise-pink', 'aqua-blue'].includes(p.collectionId)
        : p.collectionId === state.activeCollectionFilter);

    const matchCategory = state.activeCategoryFilter === 'all' || p.category === state.activeCategoryFilter;

    const matchSearch = !state.searchQuery || 
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.code.toLowerCase().includes(state.searchQuery) ||
      p.collection.toLowerCase().includes(state.searchQuery) ||
      (p.dimensions && p.dimensions.toLowerCase().includes(state.searchQuery));

    return matchCollection && matchCategory && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} curated references`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--ink-secondary);">
        <p style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">No exact reference found.</p>
        <p style="font-size: 0.875rem;">Try adjusting your collection or category filter, or contact our team for bespoke project sourcing.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const inTray = state.specTray.some(item => item.id === prod.id);
    const colorDots = prod.colorHexes 
      ? prod.colorHexes.map(hex => `<span class="card-color-dot" style="background-color: ${hex}"></span>`).join('')
      : '';

    return `
      <div class="showroom-card" data-id="${prod.id}">
        <div>
          <div class="showroom-card-top">
            <span class="card-collection-badge">${prod.collection}</span>
            <span class="card-code">${prod.code}</span>
          </div>

          <div class="showroom-card-img" onclick="window.vittesaOpenModal('${prod.id}')">
            <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
          </div>

          <div class="showroom-card-info" onclick="window.vittesaOpenModal('${prod.id}')">
            <h4>${prod.name}</h4>
            <div class="showroom-card-dims">${prod.dimensions || 'Specifications on request'}</div>
            ${colorDots ? `<div class="card-colors-row">${colorDots}</div>` : ''}
          </div>
        </div>

        <div class="card-footer">
          <button class="btn-card-spec" onclick="window.vittesaOpenModal('${prod.id}')">
            Details <span>→</span>
          </button>
          <button class="btn-card-add" onclick="window.vittesaToggleTray('${prod.id}')">
            ${inTray ? 'In Tray ✓' : '+ Add Spec'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   PRODUCT DETAIL MODAL
   ========================================================================== */
function initModal() {
  const backdrop = document.getElementById('product-modal');
  const closeBtn = document.querySelector('.btn-close-modal');

  const closeModal = () => {
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.vittesaOpenModal = (productId) => {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    state.currentModalProduct = prod;

    const modalImg = document.getElementById('modal-img');
    const modalCode = document.getElementById('modal-code');
    const modalTitle = document.getElementById('modal-title');
    const modalCollection = document.getElementById('modal-collection');
    const modalSpecsTable = document.getElementById('modal-specs-table');
    const modalAddBtn = document.getElementById('modal-add-btn');

    if (modalImg) modalImg.src = prod.image;
    if (modalCode) modalCode.textContent = prod.code;
    if (modalTitle) modalTitle.textContent = prod.name;
    if (modalCollection) modalCollection.textContent = `${prod.collection} • ${prod.categoryLabel}`;

    // Build specs table
    let tableHtml = `
      <tr>
        <th>Reference Code</th>
        <td>${prod.code}</td>
      </tr>
      <tr>
        <th>Collection</th>
        <td>${prod.collection}</td>
      </tr>
      <tr>
        <th>Product Type</th>
        <td>${prod.categoryLabel}</td>
      </tr>
      <tr>
        <th>Dimensions / Spec</th>
        <td>${prod.dimensions || 'Specifications available on request'}</td>
      </tr>
    `;

    if (prod.colors && prod.colors.length) {
      tableHtml += `
        <tr>
          <th>Available Directions</th>
          <td>${prod.colors.join(' • ')}</td>
        </tr>
      `;
    }

    if (prod.specs) {
      for (const [key, val] of Object.entries(prod.specs)) {
        if (!['diameter', 'height', 'capacity', 'size', 'length', 'width'].includes(key)) {
          tableHtml += `
            <tr>
              <th>${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</th>
              <td>${val}</td>
            </tr>
          `;
        }
      }
    }

    if (modalSpecsTable) modalSpecsTable.innerHTML = tableHtml;

    const inTray = state.specTray.some(item => item.id === prod.id);
    if (modalAddBtn) {
      modalAddBtn.textContent = inTray ? 'Remove from Specification Tray' : 'Add to Specification Tray';
    }

    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
}

/* ==========================================================================
   SPECIFICATION TRAY (B2B PROGRAM BUILDER)
   ========================================================================== */
function initTray() {
  const trayDrawer = document.getElementById('spec-tray');
  const openBtns = document.querySelectorAll('.open-tray-btn');
  const closeBtn = document.querySelector('.btn-close-tray');

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      trayDrawer?.classList.add('open');
    });
  });

  closeBtn?.addEventListener('click', () => {
    trayDrawer?.classList.remove('open');
  });

  window.vittesaToggleTray = (productId) => {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const index = state.specTray.findIndex(item => item.id === prod.id);
    if (index > -1) {
      state.specTray.splice(index, 1);
    } else {
      state.specTray.push(prod);
    }

    localStorage.setItem('vittesa_spec_tray', JSON.stringify(state.specTray));
    updateTrayBadge();
    renderTrayItems();
    renderShowroomGrid();

    // Update modal button if currently open
    const modalAddBtn = document.getElementById('modal-add-btn');
    if (modalAddBtn && state.currentModalProduct && state.currentModalProduct.id === prod.id) {
      const inTray = state.specTray.some(item => item.id === prod.id);
      modalAddBtn.textContent = inTray ? 'Remove from Specification Tray' : 'Add to Specification Tray';
    }
  };

  const modalAddBtn = document.getElementById('modal-add-btn');
  modalAddBtn?.addEventListener('click', () => {
    if (state.currentModalProduct) {
      window.vittesaToggleTray(state.currentModalProduct.id);
    }
  });

  const modalEnquireBtn = document.getElementById('modal-enquire-btn');
  modalEnquireBtn?.addEventListener('click', () => {
    // Close modal and scroll to enquiry form, prefilling with product code
    const backdrop = document.getElementById('product-modal');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';

    const notesField = document.getElementById('enquiry-notes');
    if (notesField && state.currentModalProduct) {
      notesField.value = `Enquiring for technical specifications and trade sample of: ${state.currentModalProduct.collection} ${state.currentModalProduct.code} (${state.currentModalProduct.name}).\n`;
    }

    const contactSec = document.getElementById('contact');
    contactSec?.scrollIntoView({ behavior: 'smooth' });
  });

  // Tray Enquire Button
  const trayProceedBtn = document.getElementById('tray-proceed-btn');
  trayProceedBtn?.addEventListener('click', () => {
    trayDrawer?.classList.remove('open');
    const notesField = document.getElementById('enquiry-notes');
    if (notesField && state.specTray.length > 0) {
      const codesList = state.specTray.map(p => `• [${p.code}] ${p.collection} ${p.name} (${p.dimensions})`).join('\n');
      notesField.value = `Please provide a commercial trade quotation and project sample kit for the following specified tableware references:\n\n${codesList}\n\nEstimated Table Setting Count: `;
    }

    const contactSec = document.getElementById('contact');
    contactSec?.scrollIntoView({ behavior: 'smooth' });
  });

  renderTrayItems();
}

function updateTrayBadge() {
  const badges = document.querySelectorAll('.tray-badge');
  badges.forEach(b => {
    b.textContent = state.specTray.length;
    b.style.display = state.specTray.length > 0 ? 'inline-block' : 'none';
  });
}

function renderTrayItems() {
  const container = document.getElementById('tray-items');
  const emptyState = document.getElementById('tray-empty');
  const proceedBtn = document.getElementById('tray-proceed-btn');
  if (!container) return;

  if (state.specTray.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (proceedBtn) proceedBtn.disabled = true;
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (proceedBtn) proceedBtn.disabled = false;

  container.innerHTML = state.specTray.map(item => `
    <div class="tray-item-card">
      <img src="${item.image}" alt="${item.name}" class="tray-item-img" />
      <div class="tray-item-info">
        <div class="tray-item-code">${item.code}</div>
        <div class="tray-item-title">${item.name}</div>
        <div class="tray-item-dim">${item.dimensions}</div>
      </div>
      <button class="btn-remove-tray-item" onclick="window.vittesaToggleTray('${item.id}')" title="Remove">✕</button>
    </div>
  `).join('');
}

/* ==========================================================================
   DYNAMIC SECTIONS (HOSPITALITY APPLICATIONS & PRIVATE LABEL)
   ========================================================================== */
function renderDynamicSections() {
  // Hospitality Applications Grid
  const appsGrid = document.getElementById('apps-grid');
  if (appsGrid) {
    appsGrid.innerHTML = HOSPITALITY_APPLICATIONS.map(app => `
      <div class="app-card">
        <h4>${app.title}</h4>
        <p>${app.subtitle}</p>
        <span class="app-curation-tag">${app.curation}</span>
      </div>
    `).join('');
  }

  // Private Label Grid
  const plGrid = document.getElementById('private-label-grid');
  if (plGrid) {
    plGrid.innerHTML = PRIVATE_LABEL_PILLARS.map(pl => `
      <div class="pl-card">
        <div class="pl-num">${pl.number}</div>
        <h4>${pl.title}</h4>
        <p>${pl.description}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   ENQUIRY FORM
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById('b2b-enquiry-form');
  const formStatus = document.getElementById('form-status');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Generate reference number
    const refNumber = 'VIT-' + Math.floor(100000 + Math.random() * 900000);

    if (formStatus) {
      formStatus.innerHTML = `
        <div style="background-color: #E8EFE6; border: 1px solid #758D6E; padding: 1.5rem; color: #2B3D26; margin-top: 1.5rem;">
          <h4 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;">Trade Specification Request Received</h4>
          <p style="font-size: 0.875rem; margin-bottom: 0.75rem;">
            Thank you, <strong>${data.name || 'Valued Partner'}</strong> (${data.company || 'Hospitality Group'}). Your reference number is <strong>${refNumber}</strong>.
          </p>
          <p style="font-size: 0.8125rem; color: #3E5437;">
            Our international hospitality specification desk will review your tableware program requirements and issue official product datasheets and sample availability within 1 business day.
          </p>
        </div>
      `;
      form.reset();
    }
  });
}
