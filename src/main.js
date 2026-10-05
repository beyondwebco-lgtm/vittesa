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
  initCollectionsCarousel();
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
   3D COLLECTIONS ROUND CAROUSEL (EXHIBITION TURNTABLE)
   ========================================================================== */
const CAROUSEL_COLLECTIONS = [
  {
    id: "lumera",
    name: "LUMÉRA",
    layer: "01 SIGNATURE",
    tagline: "Architectural Mediterranean",
    image: "/assets/catalogue/hero-lumera-table.jpg",
    link: "#lumera-section"
  },
  {
    id: "olivera",
    name: "OLIVERA",
    layer: "02 CURATED",
    tagline: "Natural Earth Series",
    image: "/assets/catalogue/olivera-editorial-hero.jpg",
    link: "#olivera"
  },
  {
    id: "roke",
    name: "ROKÉ",
    layer: "02 CURATED",
    tagline: "Sculpted Texture Series",
    image: "/assets/catalogue/roke-editorial-hero.jpg",
    link: "#roke"
  },
  {
    id: "terra-speckle",
    name: "TERRA SPECKLE",
    layer: "02 CURATED",
    tagline: "Artisan Earth Series",
    image: "/assets/catalogue/terra-speckle-editorial-hero.png",
    link: "#terra-speckle"
  },
  {
    id: "essential-white",
    name: "ESSENTIAL WHITE",
    layer: "03 ESSENTIAL",
    tagline: "Core Commercial Porcelain",
    image: "/assets/catalogue/essential-white-platters-hero.jpg",
    link: "#essential-white-section"
  },
  {
    id: "urbane-grey",
    name: "URBANE GREY",
    layer: "02 CURATED",
    tagline: "Contemporary Mineral Slate",
    image: "/assets/catalogue/urbane-grey-editorial.jpg",
    link: "/showroom.html?collection=curated-tones"
  },
  {
    id: "paradise-pink",
    name: "PARADISE PINK",
    layer: "02 CURATED",
    tagline: "Soft Rose Earth",
    image: "/assets/catalogue/paradise-pink-editorial.jpg",
    link: "/showroom.html?collection=curated-tones"
  },
  {
    id: "aqua-blue",
    name: "AQUA BLUE",
    layer: "02 CURATED",
    tagline: "Mediterranean Coastal",
    image: "/assets/catalogue/aqua-blue-editorial.jpg",
    link: "/showroom.html?collection=curated-tones"
  }
];

