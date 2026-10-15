import fs from 'fs';
import { OLIVERA_PRODUCTS } from '../src/data/products/olivera.js';

function renderProductCards() {
  return OLIVERA_PRODUCTS.map(p => {
    const images = (p.images && p.images.length > 0) ? p.images : [p.image];
    const hasMultiple = images.length > 1;

    let mediaHtml = '';
    if (!hasMultiple) {
      mediaHtml = `
            <div class="product-item-media" onclick="window.location.href='/collections/olivera/product.html?id=${p.id}'" style="cursor: pointer;">
              <img src="${images[0]}" alt="${p.name}" loading="lazy" />
            </div>`;
    } else {
      const slidesHtml = images.map((imgSrc, idx) => 
        `<img src="${imgSrc}" alt="${p.name} (View ${idx + 1})" class="carousel-slide ${idx === 0 ? 'active' : ''}" loading="${idx === 0 ? 'eager' : 'lazy'}" />`
      ).join('\n              ');

      const dotsHtml = images.map((_, idx) => 
        `<button class="carousel-dot ${idx === 0 ? 'active' : ''}" type="button" data-index="${idx}" aria-label="View ${idx + 1}"></button>`
      ).join('\n                ');

      mediaHtml = `
            <div class="product-item-media has-carousel" onclick="if(!event.target.closest('.carousel-nav-btn') && !event.target.closest('.carousel-dots-container') && !this.getAttribute('data-swiped')) window.location.href='/collections/olivera/product.html?id=${p.id}'" style="cursor: pointer;">
              <div class="carousel-track">
                ${slidesHtml}
              </div>
              <span class="carousel-counter">1 / ${images.length}</span>
              <button class="carousel-nav-btn prev" type="button" aria-label="Previous view"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
              <button class="carousel-nav-btn next" type="button" aria-label="Next view"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
              <div class="carousel-dots-container">
                ${dotsHtml}
              </div>
            </div>`;
    }

    return `          <div class="product-item-card" data-category="${p.category}" data-product-id="${p.id}">
            ${mediaHtml.trim()}
            <div class="product-item-body">
              <div>
                <h3 class="product-item-title">
                  <a href="/collections/olivera/product.html?id=${p.id}" class="product-title-link">${p.name}</a>
                </h3>
                <div class="product-item-dimensions">${p.dimensions || ''}</div>
              </div>
              <div class="product-card-actions">
                <a href="/collections/olivera/product.html?id=${p.id}" class="btn-card-quickview" role="button">VIEW PRODUCT</a>
              </div>
            </div>
          </div>`;
  }).join('\n\n');
}

const cardsHtml = renderProductCards();

const oliveraHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OLIVERA Collection | VITTESA Porcelain Maison</title>
  <meta name="description" content="Softly muted olive-grey porcelain with rounded, organic silhouettes. Official 17-piece catalogue for luxury hospitality." />
  <link rel="stylesheet" href="/src/style.css" />
  <link rel="icon" type="image/png" href="/assets/logo/vittesa-monogram-emblem.png" />
