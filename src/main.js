import { BRAND_INFO, COLLECTIONS, PRODUCTS, HOSPITALITY_APPLICATIONS, PRIVATE_LABEL_PILLARS } from './data/catalogue-data.js';

// Global Application State
const state = {
  activeLumeraColor: 'azure',
  activeCollectionFilter: 'all',
  activeCategoryFilter: 'all',
  searchQuery: '',
  specTray: JSON.parse(localStorage.getItem('vittesa_spec_tray') || '[]'),
  currentModalProduct: null
};

// Expose global methods for inline HTML triggers
window.vittesaOpenModal = openProductModal;
window.vittesaAddToTray = addToTray;
window.vittesaRemoveFromTray = removeFromTray;

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initModal();
  initTray();
  initEnquiryForm();
  initLumeraColorSwitcher();
  initCollectionSubpageFilter();
  initShowroom();
  renderDynamicSections();
  parseUrlParams();
});

/* ==========================================================================
   HEADER & MOBILE NAVIGATION
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

  updateTrayBadge();
}

function initMobileNav() {
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

/* ==========================================================================
   LUMÉRA COLOR SWITCHER (SUBPAGE & SECTION)
   ========================================================================== */
function initLumeraColorSwitcher() {
  const buttons = document.querySelectorAll('.swatch-btn');
  const metaBox = document.querySelector('.color-active-meta');
  const heroSection = document.querySelector('.lumera-showcase-section, body.tone-azure');

  const metaData = {
    azure: {
      title: "AZURE",
      descriptor: "Calm. Refined. Timeless.",
      desc: "Deep Mediterranean oceanic blue capturing twilight light on coastal water.",
      toneClass: "tone-azure"
    },
    olive: {
      title: "OLIVE",
      descriptor: "Earthy. Sophisticated. Versatile.",
      desc: "Muted botanical earth tone evocative of ancient Mediterranean groves.",
      toneClass: "tone-olive"
    },
    sienna: {
      title: "SIENNA",
      descriptor: "Warm. Modern. Distinctive.",
      desc: "Sun-baked terracotta mineral warmth designed to frame contemporary culinary creations.",
      toneClass: "tone-sienna"
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.dataset.color;
      if (!color || !metaData[color]) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      state.activeLumeraColor = color;
      const data = metaData[color];

      if (metaBox) {
        metaBox.innerHTML = `<strong>${data.title}</strong> — ${data.descriptor} <em>${data.desc}</em>`;
      }

      // Update background tone theme
      if (heroSection) {
        heroSection.classList.remove('tone-azure', 'tone-olive', 'tone-sienna');
        heroSection.classList.add(data.toneClass);
      }
    });
  });
}

/* ==========================================================================
   COLLECTION SUBPAGE IN-PAGE FILTER
   ========================================================================== */
function initCollectionSubpageFilter() {
  const filterChips = document.querySelectorAll('.products-filter-bar .filter-chip');
  const cards = document.querySelectorAll('#collection-products-grid .product-item-card');

  if (!filterChips.length || !cards.length) return;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   SHOWROOM EXPLORER
   ========================================================================== */
function initShowroom() {
  const showroomGrid = document.getElementById('showroom-grid');
  if (!showroomGrid) return;

  const collectionChips = document.querySelectorAll('[data-collection]');
  const categoryChips = document.querySelectorAll('[data-category]');
  const searchInput = document.getElementById('showroom-search');

  // Collection filter buttons
  collectionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      collectionChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeCollectionFilter = chip.dataset.collection;
      renderShowroomGrid();
    });
  });

  // Category filter buttons
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeCategoryFilter = chip.dataset.category;
      renderShowroomGrid();
    });
  });

  // Search input
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    renderShowroomGrid();
  });

  renderShowroomGrid();
}