function initCollectionsCarousel() {
  const wrapper = document.getElementById('collections-carousel-wrapper');
  const stage = document.getElementById('round-carousel-stage');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  if (!wrapper || !stage) return;

  const items = CAROUSEL_COLLECTIONS;
  const count = items.length;
  const angle = 360 / count;

  let currentSettings = getSettings();
  let radius = calculateRadius(currentSettings);
  let rotY = 0;
  let velY = 0;
  let isHovered = false;
  let isVisible = false;
  let rafId = null;
  let lastTime = 0;

  const drag = {
    active: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastTime: 0,
    totalMoved: 0
  };

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const baseSpeed = prefersReduced ? 0 : 3.8; // degrees per second idle

  function getSettings() {
    const w = window.innerWidth;
    if (w >= 1280) {
      return { width: 310, height: 350, spacing: 1.65, tilt: -4.5, perspective: 2400 };
    } else if (w >= 992) {
      return { width: 260, height: 300, spacing: 1.4, tilt: -4, perspective: 2000 };
    } else if (w >= 768) {
      return { width: 220, height: 260, spacing: 1.15, tilt: -3.5, perspective: 1800 };
    } else if (w >= 480) {
      return { width: 200, height: 245, spacing: 0.85, tilt: -3, perspective: 1500 };
    } else {
      return { width: 180, height: 225, spacing: 0.65, tilt: -2.5, perspective: 1300 };
    }
  }

  function calculateRadius(s) {
    const factor = 1 + s.spacing * 0.15;
    return (s.width * factor) / (2 * Math.tan(Math.PI / count));
  }

  // Create Tilt Wrapper & Ring
  const tiltWrapper = document.createElement('div');
  tiltWrapper.className = 'carousel-tilt-wrapper';
  tiltWrapper.style.transform = `rotateX(${currentSettings.tilt}deg)`;

  const ring = document.createElement('div');
  ring.className = 'carousel-ring';
  ring.style.width = `${currentSettings.width}px`;
  ring.style.height = `${currentSettings.height}px`;

  items.forEach((item, i) => {
    const cardItem = document.createElement('div');
    cardItem.className = 'carousel-card-item';
    cardItem.dataset.index = i;
    cardItem.dataset.link = item.link;

    cardItem.innerHTML = `
      <div class="carousel-card-front" style="background-image: url('${item.image}')">
        <div class="card-top-tag">
          <span>${item.layer}</span>
        </div>
        <div class="card-bottom-info">
          <h4 class="card-bottom-title">${item.name}</h4>
          <span class="card-bottom-tagline">${item.tagline}</span>
          <span class="card-explore-btn">Explore Collection →</span>
        </div>
      </div>
      <div class="carousel-card-back">
        <img src="/assets/catalogue/vittesa-emblem-gold.jpg" alt="VITTESA" class="back-emblem" />
        <div class="back-brand">VITTESA</div>
        <div class="back-text">Porcelain Maison</div>
      </div>
    `;

    ring.appendChild(cardItem);
  });

  tiltWrapper.appendChild(ring);
  stage.innerHTML = '';
  stage.appendChild(tiltWrapper);

  function layoutCards() {
    stage.style.perspective = `${currentSettings.perspective}px`;
    tiltWrapper.style.transform = `rotateX(${currentSettings.tilt}deg)`;
    ring.style.width = `${currentSettings.width}px`;
    ring.style.height = `${currentSettings.height}px`;

    const cards = ring.querySelectorAll('.carousel-card-item');
    cards.forEach((card, i) => {
      card.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
    });
  }

  layoutCards();

  function applyTransform() {
    ring.style.transform = `translateZ(${-radius}px) rotateY(${rotY}deg)`;
  }

  applyTransform();

  // Resize handler
  window.addEventListener('resize', () => {
    currentSettings = getSettings();
    radius = calculateRadius(currentSettings);
    layoutCards();
    applyTransform();
  }, { passive: true });

  // Hover detection to gently slow rotation
  stage.addEventListener('mouseenter', () => { isHovered = true; });
  stage.addEventListener('mouseleave', () => { isHovered = false; });

  // Pointer Drag Interaction
  const onPointerDown = (e) => {
    drag.active = true;
    drag.startX = e.clientX;
    drag.startY = e.clientY;
    drag.lastX = e.clientX;
    drag.lastTime = performance.now();
    drag.totalMoved = 0;
    velY = 0;
    stage.style.cursor = 'grabbing';
    try {
      stage.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const onPointerMove = (e) => {
    if (!drag.active) return;
    const now = performance.now();
    const dx = e.clientX - drag.lastX;
    const dt = Math.max((now - drag.lastTime) / 1000, 0.008);

    drag.totalMoved += Math.abs(dx);
    drag.lastX = e.clientX;
    drag.lastTime = now;

    const sensitivity = window.innerWidth < 768 ? 0.32 : 0.22;
    rotY += dx * sensitivity;

    // Track instant velocity with clamping
    const instantVel = (dx * sensitivity) / dt;
    velY = velY * 0.35 + instantVel * 0.65;
    velY = Math.max(-160, Math.min(160, velY));

    applyTransform();
  };

  const onPointerUp = (e) => {
    if (!drag.active) return;
    drag.active = false;
    stage.style.cursor = 'grab';
    try {
      stage.releasePointerCapture(e.pointerId);
    } catch (_) {}

    // Check click vs drag
    if (drag.totalMoved < 7) {
      const targetCard = e.target.closest('.carousel-card-item');
      if (targetCard && targetCard.dataset.link) {
        const link = targetCard.dataset.link;
        if (link.startsWith('#')) {
          const el = document.querySelector(link);
          el?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = link;
        }
      }
    }
  };

  stage.addEventListener('pointerdown', onPointerDown);
  stage.addEventListener('pointermove', onPointerMove);
  stage.addEventListener('pointerup', onPointerUp);
  stage.addEventListener('pointercancel', onPointerUp);

  // Prev / Next button step rotation
  prevBtn?.addEventListener('click', () => {
    velY += 45;
  });
  nextBtn?.addEventListener('click', () => {
    velY -= 45;
  });

  // Physics animation loop
  function loop(now) {
    if (!lastTime) lastTime = now;
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    if (!drag.active) {
      if (Math.abs(velY) > 0.05) {
        rotY += velY * dt;
        velY *= 0.945; // Smooth realistic inertia decay
      } else {
        // Continuous slow turntable rotation
        const currentTargetSpeed = isHovered ? (baseSpeed * 0.18) : baseSpeed;
        rotY += currentTargetSpeed * dt;
      }
      applyTransform();
    }

    if (isVisible) {
      rafId = requestAnimationFrame(loop);
    }
  }

  // Intersection Observer for performance & entrance reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        wrapper.classList.add('visible');
        if (!isVisible) {
          isVisible = true;
          lastTime = performance.now();
          rafId = requestAnimationFrame(loop);
        }
      } else {
        isVisible = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    });
  }, { threshold: 0.12 });

  observer.observe(wrapper);
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

  // Check URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const colParam = urlParams.get('collection');
  const catParam = urlParams.get('category');
  const searchParam = urlParams.get('search');

  if (colParam) {
    const matchedCol = document.querySelector(`.filter-chip[data-collection="${colParam}"]`);
    if (matchedCol) {
      collectionChips.forEach(c => c.classList.remove('active'));
      matchedCol.classList.add('active');
      state.activeCollectionFilter = colParam;
    }
  }

  if (catParam) {
    const matchedCat = document.querySelector(`.filter-chip[data-category="${catParam}"]`);
    if (matchedCat) {
      categoryChips.forEach(c => c.classList.remove('active'));
      matchedCat.classList.add('active');
      state.activeCategoryFilter = catParam;
    }
  }

  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    state.searchQuery = searchParam.trim().toLowerCase();
  }

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
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/index.html#contact';
    }
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
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/index.html#contact';
    }
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
