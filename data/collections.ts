import { Collection } from '@/types/product';

export const COLLECTIONS: Collection[] = [
  {
    id: "olivera",
    number: "01",
    layer: "NATURAL EARTH",
    layerNumber: "01",
    name: "OLIVERA",
    series: "Natural Earth Series",
    tagline: "Soft olive tones. Organic forms. Effortless elegance.",
    shortDescriptor: "Softly muted olive earth & rounded organic silhouettes.",
    badge: "Natural Earth Series",
    category: "Natural Earth Series",
    piecesCount: 17,
    heroImage: "/assets/catalogue/olivera-editorial-hero.jpg",
    rangeImage: "/assets/catalogue/olivera-product-range.png",
    galleryImages: [
      "/assets/catalogue/olivera-editorial-hero.jpg",
      "/assets/catalogue/olivera/olivera-showcase-tabletop.jpeg",
      "/assets/catalogue/olivera/olivera-showcase-bowls.jpeg"
    ],
    description: "Softly muted olive-grey porcelain with rounded, organic silhouettes crafted for contemporary dining.",
    url: "/collections/olivera/"
  }
];

export function getCollections(): Collection[] {
  return COLLECTIONS;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find(c => c.id.toLowerCase() === slug.toLowerCase());
}