function renderShowroomGrid() {
  const showroomGrid = document.getElementById('showroom-grid');
  const counter = document.getElementById('results-count');
  if (!showroomGrid) return;

  const filtered = PRODUCTS.filter(product => {
    // Collection match
    let matchesCollection = false;
    if (state.activeCollectionFilter === 'all') {
      matchesCollection = true;
    } else {
      matchesCollection = (product.collectionId === state.activeCollectionFilter);
    }

    // Category match
    const matchesCategory = (state.activeCategoryFilter === 'all') || (product.category === state.activeCategoryFilter);

    // Search match (code, name, collection, specs)
    let matchesSearch = true;
    if (state.searchQuery) {
      const q = state.searchQuery;
      const codeMatch = product.code?.toLowerCase().includes(q);
      const nameMatch = product.name?.toLowerCase().includes(q);
      const colMatch = product.collection?.toLowerCase().includes(q);
      const dimMatch = product.dimensions?.toLowerCase().includes(q);
      matchesSearch = codeMatch || nameMatch || colMatch || dimMatch;
    }

    return matchesCollection && matchesCategory && matchesSearch;
  });

  if (counter) {
    counter.textContent = `Displaying ${filtered.length} of ${PRODUCTS.length} catalogue references`;
  }

  if (filtered.length === 0) {
    showroomGrid.innerHTML = `
      <div class="showroom-empty" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--ink-muted);">
        <p style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--ink-secondary);">No references match your current filters</p>
        <p style="font-size: 0.875rem;">Try clearing the search or switching collection categories.</p>
        <button class="btn-primary" style="margin-top: 1.5rem;" onclick="resetShowroomFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  showroomGrid.innerHTML = filtered.map(p => `
    <div class="product-item-card" data-category="${p.category}" data-id="${p.id}">
      <span class="product-item-badge">${p.code}</span>
      <div class="product-item-media" onclick="window.vittesaOpenModal('${p.id}')">
        <img src="${p.image}" alt="${p.name} - ${p.code}" loading="lazy" />
      </div>
      <div class="product-item-body">
        <div>
          <div class="product-item-code">${p.code} • ${p.collection}</div>
          <h3 class="product-item-title">${p.name}</h3>
          <div class="product-item-dimensions">${p.dimensions || p.specs?.diameter || p.specs?.size || ''}</div>
          <p class="product-item-specs-preview">${p.editorialCaption || p.specs?.finish || ''}</p>
        </div>
        <div class="product-item-actions">
          <button class="btn-item-action" onclick="window.vittesaOpenModal('${p.id}')">Specifications</button>
          <button class="btn-item-action primary" onclick="window.vittesaAddToTray('${p.id}')">+ Spec Tray</button>
        </div>
      </div>
    </div>
  `).join('');
}

window.resetShowroomFilters = () => {
  state.activeCollectionFilter = 'all';
  state.activeCategoryFilter = 'all';
  state.searchQuery = '';
  document.querySelectorAll('[data-collection]').forEach(c => c.classList.toggle('active', c.dataset.collection === 'all'));
  document.querySelectorAll('[data-category]').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
  const searchInput = document.getElementById('showroom-search');
  if (searchInput) searchInput.value = '';
  renderShowroomGrid();
};

/* ==========================================================================
   PRODUCT DETAIL MODAL
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = modal?.querySelector('.btn-close-modal');
  const addBtn = document.getElementById('modal-add-btn');
  const enquireBtn = document.getElementById('modal-enquire-btn');

  const closeModal = () => {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
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
      addBtn.textContent = '✓ Added to Spec Tray';
      setTimeout(() => {
        addBtn.textContent = 'Add to Specification Tray';
      }, 1500);
    }
  });

  enquireBtn?.addEventListener('click', () => {
    if (!state.currentModalProduct) return;
    const p = state.currentModalProduct;
    closeModal();

    const enquirySection = document.getElementById('contact') || document.getElementById('enquire-section');
    const notesInput = document.getElementById('enquiry-notes');
    const colSelect = document.getElementById('enq-collection');

    if (enquirySection && notesInput) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
      if (colSelect && p.collectionId) {
        colSelect.value = p.collectionId;
      }
      const existingText = notesInput.value.trim();
      const itemText = `[Inquiry for ${p.code} — ${p.name} (${p.collection})]`;
      if (!existingText.includes(p.code)) {
        notesInput.value = existingText ? `${existingText}\n${itemText}` : itemText;
      }
      setTimeout(() => notesInput.focus(), 600);
    } else {
      // On subpage without form or external link
      window.location.href = `/#contact?item=${encodeURIComponent(p.code + ' ' + p.name)}`;
    }
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.currentModalProduct = product;
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  const imgEl = document.getElementById('modal-img');
  const codeEl = document.getElementById('modal-code');
  const titleEl = document.getElementById('modal-title');
  const colEl = document.getElementById('modal-collection');
  const specsTable = document.getElementById('modal-specs-table');

  if (imgEl) imgEl.src = product.image;
  if (codeEl) codeEl.textContent = product.code;
  if (titleEl) titleEl.textContent = product.name;
  if (colEl) colEl.textContent = `${product.collection} • ${product.categoryLabel || 'Porcelain'}`;

  if (specsTable) {
    let rows = `
      <tr><th>Product Code</th><td><strong>${product.code}</strong></td></tr>
      <tr><th>Collection</th><td>${product.collection}</td></tr>
      <tr><th>Dimensions</th><td>${product.dimensions || 'Standard Tableware Specification'}</td></tr>
    `;

    if (product.specs) {
      for (const [key, val] of Object.entries(product.specs)) {
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        rows += `<tr><th>${label}</th><td>${val}</td></tr>`;
      }
    }

    if (product.colors && product.colors.length) {
      rows += `<tr><th>Color Directions</th><td>${product.colors.join(' • ')}</td></tr>`;
    }

    specsTable.innerHTML = rows;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   SPECIFICATION TRAY (PROJECT SCHEDULE)
   ========================================================================== */
function initTray() {
  const tray = document.getElementById('spec-tray');
  const openButtons = document.querySelectorAll('.open-tray-btn');
  const closeBtn = document.querySelector('.btn-close-tray');
  const proceedBtn = document.getElementById('tray-proceed-btn');

  const openTray = () => {
    renderTray();
    tray?.classList.add('open');
  };

  const closeTray = () => {
    tray?.classList.remove('open');
  };

  openButtons.forEach(b => b.addEventListener('click', openTray));
  closeBtn?.addEventListener('click', closeTray);

  proceedBtn?.addEventListener('click', () => {
    closeTray();
    const enquirySection = document.getElementById('contact') || document.getElementById('enquire-section');
    const notesInput = document.getElementById('enquiry-notes');

    if (enquirySection && notesInput && state.specTray.length > 0) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
      const specList = state.specTray.map(it => `${it.code} (${it.name}, ${it.collection})`).join(', ');
      notesInput.value = `Specification Tray Items (${state.specTray.length}):\n${specList}`;
      setTimeout(() => notesInput.focus(), 600);
    } else if (!enquirySection && state.specTray.length > 0) {
      window.location.href = '/#contact';
    }
  });

  renderTray();
}

function addToTray(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const exists = state.specTray.some(it => it.id === productId);
  if (!exists) {
    state.specTray.push({
      id: product.id,
      code: product.code,
      name: product.name,
      collection: product.collection,
      dimensions: product.dimensions || '',
      image: product.image
    });
    localStorage.setItem('vittesa_spec_tray', JSON.stringify(state.specTray));
    updateTrayBadge();
    renderTray();
  }
}

function removeFromTray(productId) {
  state.specTray = state.specTray.filter(it => it.id !== productId);
  localStorage.setItem('vittesa_spec_tray', JSON.stringify(state.specTray));
  updateTrayBadge();
  renderTray();
}

function updateTrayBadge() {
  const badges = document.querySelectorAll('.tray-badge');
  const count = state.specTray.length;
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'inline-block' : 'none';
  });
}

