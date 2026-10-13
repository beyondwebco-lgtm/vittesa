import { execSync } from 'child_process';
import fs from 'fs';

const raw = execSync('git show ac3192e~1:src/data/catalogue-data.js', { maxBuffer: 10 * 1024 * 1024 }).toString();

const match = raw.match(/const\s+PRODUCTS\s*=\s*(\[[\s\S]*?\]);/);
if (match) {
  // Evaluation in sandbox or regex extract
  console.log('Found PRODUCTS');
}

// Let's filter products whose collection is "LUMÉRA"
const lumeraItemsRegex = /{\s*id:\s*"lp-[\s\S]*?editorialCaption:[\s\S]*?}/g;
const matches = raw.match(lumeraItemsRegex);
console.log('Matches count:', matches ? matches.length : 0);

if (matches) {
  const products = matches.map(m => {
    // safely convert JS object literal to valid object
    const fn = new Function('return ' + m);
    const obj = fn();
    return {
      ...obj,
      productCode: obj.code,
      images: [obj.image],
      image: obj.image
    };
  });
  console.log('Extracted', products.length, 'Lumera products');
  const code = '/**\n * VITTESA — LUMÉRA Product Specifications (' + products.length + ' Pieces)\n */\n\nexport const LUMERA_PRODUCTS = ' + JSON.stringify(products, null, 2) + ';\n';
  fs.writeFileSync('src/data/products/lumera.js', code);
}