</head>
<body class="collection-detail-page olivera-minimal-page" data-collection-id="olivera">

  <!-- Understated Top Announcement Bar -->
  <aside class="top-announcement-bar" role="region" aria-label="Announcement">
    <div class="container announcement-container" style="justify-content: center; text-align: center;">
      <span class="announcement-text" style="font-size: 0.6875rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-secondary);">
        European-Style Premium Hospitality Porcelain — OLIVERA Showroom
      </span>
    </div>
  </aside>

  <!-- 1. HEADER -->
  <header class="site-header">
    <div class="container">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo-wrap" aria-label="VITTESA Home">
          <img src="/assets/logo/vittesa-monogram-gold.png" alt="VITTESA" class="brand-logo-wordmark" />
        </a>

        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-links">
            <li><a href="/" class="nav-link">Home</a></li>
            <li><a href="/collections/olivera/" class="nav-link active">Collection</a></li>
            <li><a href="/#about" class="nav-link">About</a></li>
            <li><a href="/#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div class="nav-actions">
          <a href="#products" class="btn-contact-header">Shop OLIVERA</a>
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
          <img src="/assets/logo/vittesa-monogram-gold.png" alt="VITTESA" class="brand-logo-wordmark" />
        </a>
        <button class="btn-close-mobile-nav" aria-label="Close Navigation">✕</button>
      </div>

      <nav class="mobile-nav-body">
        <ul class="mobile-nav-links">
          <li><a href="/"><span class="nav-num">01</span> Home</a></li>
          <li><a href="/collections/olivera/"><span class="nav-num">02</span> Collection</a></li>
          <li><a href="/#about" onclick="document.querySelector('.btn-close-mobile-nav')?.click();"><span class="nav-num">03</span> About</a></li>
          <li><a href="/#contact" onclick="document.querySelector('.btn-close-mobile-nav')?.click();"><span class="nav-num">04</span> Contact</a></li>
        </ul>
      </nav>

      <div class="mobile-nav-footer">
        <a href="#products" class="btn-contact-header mobile-contact-btn" onclick="document.querySelector('.btn-close-mobile-nav')?.click();">Shop OLIVERA</a>
      </div>
    </div>
  </div>

  <main>
    <!-- 2. COMPACT COLLECTION HEADING & EDITORIAL IMAGE -->
    <section class="olivera-intro-section" style="padding: clamp(2rem, 4vw, 3.5rem) 0 1rem;">
      <div class="container text-center">
        <span class="collection-intro-label">VITTESA · PORCELAIN MAISON</span>
        <h1 class="collection-intro-title" style="margin: 0.25rem 0 0.5rem; letter-spacing: 0.08em;">OLIVERA</h1>
        <p class="collection-intro-desc" style="max-width: 580px; margin: 0 auto clamp(1.5rem, 3vw, 2.5rem); font-size: clamp(0.95rem, 1.4vw, 1.1rem); line-height: 1.6; color: var(--ink-secondary);">
          Softly muted olive-grey porcelain with rounded, organic silhouettes.
        </p>

        <div class="olivera-hero-media" style="max-width: 1040px; margin: 0 auto; border-radius: 2px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
          <img 
            src="/assets/catalogue/olivera-editorial-hero.jpg" 
            alt="OLIVERA Porcelain Tableware Collection" 
            class="olivera-hero-img" 
            loading="eager"
            style="width: 100%; height: auto; display: block;"
          />
        </div>
      </div>
    </section>

    <!-- 3. PRODUCT CATALOGUE — MAIN FOCUS (17 PIECES) -->
    <section class="olivera-catalogue-section section-padding" id="products">
      <div class="container">
        
        <!-- Filter Bar -->
        <div class="products-filter-bar">
          <button class="filter-chip active" data-filter="all">All (17)</button>
          <button class="filter-chip" data-filter="plates">Plates (6)</button>
          <button class="filter-chip" data-filter="bowls">Bowls (7)</button>
          <button class="filter-chip" data-filter="platters">Platters (2)</button>
          <button class="filter-chip" data-filter="accessories">Accessories (2)</button>
        </div>

        <!-- 17 Product Cards Grid -->
        <div class="products-grid-catalog olivera-cards-grid" id="collection-products-grid">
