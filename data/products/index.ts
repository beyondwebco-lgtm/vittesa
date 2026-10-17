import { Product } from '@/types/product';
import { OLIVERA_PRODUCTS } from './olivera';

// Active catalog contains verified OLIVERA products
export const ALL_PRODUCTS: Product[] = [...OLIVERA_PRODUCTS];

export function getAllProducts(): Product[] {
  return ALL_PRODUCTS;
}

export function getProductById(id: string): Product | undefined {
  if (!id) return undefined;
  const cleanId = id.toLowerCase().trim();
  return ALL_PRODUCTS.find(p => p.id.toLowerCase() === cleanId || p.code.toLowerCase() === cleanId);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  if (!collectionSlug) return ALL_PRODUCTS;
  const slug = collectionSlug.toLowerCase().trim();
  return ALL_PRODUCTS.filter(p => p.collectionId.toLowerCase() === slug || p.collection.toLowerCase() === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === 'all') return ALL_PRODUCTS;
  const cat = category.toLowerCase().trim();
  return ALL_PRODUCTS.filter(p => p.category.toLowerCase() === cat);
}

export function getFeaturedProducts(limit = 8): Product[] {
  // Return the curated 8 products specified for the homepage showcase
  const featuredIds = [
    'ase07103', // Dinner Plate
    'ase07101', // Salad Plate
    'ase07109', // Deep Coupe
    'ase07114', // Edge Plate Big
    'ase07122', // Serving Bowl 19 cm
    'ase07163', // Katori Bowl
    'ase07134', // Creamer
    'ase07153', // Platter Small
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
