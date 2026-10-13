const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public', 'extracted');
const destDir = path.join(__dirname, 'public', 'assets', 'catalogue');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Map key images to clean semantic names
const assetMap = {
  // Brand
  'vittesa_img_9_0_R_540x240.jpg': 'vittesa-brand-mark.jpg',
  'vittesa_img_132_0_R_210x160.jpg': 'vittesa-emblem-gold.jpg',
  
  // Hero & Luméra
  'vittesa_img_8_0_R_770x540.jpg': 'hero-lumera-table.jpg',
  'vittesa_raw_17_0_R_640x420.png': 'lumera-colour-trio.png',
  'vittesa_img_23_0_R_205x190.jpg': 'lumera-item-dinner-plate.jpg',
  'vittesa_img_24_0_R_308x210.jpg': 'lumera-item-side-plate.jpg',
  'vittesa_img_25_0_R_307x210.jpg': 'lumera-item-soup-plate.jpg',
  'vittesa_img_26_0_R_205x190.jpg': 'lumera-item-pasta-bowl.jpg',
  'vittesa_img_27_0_R_205x190.jpg': 'lumera-item-cereal-bowl.jpg',
  'vittesa_img_28_0_R_205x190.jpg': 'lumera-item-mug.jpg',
  'vittesa_img_29_0_R_307x210.jpg': 'lumera-item-rect-platter.jpg',
  'vittesa_img_30_0_R_308x210.jpg': 'lumera-item-oval-platter.jpg',
  'vittesa_img_31_0_R_205x190.jpg': 'lumera-item-sauce-bowl.jpg',
  'vittesa_img_32_0_R_205x190.jpg': 'lumera-item-serving-dish.jpg',

  // Olivera (Natural Earth Series - Earth Olive)
  'vittesa_img_41_0_R_1024x1536.jpg': 'olivera-editorial-hero.jpg',
  'vittesa_raw_44_0_R_840x1191.png': 'olivera-product-range.png',

  // Roké (Sculpted Texture Series)
  'vittesa_img_47_0_R_1024x1536.jpg': 'roke-editorial-hero.jpg',
  'vittesa_img_51_0_R_1024x768.jpg': 'roke-showcase-1.jpg',
  'vittesa_img_54_0_R_1024x768.jpg': 'roke-showcase-2.jpg',

  // Terra Speckle (Artisan Earth Series - Speckled Brown)
  'vittesa_raw_58_0_R_840x1191.png': 'terra-speckle-editorial-hero.png',
  'vittesa_raw_61_0_R_840x1191.png': 'terra-speckle-product-range-1.png',
  'vittesa_raw_64_0_R_840x1191.png': 'terra-speckle-product-range-2.png',

  // Additional Curated
  'vittesa_img_68_0_R_595x842.jpg': 'urbane-grey-editorial.jpg',
  'vittesa_img_71_0_R_595x842.jpg': 'urbane-grey-range-1.jpg',
  'vittesa_img_74_0_R_595x842.jpg': 'urbane-grey-lifestyle.jpg',
  'vittesa_img_77_0_R_595x842.jpg': 'urbane-grey-range-2.jpg',
  'vittesa_img_80_0_R_595x842.jpg': 'paradise-pink-editorial.jpg',
  'vittesa_img_83_0_R_595x842.jpg': 'paradise-pink-range-1.jpg',
  'vittesa_img_86_0_R_595x842.jpg': 'paradise-pink-lifestyle.jpg',
  'vittesa_img_89_0_R_595x842.jpg': 'paradise-pink-range-2.jpg',
  'vittesa_img_92_0_R_595x842.jpg': 'aqua-blue-editorial.jpg',
  'vittesa_img_95_0_R_595x842.jpg': 'aqua-blue-range-1.jpg',
  'vittesa_img_98_0_R_595x842.jpg': 'aqua-blue-lifestyle.jpg',
  'vittesa_img_101_0_R_595x842.jpg': 'aqua-blue-range-2.jpg',

  // Essential White (Classic White Porcelain)
  'vittesa_img_105_0_R_1489x2105.jpg': 'essential-white-platters-hero.jpg',
  'vittesa_raw_108_0_R_840x1191.png': 'essential-white-plates-range.png',
  'vittesa_img_112_0_R_1786x2526.jpg': 'essential-white-bowls-hero.jpg',
  'vittesa_raw_115_0_R_840x1191.png': 'essential-white-bowls-range.png',
  'vittesa_img_118_0_R_1786x2526.jpg': 'essential-white-cups-hero.jpg',
  'vittesa_raw_121_0_R_840x1191.png': 'essential-white-cups-range.png',
  'vittesa_img_124_0_R_1786x2526.jpg': 'essential-white-platter-hero.jpg',
  'vittesa_raw_127_0_R_840x1191.png': 'essential-white-platters-range.png'
};

for (const [srcName, destName] of Object.entries(assetMap)) {
  const pSrc = path.join(srcDir, srcName);
  const pDest = path.join(destDir, destName);
  if (fs.existsSync(pSrc)) {
    fs.copyFileSync(pSrc, pDest);
    console.log(`Copied: ${srcName} -> ${destName}`);
  } else {
    console.warn(`Source not found: ${srcName}`);
  }
}
console.log('Organizing assets complete!');
