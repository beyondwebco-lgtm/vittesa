import { Product } from '@/types/product';
import { OLIVERA_PRODUCTS } from './olivera';
import { IVORA_PRODUCTS } from './ivora';
import { SPECKLED_BROWN_PRODUCTS } from './speckled-brown';
import { GREYBORNE_PRODUCTS } from './greyborne';

export { OLIVERA_PRODUCTS } from './olivera';
export { IVORA_PRODUCTS } from './ivora';
export { IVORY_PRODUCTS } from './ivory';
export { SPECKLED_BROWN_PRODUCTS } from './speckled-brown';
export { GREYBORNE_PRODUCTS } from './greyborne';

// Active catalog contains verified OLIVERA, IVORA, SPECKLED BROWN & GREYBORNE collections (17 + 17 + 17 + 25 = 76 verified products)
export const ALL_PRODUCTS: Product[] = [
  ...OLIVERA_PRODUCTS,
  ...IVORA_PRODUCTS,
  ...SPECKLED_BROWN_PRODUCTS,
  ...GREYBORNE_PRODUCTS,
];

export function getAllProducts(): Product[] {
  return ALL_PRODUCTS;
}

function matchesCollection(col: string, target: string): boolean {
  const c = col.toLowerCase().trim().replace(/[\s_-]+/g, '');
  const t = target.toLowerCase().trim().replace(/[\s_-]+/g, '');
  if (c === t) return true;
  if ((c === 'ivora' || c === 'ivory') && (t === 'ivora' || t === 'ivory')) return true;
  if (
    (c === 'speckledbrown' || c === 'terraspeckle') &&
    (t === 'speckledbrown' || t === 'terraspeckle')
  ) {
    return true;
  }
  if (
    (c === 'greyborne' || c === 'urbanegrey' || c === 'thegreybornecollection') &&
    (t === 'greyborne' || t === 'urbanegrey' || t === 'thegreybornecollection')
  ) {
    return true;
  }
  return false;
}

export function getProductById(id: string, collectionId?: string): Product | undefined {
  if (!id) return undefined;
  const cleanId = id.toLowerCase().trim();

  if (collectionId) {
    const matchInCol = ALL_PRODUCTS.find(
      (p) =>
        (matchesCollection(p.collectionId, collectionId) ||
          matchesCollection(p.collection, collectionId)) &&
        (p.id.toLowerCase() === cleanId ||
          p.code.toLowerCase() === cleanId ||
          (p.slug && p.slug.toLowerCase() === cleanId))
    );
    if (matchInCol) return matchInCol;
  }

  return ALL_PRODUCTS.find(
    (p) =>
      p.id.toLowerCase() === cleanId ||
      p.code.toLowerCase() === cleanId ||
      (p.slug && p.slug.toLowerCase() === cleanId)
  );
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  if (!collectionSlug || collectionSlug === 'all') return ALL_PRODUCTS;
  return ALL_PRODUCTS.filter(
    (p) =>
      matchesCollection(p.collectionId, collectionSlug) ||
      matchesCollection(p.collection, collectionSlug)
  );
}

export function getProductsByCategory(category: string, collectionSlug?: string): Product[] {
  let products = ALL_PRODUCTS;
  if (collectionSlug && collectionSlug !== 'all') {
    products = getProductsByCollection(collectionSlug);
  }
  if (!category || category === 'all') return products;
  const cat = category.toLowerCase().trim();
  return products.filter((p) => p.category.toLowerCase() === cat);
}

export function getFeaturedProducts(limit = 8): Product[] {
  // Curated showcase featuring pieces across Olivera, Ivora & Speckled Brown
  const featuredIds = [
    'ase07103', // Olivera Dinner Plate
    'asei7103', // Ivora Dinner Plate
    'assb5104', // Speckled Brown Flat Plate 30 cm
    'ase07109', // Olivera Deep Coupe
    'asei7114', // Ivora Edge Plate Big
    'assb5109', // Speckled Brown Deep Coupe 22.5 cm
    'ase07122', // Olivera Serving Bowl 19 cm
    'assb5131', // Speckled Brown Barrel Mug 350 ml
  ];

  const featured = featuredIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);

  if (featured.length < limit) {
    const remaining = ALL_PRODUCTS.filter((p) => !featuredIds.includes(p.id));
    return [...featured, ...remaining].slice(0, limit);
  }

  return featured.slice(0, limit);
}

