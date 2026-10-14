import fs from 'fs';
import { OLIVERA_PRODUCTS } from '../src/data/products/olivera.js';

function renderProductMedia(product) {
  const images = (product.images && product.images.length > 0) ? product.images : [product.image];
  if (images.length <= 1) {
    return `<img src="${images[0]}" alt="${product.name}" loading="lazy" />`;
  }
  const slidesHtml = images.map((imgSrc, idx) => 
    `<img src="${imgSrc}" alt="${product.name} (View ${idx + 1})" class="carousel-slide ${idx === 0 ? 'active' : ''}" loading="${idx === 0 ? 'eager' : 'lazy'}" />`
  ).join('\n            ');
  
  const dotsHtml = images.map((_, idx) => 
    `<button class="carousel-dot ${idx === 0 ? 'active' : ''}" type="button" data-index="${idx}" aria-label="View ${idx + 1}"></button>`
  ).join('\n              ');

  return `<div class="carousel-track">
            ${slidesHtml}
          </div>
          <span class="carousel-counter">1 / ${images.length}</span>
          <button class="carousel-nav-btn prev" type="button" aria-label="Previous view"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
          <button class="carousel-nav-btn next" type="button" aria-label="Next view"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          <div class="carousel-dots-container">
              ${dotsHtml}
          </div>`;
}

const cardsHtml = OLIVERA_PRODUCTS.map(p => {
  const hasMultiple = p.images && p.images.length > 1;
  const specDimension = p.dimensions || (p.specs && (p.specs.diameter || p.specs.dimensions || p.specs.capacity)) || '';

  return `        <div class="product-item-card" data-category="${p.category}" data-product-id="${p.id}">
          <div class="product-item-media ${hasMultiple ? 'has-carousel' : ''}" onclick="if(!event.target.closest('.carousel-nav-btn') && !event.target.closest('.carousel-dots-container') && !this.getAttribute('data-swiped')) window.location.href='/collections/olivera/product.html?id=${p.id}'" style="cursor: pointer;">
          ${renderProductMedia(p)}
          </div>
          <div class="product-item-body">
            <div>
              <h3 class="product-item-title">
                <a href="/collections/olivera/product.html?id=${p.id}" class="product-title-link">${p.name}</a>
              </h3>
              <div class="product-item-dimensions">${specDimension}</div>
            </div>
            <a href="/collections/olivera/product.html?id=${p.id}" class="btn-card-quickview" role="button">View Details</a>
          </div>
        </div>`;
}).join('\n\n');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OLIVERA — Natural Earth Series | VITTESA European Porcelain</title>
  <meta name="description" content="Softly muted olive-grey porcelain with rounded, organic silhouettes. Official 17-piece catalogue for luxury hospitality." />
  <link rel="stylesheet" href="/src/style.css" />
  <link rel="icon" type="image/jpeg" href="/assets/catalogue/vittesa-emblem-gold.jpg" />
