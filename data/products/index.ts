import { Product } from '@/types/product';
import { OLIVERA_PRODUCTS } from './olivera';
import { IVORY_PRODUCTS } from './ivory';

export { OLIVERA_PRODUCTS } from './olivera';
export { IVORY_PRODUCTS } from './ivory';

// Active catalog contains verified OLIVERA & IVORY collections (17 + 17 = 34 verified products)
export const ALL_PRODUCTS: Product[] = [...OLIVERA_PRODUCTS, ...IVORY_PRODUCTS];

export function getAllProducts(): Product[] {
  return ALL_PRODUCTS;
}

export function getProductById(id: string, collectionId?: string): Product | undefined {
  if (!id) return undefined;
  const cleanId = id.toLowerCase().trim();

  if (collectionId) {
    const colSlug = collectionId.toLowerCase().trim();
    const matchInCol = ALL_PRODUCTS.find(
      p =>
        (p.collectionId.toLowerCase() === colSlug || p.collection.toLowerCase() === colSlug) &&
        (p.id.toLowerCase() === cleanId ||
          p.code.toLowerCase() === cleanId ||
          (p.slug && p.slug.toLowerCase() === cleanId))
    );
    if (matchInCol) return matchInCol;
  }

  return ALL_PRODUCTS.find(
    p =>
      p.id.toLowerCase() === cleanId ||
      p.code.toLowerCase() === cleanId ||
      (p.slug && p.slug.toLowerCase() === cleanId)
  );
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  if (!collectionSlug || collectionSlug === 'all') return ALL_PRODUCTS;
  const slug = collectionSlug.toLowerCase().trim();
  return ALL_PRODUCTS.filter(
    p => p.collectionId.toLowerCase() === slug || p.collection.toLowerCase() === slug
  );
}

export function getProductsByCategory(category: string, collectionSlug?: string): Product[] {
  let products = ALL_PRODUCTS;
  if (collectionSlug && collectionSlug !== 'all') {
    products = getProductsByCollection(collectionSlug);
  }
  if (!category || category === 'all') return products;
  const cat = category.toLowerCase().trim();
  return products.filter(p => p.category.toLowerCase() === cat);
}

export function getFeaturedProducts(limit = 8): Product[] {
  // Curated showcase featuring pieces from both Olivera & Ivory
  const featuredIds = [
    'ase07103', // Olivera Dinner Plate
    'asei7103', // Ivory Dinner Plate
    'ase07109', // Olivera Deep Coupe
    'asei7114', // Ivory Edge Plate Big
    'ase07122', // Olivera Serving Bowl 19 cm
    'asei7122', // Ivory Serving Bowl 19 cm
    'ase07153', // Olivera Platter Small
    'asei7134', // Ivory Creamer
  ];

  const featured = featuredIds
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);

  if (featured.length < limit) {
    const remaining = ALL_PRODUCTS.filter(p => !featuredIds.includes(p.id));
    return [...featured, ...remaining].slice(0, limit);
  }

  return featured.slice(0, limit);
}