function renderTray() {
  const emptyState = document.getElementById('tray-empty');
  const itemsContainer = document.getElementById('tray-items');
  if (!itemsContainer || !emptyState) return;

  if (state.specTray.length === 0) {
    emptyState.style.display = 'block';
    itemsContainer.innerHTML = '';
  } else {
    emptyState.style.display = 'none';
    itemsContainer.innerHTML = state.specTray.map(item => `
      <div class="tray-item-row" style="display:flex; gap:0.75rem; align-items:center; padding:0.75rem 0; border-bottom:1px solid var(--border-subtle);">
        <img src="${item.image}" alt="${item.name}" style="width:48px; height:48px; object-fit:cover; border-radius:2px; background:var(--bg-porcelain);" />
        <div style="flex:1;">
          <div style="font-size:0.6875rem; font-weight:700; color:var(--tone-sienna);">${item.code}</div>
          <div style="font-size:0.875rem; font-weight:600; color:var(--ink-primary); line-height:1.2;">${item.name}</div>
          <div style="font-size:0.75rem; color:var(--ink-muted);">${item.collection}</div>
        </div>
        <button onclick="window.vittesaRemoveFromTray('${item.id}')" style="background:none; border:none; color:var(--ink-muted); cursor:pointer; font-size:1rem; padding:0.25rem;" title="Remove">✕</button>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   TRADE ENQUIRY FORM HANDLER
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById('b2b-enquiry-form');
  const statusEl = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.textContent = 'Transmitting Specification Request...';

    setTimeout(() => {
      if (btn) btn.textContent = '✓ Request Transmitted to Desk';
      if (statusEl) {
        statusEl.innerHTML = `
          <div style="margin-top: 1rem; padding: 1rem; background: #EAF2EB; border: 1px solid #7FA884; color: #2C5E33; font-size: 0.875rem; border-radius: 2px;">
            Thank you. Your specification request has been registered. Our international hospitality desk will contact you with portfolio pricing and technical datasheets.
          </div>
        `;
      }
      form.reset();
    }, 1000);
  });
}

/* ==========================================================================
   DYNAMIC SECTIONS (HOMEPAGE)
   ========================================================================== */
function renderDynamicSections() {
  // Private label grid
  const plGrid = document.getElementById('private-label-grid');
  if (plGrid) {
    plGrid.innerHTML = PRIVATE_LABEL_PILLARS.map(p => `
      <div class="pl-card">
        <div class="pl-num">${p.number}</div>
        <h4>${p.title}</h4>
        <p>${p.description}</p>
      </div>
    `).join('');
  }

  // Hospitality applications grid
  const appsGrid = document.getElementById('apps-grid');
  if (appsGrid) {
    appsGrid.innerHTML = HOSPITALITY_APPLICATIONS.map(app => `
      <div class="app-card">
        <h4>${app.title}</h4>
        <p class="app-sub">${app.subtitle}</p>
        <div class="app-curation-tag">
          <span>Recommended Layer:</span>
          <strong>${app.curation}</strong>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   URL PARAMETER ROUTING
   ========================================================================== */
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const colParam = params.get('collection');
  if (colParam && document.getElementById('showroom-grid')) {
    state.activeCollectionFilter = colParam;
    document.querySelectorAll('[data-collection]').forEach(c => {
      c.classList.toggle('active', c.dataset.collection === colParam);
    });
    renderShowroomGrid();
  }
}