</head>
<body class="collection-detail-page olivera-minimal-page" data-collection-id="olivera">

  <!-- 1. HEADER -->
  <header class="site-header">
    <div class="container">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo-wrap" aria-label="VITTESA Home">
          <img src="/assets/catalogue/vittesa-emblem-gold.jpg" alt="VITTESA Emblem" class="brand-logo-emblem" />
          <div>
            <div class="brand-logo-text">VITTESA</div>
            <span class="brand-tagline-sub">Porcelain Maison</span>
          </div>
        </a>

        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-links">
            <li><a href="/" class="nav-link">Home</a></li>
            <li><a href="/collections/" class="nav-link active">Collections</a></li>
            <li><a href="#products" class="nav-link">Products</a></li>
            <li><a href="/#about" class="nav-link">About Us</a></li>
            <li><a href="/#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div class="nav-actions">
          <button class="tray-btn open-tray-btn" title="View Project Specification Schedule">
            <span class="tray-btn-text-full">Spec Tray</span><span class="tray-btn-text-short">Tray</span> <span class="tray-badge" style="display:none;">0</span>
          </button>
          <button type="button" onclick="window.vittesaOpenEnquiryModal('OLIVERA')" class="btn-enquire">Enquire</button>
          <button class="mobile-menu-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Overlay -->
  <div class="mobile-nav-overlay" id="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation Menu">
    <div class="mobile-nav-backdrop"></div>
    <div class="mobile-nav-dialog">
      <div class="mobile-nav-header">
        <a href="/" class="brand-logo-wrap mobile-logo-wrap" aria-label="VITTESA Home">
          <img src="/assets/catalogue/vittesa-emblem-gold.jpg" alt="VITTESA Emblem" class="brand-logo-emblem" />
          <div>
            <div class="brand-logo-text">VITTESA</div>
            <span class="brand-tagline-sub">Porcelain Maison</span>
          </div>
        </a>
        <button class="btn-close-mobile-nav" aria-label="Close Navigation">✕</button>
      </div>

      <nav class="mobile-nav-body">
        <ul class="mobile-nav-links">
          <li><a href="/"><span class="nav-num">01</span> Home</a></li>
          <li><a href="/collections/"><span class="nav-num">02</span> Collections</a></li>
          <li><a href="#products" onclick="document.querySelector('.btn-close-mobile-nav')?.click();"><span class="nav-num">03</span> Products</a></li>
          <li><a href="/#about"><span class="nav-num">04</span> About Us</a></li>
          <li><a href="/#contact"><span class="nav-num">05</span> Contact</a></li>
        </ul>
      </nav>

      <div class="mobile-nav-footer">
        <button class="tray-btn open-tray-btn mobile-tray-btn" title="View Project Specification Schedule">
          Spec Tray <span class="tray-badge" style="display:none;">0</span>
        </button>
        <button type="button" onclick="window.vittesaOpenEnquiryModal('OLIVERA'); document.querySelector('.btn-close-mobile-nav')?.click();" class="btn-enquire mobile-enquire-btn">Enquire</button>
      </div>
    </div>
  </div>

  <main>
    <!-- 2. MINIMAL COLLECTION INTRODUCTION & 3. PHOTOGRAPHY -->
    <section class="olivera-intro-section">
      <div class="container text-center">
        <span class="collection-intro-label">02 — NATURAL EARTH SERIES</span>
        <h1 class="collection-intro-title">OLIVERA</h1>
        <p class="collection-intro-desc">
          Softly muted olive-grey porcelain with rounded, organic silhouettes.
        </p>

        <div class="olivera-hero-media">
          <img 
            src="/assets/catalogue/olivera-editorial-hero.jpg" 
            alt="OLIVERA European-Style Porcelain Tableware" 
            class="olivera-hero-img" 
            loading="eager"
          />
        </div>
      </div>
    </section>

    <!-- 4. PRODUCT CATALOGUE — MAIN FOCUS (17 PIECES) -->
    <section class="olivera-catalogue-section" id="products">
      <div class="container">
        
        <!-- Filter Bar -->
        <div class="products-filter-bar">
          <button class="filter-chip active" data-filter="all">All (17)</button>
          <button class="filter-chip" data-filter="plates">Plates (6)</button>
          <button class="filter-chip" data-filter="bowls">Bowls (7)</button>
          <button class="filter-chip" data-filter="accessories">Accessories (2)</button>
          <button class="filter-chip" data-filter="platters">Platters (2)</button>
        </div>

        <!-- 17 Product Cards Grid -->
        <div class="products-grid-catalog olivera-cards-grid" id="collection-products-grid">
