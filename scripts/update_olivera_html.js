import fs from 'fs';
import { OLIVERA_PRODUCTS } from '../src/data/products/olivera.js';

function renderProductMedia(product) {
  const images = (product.images && product.images.length > 0) ? product.images : [product.image];
  if (images.length <= 1) {
    return `<img src="${images[0]}" alt="${product.name} - ${product.code}" loading="lazy" />`;
  }
  const slidesHtml = images.map((imgSrc, idx) => 
    `<img src="${imgSrc}" alt="${product.name} - ${product.code} (View ${idx + 1})" class="carousel-slide ${idx === 0 ? 'active' : ''}" loading="${idx === 0 ? 'eager' : 'lazy'}" />`
  ).join('\n              ');
  
  const dotsHtml = images.map((_, idx) => 
    `<button class="carousel-dot ${idx === 0 ? 'active' : ''}" type="button" data-index="${idx}" aria-label="View ${idx + 1}"></button>`
  ).join('\n                ');

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
  return `          <div class="product-item-card" data-category="${p.category}" data-product-id="${p.id}">
            <span class="product-item-badge">${p.code}</span>
            <div class="product-item-media ${hasMultiple ? 'has-carousel' : ''}" onclick="if(!this.getAttribute('data-swiped')) window.vittesaOpenModal('${p.id}')">
            ${renderProductMedia(p)}
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
          </div>`;
}).join('\n          \n');

let html = fs.readFileSync('collections/olivera/index.html', 'utf8');
const startTag = '<div class="products-grid-catalog" id="collection-products-grid">';
const endTag = '</div>\n      </div>\n    </section>\n\n    <!-- SECTION 06';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.error('Tags not found!', { startIndex, endIndex });
  process.exit(1);
} else {
  const newHtml = html.slice(0, startIndex + startTag.length) + '\n          \n' + cardsHtml + '\n          \n        ' + html.slice(endIndex);
  fs.writeFileSync('collections/olivera/index.html', newHtml);
  console.log('Successfully updated collections/olivera/index.html with pre-rendered slideshow cards!');
}