${cardsHtml}
        </div>

        <!-- Bottom Contact / Purchase CTA Bar -->
        <div style="text-align: center; margin-top: clamp(2.5rem, 5vw, 4rem); padding-top: 2.5rem; border-top: 1px solid var(--border-subtle);">
          <span class="eyebrow" style="color: var(--tone-gold);">Direct Procurement</span>
          <h3 style="font-family: var(--font-serif); font-size: clamp(1.75rem, 3vw, 2.25rem); margin: 0.5rem 0 0.75rem; color: var(--ink-primary);">Need Porcelain for Your Business?</h3>
          <p style="color: var(--ink-secondary); font-size: 0.95rem; max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.6;">
            Contact VITTESA for product enquiries, bulk requirements, and hospitality orders.
          </p>
          <button type="button" class="btn-primary" onclick="window.vittesaOpenEnquiryModal('OLIVERA Collection')" style="padding: 0.9rem 2.5rem; font-size: 0.8125rem;">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </section>
  </main>

  <!-- SPECIFICATION TRAY DRAWER (Preserved for quote workflow) -->
  <aside class="spec-tray-drawer" id="spec-tray" aria-label="Project Specification Tray">
    <div class="tray-header">
      <h3>Project Specification</h3>
      <button class="btn-close-tray" aria-label="Close Tray">✕</button>
    </div>

    <div class="tray-body">
      <div id="tray-empty" class="tray-empty-state">
        <p style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem;">Your Tray is Empty</p>
        <p style="font-size: 0.8125rem;">Select items from OLIVERA to compile your project specification schedule.</p>
      </div>

      <div id="tray-items" class="tray-items-list">
        <!-- Dynamically populated -->
      </div>
    </div>

    <div class="tray-footer">
      <button id="tray-proceed-btn" class="btn-primary" style="background-color: var(--ink-primary); color: #FFF; width: 100%; text-align: center;">
        Transfer to Trade Enquiry →
      </button>
    </div>
  </aside>

  <!-- STREAMLINED ENQUIRY MODAL -->
  <div class="enquiry-modal-backdrop" id="enquiry-modal" role="dialog" aria-modal="true">
    <div class="enquiry-modal-window">
      <button type="button" class="enquiry-modal-close" id="enquiry-modal-close" aria-label="Close modal">✕</button>
      <div style="margin-bottom: 1.5rem;">
        <span class="collection-intro-label" id="enquiry-collection-badge">Collection: OLIVERA</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-top: 0.25rem;">Product & Trade Enquiry</h3>
        <p style="font-size: 0.8125rem; color: var(--ink-muted); margin-top: 0.25rem;">
          Direct procurement pricing, lead times, and physical sample boxes for hospitality projects.
        </p>
      </div>

      <form class="vittesa-enquiry-form" id="enquiry-form">
        <input type="hidden" id="enquiry-collection-input" name="collection" value="OLIVERA" />
        
        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-name">Full Name *</label>
          <input type="text" id="enq-name" name="name" class="form-input" placeholder="Your full name" required style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-email">Email Address *</label>
          <input type="email" id="enq-email" name="email" class="form-input" placeholder="name@company.com" required style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-company">Company / Property Name (Optional)</label>
          <input type="text" id="enq-company" name="company" class="form-input" placeholder="e.g. Grand Horizon Hotel" style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="enq-notes">Message *</label>
          <textarea id="enq-notes" name="notes" class="form-textarea" rows="3" placeholder="Tell us about your requirements, required pieces, or sample request..." required style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;"></textarea>
        </div>

        <button type="submit" class="btn-primary" style="width:100%; background:var(--ink-primary); color:#FFF; padding:0.85rem; font-size:0.8125rem;">
          SEND ENQUIRY
        </button>
      </form>
    </div>
  </div>

  <!-- 4. MINIMAL FOOTER -->
  <footer class="site-footer olivera-minimal-footer">
    <div class="container text-center">
      <a href="/" aria-label="VITTESA Home" style="display:inline-block; text-decoration:none; margin-bottom:0.75rem;">
        <img src="/assets/logo/vittesa-monogram-gold.png" alt="VITTESA" class="footer-brand-wordmark" style="margin:0 auto;" />
      </a>
      <div class="footer-minimal-sub">European-Style Premium Hospitality Porcelain</div>
      <p style="font-size:0.8125rem; color:var(--ink-muted); max-width:540px; margin:0 auto 1.5rem; line-height:1.6;">
        European-Style Premium Hospitality Porcelain. Dedicated exclusively to the OLIVERA collection for refined tabletop presentations.
      </p>

      <div class="footer-minimal-links" style="display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin-bottom:1.5rem; font-size:0.8125rem;">
        <a href="/" style="color:var(--ink-primary); text-decoration:none;">Home</a>
        <span style="color:var(--border-medium);">•</span>
        <a href="/collections/olivera/" style="color:var(--ink-primary); text-decoration:none;">OLIVERA Collection</a>
        <span style="color:var(--border-medium);">•</span>
        <a href="/#about" style="color:var(--ink-primary); text-decoration:none;">About</a>
        <span style="color:var(--border-medium);">•</span>
        <a href="/#contact" style="color:var(--ink-primary); text-decoration:none;">Contact</a>
      </div>

      <div style="font-size:0.75rem; color:var(--ink-secondary); margin-bottom:1.25rem;">
        <span>enquiries@vittesa.com</span> • <span>+44 20 7946 0892</span>
      </div>

      <div class="footer-minimal-copy" style="font-size:0.6875rem; color:var(--ink-muted);">
        © 2026 VITTESA. All rights reserved.
      </div>
    </div>
  </footer>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
`;

fs.writeFileSync('collections/olivera/index.html', oliveraHtml);
console.log('Successfully updated collections/olivera/index.html!');