${cardsHtml}
        </div>

      </div>
    </section>
  </main>

  <!-- 6. SPECIFICATION TRAY DRAWER -->
  <aside class="spec-tray-drawer" id="spec-tray-drawer" aria-label="Project Specification Tray">
    <div class="tray-header">
      <div>
        <h3>Project Specification</h3>
        <p style="font-size:0.75rem; color:var(--ink-muted); margin-top:2px;">Curated Hospitality Portfolio Schedule</p>
      </div>
      <button class="btn-close-tray" id="close-tray-btn" aria-label="Close Tray">✕</button>
    </div>
    <div class="tray-body">
      <div id="tray-empty" class="tray-empty-state">
        <p style="font-family:var(--font-serif); font-size:1.25rem; margin-bottom:0.5rem;">Your Tray is Empty</p>
        <p style="font-size:0.8125rem;">Select items from OLIVERA to build your project schedule.</p>
      </div>
      <div id="tray-items" class="tray-items-list"></div>
    </div>
    <div class="tray-footer">
      <button id="tray-proceed-btn" class="btn-primary" style="background-color:var(--ink-primary); color:#FFF; width:100%; text-align:center;">
        Request Specifications & Quote →
      </button>
    </div>
  </aside>

  <!-- PRODUCT DETAIL MODAL -->
  <div class="product-modal-backdrop" id="product-modal" role="dialog" aria-modal="true">
    <div class="product-modal-window">
      <button class="btn-close-modal" aria-label="Close details">✕</button>
      <div class="modal-grid">
        <div class="modal-photo-col">
          <img id="modal-img" src="" alt="VITTESA Product Detail" />
        </div>
        <div class="modal-info-col">
          <div>
            <div id="modal-code" class="modal-code-badge" style="display:none;"></div>
            <h3 id="modal-title" class="modal-title">Product Name</h3>
            <div id="modal-collection" class="modal-collection-name">Collection</div>
            <table class="modal-specs-table" id="modal-specs-table"></table>
          </div>
          <div class="modal-cta-group">
            <button id="modal-add-btn" class="btn-primary" style="background-color:var(--ink-primary); color:#FFF;">
              Add to Specification Tray
            </button>
            <button id="modal-enquire-btn" class="tray-btn" style="text-align:center; justify-content:center;">
              Enquire About This Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MINIMAL ENQUIRY MODAL -->
  <div class="enquiry-modal-backdrop" id="enquiry-modal" role="dialog" aria-modal="true">
    <div class="enquiry-modal-window">
      <button type="button" class="enquiry-modal-close" id="enquiry-modal-close" aria-label="Close modal">✕</button>
      <div style="margin-bottom: 1.5rem;">
        <span class="collection-intro-label" id="enquiry-collection-badge">Collection: OLIVERA</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-top: 0.25rem;">Trade Specification & Samples</h3>
        <p style="font-size: 0.8125rem; color: var(--ink-muted); margin-top: 0.25rem;">
          Direct procurement pricing, lead times, and physical sample boxes for hospitality projects.
        </p>
      </div>

      <form class="vittesa-enquiry-form" id="enquiry-form">
        <input type="hidden" id="enquiry-collection-input" name="collection" value="OLIVERA" />
        
        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-name">Your Name *</label>
          <input type="text" id="enq-name" name="name" class="form-input" placeholder="e.g. Jean-Luc Laurent" required style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-email">Business Email *</label>
          <input type="email" id="enq-email" name="email" class="form-input" placeholder="name@company.com" required style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-property">Property / Venue Name</label>
          <input type="text" id="enq-property" name="property" class="form-input" placeholder="e.g. The Grand Hotel, Dubai" style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-notes">Project Requirements / Notes</label>
          <textarea id="enq-notes" name="notes" class="form-textarea" rows="3" placeholder="Cover count, required pieces, sample request..." style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;"></textarea>
        </div>

        <button type="submit" class="btn-primary" style="width:100%; background:var(--ink-primary); color:#FFF; padding:0.85rem; font-size:0.8125rem;">
          Submit Specification Request
        </button>
      </form>
    </div>
  </div>

  <!-- 7. MINIMAL FOOTER -->
  <footer class="olivera-minimal-footer">
    <div class="container text-center">
      <div class="footer-minimal-brand">VITTESA</div>
      <div class="footer-minimal-sub">European-Style Premium Hospitality Porcelain</div>
      <div class="footer-minimal-links">
        <a href="javascript:void(0)" onclick="window.vittesaOpenEnquiryModal('OLIVERA')">Enquire About OLIVERA</a>
      </div>
      <div class="footer-minimal-copy">
        © 2026 VITTESA. All rights reserved.
      </div>
    </div>
  </footer>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
`;

fs.writeFileSync('collections/olivera/index.html', htmlContent, 'utf8');
console.log('✓ Successfully rebuilt collections/olivera/index.html');
