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
                <a href="/collections/olivera/product.html?id=${p.id}" class="btn-card-quickview" role="button">View Details</a>
                <button type="button" class="btn-card-buynow" onclick="window.vittesaOpenEnquiryModal('OLIVERA — ${p.name}')">Buy Now</button>
              </div>
            </div>
          </div>`;
  }).join('\n\n');
}

const cardsHtml = renderProductCards();

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VITTESA — OLIVERA Porcelain Showroom</title>
  <meta name="description" content="Softly muted olive-grey porcelain with rounded, organic silhouettes. Official 17-piece catalogue for luxury hospitality." />
  <link rel="stylesheet" href="/src/style.css" />
  <link rel="icon" type="image/png" href="/assets/logo/vittesa-monogram-emblem.png" />
</head>
<body class="olivera-showroom-home">

  <!-- Top Rotating Announcement Bar -->
  <aside class="top-announcement-bar" role="region" aria-label="Announcements">
    <div class="container announcement-container">
      <div class="announcement-slider" id="announcement-slider" aria-live="polite" aria-atomic="true">
        <span class="announcement-slide active" data-index="0">PREMIUM HOSPITALITY PORCELAIN — OLIVERA SHOWROOM</span>
        <span class="announcement-slide" data-index="1">ORGANIC ROUNDED SILHOUETTES & MUTED OLIVE-GREY GLAZE</span>
        <span class="announcement-slide" data-index="2">DIRECT TRADE & WHOLESALE ENQUIRIES WELCOME</span>
        <span class="announcement-slide" data-index="3">ENGINEERED FOR FINE DINING, LUXURY HOTELS & BISTROS</span>
        <span class="announcement-slide" data-index="4">REQUEST PHYSICAL SAMPLE BOXES & TECHNICAL SPECIFICATIONS</span>
      </div>
    </div>
  </aside>

  <!-- 1. HEADER (Minimal) -->
  <header class="site-header">
    <div class="container">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo-wrap" aria-label="VITTESA Home">
          <img src="/assets/logo/vittesa-monogram-gold.png" alt="VITTESA" class="brand-logo-wordmark" />
        </a>

        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-links">
            <li><a href="/" class="nav-link active">Home</a></li>
            <li><a href="/collections/olivera/" class="nav-link">Collection</a></li>
            <li><a href="#about" class="nav-link">About Us</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
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
          <li><a href="#about" onclick="document.querySelector('.btn-close-mobile-nav')?.click();"><span class="nav-num">03</span> About Us</a></li>
          <li><a href="#contact" onclick="document.querySelector('.btn-close-mobile-nav')?.click();"><span class="nav-num">04</span> Contact</a></li>
        </ul>
      </nav>

      <div class="mobile-nav-footer">
        <a href="#products" class="btn-contact-header mobile-contact-btn" onclick="document.querySelector('.btn-close-mobile-nav')?.click();">Shop OLIVERA</a>
      </div>
    </div>
  </div>

  <main>
    <!-- 2. HERO SECTION -->
    <section class="hero-section hero-olivera-minimal" id="hero">
      <div class="container">
        <div class="hero-split-grid">

          <!-- Left Column: Editorial Copy -->
          <div class="hero-text-col">
            <div class="hero-eyebrow-wrap">
              <span class="hero-eyebrow-badge">PORCELAIN MAISON</span>
              <span class="hero-eyebrow-caption">VITTESA · PORCELAIN MAISON</span>
            </div>

            <h1 class="hero-title" style="letter-spacing: 0.08em;">
              OLIVERA
            </h1>

            <p class="hero-description" style="max-width: 520px; font-size: clamp(1rem, 1.4vw, 1.15rem); line-height: 1.7; color: var(--ink-secondary);">
              Softly muted olive-grey porcelain with rounded, organic silhouettes.
            </p>

            <div class="hero-cta-group" style="margin-top: 2rem;">
              <a href="#products" class="btn-primary" style="padding: 0.9rem 2.2rem;">Explore Collection</a>
              <a href="#contact" class="btn-secondary-light" style="padding: 0.9rem 2rem;">Contact Us</a>
            </div>
          </div>

          <!-- Right Column: Large Beautiful Editorial Image -->
          <div class="hero-media-col">
            <div class="hero-single-image-wrap">
              <img 
                src="/assets/catalogue/olivera-editorial-hero.jpg" 
                alt="OLIVERA Porcelain Tableware — VITTESA Porcelain Maison" 
                class="hero-single-img" 
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. FEATURED COLLECTION SECTION -->
    <section class="featured-collection-section section-padding" id="featured-collection" style="background-color: var(--bg-porcelain-alt); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="olivera-split-layout">
          <!-- Left: Prominent Editorial Image -->
          <div class="olivera-feature-media">
            <a href="#products" aria-label="Explore OLIVERA Collection">
              <img 
                src="/assets/catalogue/olivera-editorial-hero.jpg" 
                alt="OLIVERA Porcelain Collection Editorial" 
                class="olivera-feature-img" 
                loading="lazy"
              />
            </a>
          </div>

          <!-- Right: Collection Information -->
          <div class="olivera-feature-info">
            <span class="eyebrow" style="color: var(--tone-gold);">Featured Collection</span>
            <h2 class="olivera-feature-title" style="margin-top: 0.5rem; font-size: clamp(2.25rem, 4vw, 3.25rem);">OLIVERA</h2>
            <p class="olivera-feature-desc" style="font-size: 1.05rem; line-height: 1.7; color: var(--ink-secondary); margin: 1.25rem 0 2rem;">
              Softly muted olive-grey porcelain with rounded, organic silhouettes. Designed for contemporary hospitality, fine dining, and artisanal table settings.
            </p>
            <div class="olivera-feature-cta-wrap">
              <a href="#products" class="btn-primary" style="padding: 0.85rem 2.25rem; font-size: 0.8125rem;">
                Explore Products →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. PRODUCT SHOWCASE (17 PIECES GRID) -->
    <section class="olivera-catalogue-section section-padding" id="products">
      <div class="container">
        <div class="editorial-header-block" style="text-align: center; max-width: 720px; margin: 0 auto clamp(2rem, 4vw, 3rem);">
          <span class="eyebrow" style="color: var(--tone-gold);">The Porcelain Catalogue</span>
          <h2 style="font-size: clamp(2.2rem, 3.8vw, 3rem); margin: 0.5rem 0 0.75rem;">OLIVERA COLLECTION</h2>
          <p style="color: var(--ink-secondary); font-size: 0.95rem; line-height: 1.6;">
            Discover all 17 pieces crafted with organic contours and calm olive-grey glaze.
          </p>
        </div>

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
      </div>
    </section>

    <!-- 5. ABOUT SECTION -->
    <section class="about-section section-padding" id="about" style="background-color: var(--bg-porcelain-alt); border-top: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="about-editorial-layout">
          <div class="about-text-col">
            <span class="eyebrow eyebrow-dark">About VITTESA</span>
            <h2>EXQUISITE IN DESIGN. REFINED IN EVERY DETAIL.</h2>
            <div class="about-motto">PEOPLE • PRODUCTS • POSSIBILITIES</div>
            <p>
              VITTESA stands as a hallmark of prestige, representing refined, exquisitely crafted European-style hospitality porcelain tailored for the luxury HoReCa industry. Engineered to balance tactile beauty with commercial resilience, our porcelain frames signature culinary creations with warmth, distinction, and timeless elegance.
            </p>
            <p>
              From boutique hotel dining rooms to award-winning restaurants, VITTESA delivers focused collections engineered for operational excellence, thermal retention, and refined presentation.
            </p>

            <div class="about-pillars-tags">
              <span class="about-tag">Hospitality Porcelain</span>
              <span class="about-tag">European Design</span>
              <span class="about-tag">Artisanal Glaze</span>
              <span class="about-tag">Commercial Durability</span>
            </div>
          </div>

          <div class="about-media-col">
            <img src="/assets/catalogue/about-us.png" alt="Serene Earth-Toned Ceramic Table Setting — VITTESA Porcelain Maison" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- 6. CONTACT SECTION -->
    <section class="contact-section section-padding" id="contact">
      <div class="container">
        <div class="contact-layout">
          <!-- Left Column: Details -->
          <div class="contact-sidebar">
            <span class="eyebrow">Trade Specification Desk</span>
            <h2>LET'S TALK TABLEWARE</h2>
            <p>
              Tell us about your hospitality project, tabletop requirements, or sample requests. Our specification team provides sample boxes, technical datasheets, and trade quotations.
            </p>

            <div class="contact-details-list">
              <div class="contact-detail-block">
                <span>International Portfolio Inquiries</span>
                <strong>enquiries@vittesa.com</strong>
              </div>
              <div class="contact-detail-block">
                <span>Direct Hospitality Specification Desk</span>
                <strong>+44 20 7946 0892</strong>
              </div>
              <div class="contact-detail-block">
                <span>Official Documentation</span>
                <strong>Full VITTESA Catalogue PDF & Technical Datasheets Available on Request</strong>
              </div>
              <div class="contact-detail-block">
                <span>Sample Boxes & Custom Orders</span>
                <strong>Physical sample boxes and project consultation available upon request</strong>
              </div>
            </div>
          </div>

          <!-- Right Column: Enquiry Form -->
          <div class="enquiry-form-card">
            <form id="b2b-enquiry-form">
              <input type="hidden" name="collection" value="OLIVERA" />

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="enq-name">Your Full Name *</label>
                  <input type="text" id="enq-name" name="name" class="form-input" placeholder="e.g. Jean-Luc Laurent" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="enq-company">Company / Property Name *</label>
                  <input type="text" id="enq-company" name="company" class="form-input" placeholder="e.g. Grand Horizon Hotel & Resorts" required />
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="enq-email">Business Email *</label>
                  <input type="email" id="enq-email" name="email" class="form-input" placeholder="name@company.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="enq-phone">Contact Phone</label>
                  <input type="tel" id="enq-phone" name="phone" class="form-input" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="enq-country">Country / Region *</label>
                  <input type="text" id="enq-country" name="country" class="form-input" placeholder="e.g. United Kingdom, UAE, USA" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="enq-collection">Collection</label>
                  <select id="enq-collection" name="collectionInterest" class="form-select">
                    <option value="olivera" selected>OLIVERA Collection</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="enquiry-notes">Project Details / Selected Items</label>
                <textarea id="enquiry-notes" name="notes" class="form-textarea" rows="4" placeholder="Mention selected OLIVERA items, cover estimates, delivery timelines, or sample requests..."></textarea>
              </div>

              <div class="form-checkbox-row">
                <input type="checkbox" id="req-sample" name="requestSample" value="yes" />
                <label for="req-sample">Request physical sample box for tabletop review</label>
              </div>

              <div class="form-checkbox-row">
                <input type="checkbox" id="req-cat" name="requestCatalogue" value="yes" checked />
                <label for="req-cat">Send digital high-resolution VITTESA Catalogue PDF</label>
              </div>

              <div class="form-submit-row">
                <button type="submit" class="btn-primary" style="background-color:var(--ink-primary); color:#FFF; width:100%;">
                  Send Enquiry
                </button>
              </div>

              <div id="form-status"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- SPECIFICATION TRAY DRAWER -->
  <aside class="spec-tray-drawer" id="spec-tray" aria-label="Project Specification Tray">
    <div class="tray-header">
      <h3>Project Specification</h3>
      <button class="btn-close-tray" aria-label="Close Tray">✕</button>
    </div>

    <div class="tray-body">
      <div id="tray-empty" class="tray-empty-state">
        <p style="font-family:var(--font-serif); font-size:1.25rem; margin-bottom:0.5rem;">Your Tray is Empty</p>
        <p style="font-size:0.8125rem;">Select items from OLIVERA to compile your project specification schedule.</p>
      </div>

      <div id="tray-items" class="tray-items-list">
        <!-- Dynamically populated -->
      </div>
    </div>

    <div class="tray-footer">
      <button id="tray-proceed-btn" class="btn-primary" style="background-color:var(--ink-primary); color:#FFF; width:100%; text-align:center;">
        Transfer to Trade Enquiry →
      </button>
    </div>
  </aside>

  <!-- MINIMAL ENQUIRY MODAL -->
  <div class="enquiry-modal-backdrop" id="enquiry-modal" role="dialog" aria-modal="true">
    <div class="enquiry-modal-window">
      <button type="button" class="enquiry-modal-close" id="enquiry-modal-close" aria-label="Close modal">✕</button>
      <div style="margin-bottom: 1.5rem;">
        <span class="collection-intro-label" id="enquiry-collection-badge">Collection: OLIVERA</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-top: 0.25rem;">Enquire & Purchase</h3>
        <p style="font-size: 0.8125rem; color: var(--ink-muted); margin-top: 0.25rem;">
          Direct procurement pricing, lead times, and physical sample boxes for hospitality projects.
        </p>
      </div>

      <form class="vittesa-enquiry-form" id="enquiry-form">
        <input type="hidden" id="enquiry-collection-input" name="collection" value="OLIVERA" />
        
        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="modal-enq-name">Your Name *</label>
          <input type="text" id="modal-enq-name" name="name" class="form-input" placeholder="e.g. Jean-Luc Laurent" required style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="modal-enq-email">Business Email *</label>
          <input type="email" id="modal-enq-email" name="email" class="form-input" placeholder="name@company.com" required style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="modal-enq-property">Property / Venue Name</label>
          <input type="text" id="modal-enq-property" name="property" class="form-input" placeholder="e.g. The Grand Hotel, Dubai" style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;" />
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label style="display:block; font-size:0.6875rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;" for="modal-enq-notes">Project Requirements / Notes</label>
          <textarea id="modal-enq-notes" name="notes" class="form-textarea" rows="3" placeholder="Cover count, required pieces, sample request..." style="width:100%; padding:0.75rem; border:1px solid var(--border-medium); font-size:0.875rem;"></textarea>
        </div>

        <button type="submit" class="btn-primary" style="width:100%; background:var(--ink-primary); color:#FFF; padding:0.85rem; font-size:0.8125rem;">
          Submit Enquiry
        </button>
      </form>
    </div>
  </div>

  <!-- 7. MINIMAL FOOTER -->
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
        <a href="#about" style="color:var(--ink-primary); text-decoration:none;">About Us</a>
        <span style="color:var(--border-medium);">•</span>
        <a href="#contact" style="color:var(--ink-primary); text-decoration:none;">Contact</a>
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

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully generated simplified OLIVERA index.html!');
