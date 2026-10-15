import fs from 'fs';
import { OLIVERA_PRODUCTS } from '../src/data/products/olivera.js';

console.log('=== Verifying 17 OLIVERA Products ===');
console.log(`Master array length: ${OLIVERA_PRODUCTS.length}`);

if (OLIVERA_PRODUCTS.length !== 17) {
  console.error(`ERROR: Expected 17 products, found ${OLIVERA_PRODUCTS.length}`);
  process.exit(1);
}

// Check images exist
let missingImages = 0;
OLIVERA_PRODUCTS.forEach(p => {
  const images = (p.images && p.images.length > 0) ? p.images : [p.image];
  images.forEach(img => {
    const localPath = 'public' + decodeURIComponent(img);
    if (!fs.existsSync(localPath)) {
      console.error(`Missing image file: ${localPath} for product ${p.name}`);
      missingImages++;
    }
  });
});

if (missingImages === 0) {
  console.log('All product images verified on disk!');
}

// Verify collections/olivera/index.html contains all 17
const indexHtml = fs.readFileSync('index.html', 'utf8');
const oliveraHtml = fs.readFileSync('collections/olivera/index.html', 'utf8');

let missingInOlivera = 0;
OLIVERA_PRODUCTS.forEach(p => {
  if (!oliveraHtml.includes(`data-product-id="${p.id}"`)) {
    console.error(`Product ${p.id} (${p.name}) missing in collections/olivera/index.html`);
    missingInOlivera++;
  }
  const pdpLink = `/collections/olivera/product.html?id=${p.id}`;
  if (!oliveraHtml.includes(pdpLink)) {
    console.error(`PDP link ${pdpLink} missing in collections/olivera/index.html`);
    missingInOlivera++;
  }
});

if (missingInOlivera === 0) {
  console.log('All 17 products and PDP links successfully verified in collections/olivera/index.html!');
}

// Verify homepage has featured selection and link to all 17
const featuredCount = (indexHtml.match(/data-product-id="/g) || []).length;
console.log(`Homepage features ${featuredCount} curated pieces directly.`);
if (indexHtml.includes('/collections/olivera/')) {
  console.log('Homepage contains clear link to full 17-piece OLIVERA collection!');
}

// Verify categories
const cats = {};
OLIVERA_PRODUCTS.forEach(p => {
  cats[p.category] = (cats[p.category] || 0) + 1;
});
console.log('Category distribution:', cats);
