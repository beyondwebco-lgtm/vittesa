import fs from 'fs';
import { OLIVERA_PRODUCTS } from '../src/data/products/olivera.js';
import { AVERON_PRODUCTS } from '../src/data/products/averon.js';
import { PRODUCTS } from '../src/data/catalogue-data.js';

const oliveraHtml = fs.readFileSync('collections/olivera/index.html', 'utf8');
const oliveraCards = (oliveraHtml.match(/class="product-item-card"/g) || []).length;
console.log('Olivera HTML cards count:', oliveraCards, '(Expected: 18, OLIVERA_PRODUCTS:', OLIVERA_PRODUCTS.length, ')');

const averonHtml = fs.readFileSync('collections/averon/index.html', 'utf8');
const averonCards = (averonHtml.match(/class="product-item-card"/g) || []).length;
console.log('Averon HTML cards count:', averonCards, '(Expected: 45, AVERON_PRODUCTS:', AVERON_PRODUCTS.length, ')');

console.log('Total Master Products count:', PRODUCTS.length);

// Verify check 3 & 4: numbered variants appear in that product's carousel and belong only to that product
OLIVERA_PRODUCTS.forEach(p => {
  console.log(`Product [${p.code}] ${p.name}: ${p.images.length} images ->`, p.images);
});
