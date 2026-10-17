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
  },
  {
    id: "ivory",
    number: "02",
    layer: "TIMELESS PORCELAIN",
    layerNumber: "02",
    name: "IVORY",
    series: "Timeless Ivory Series",
    tagline: "Warm ivory tones. Refined silhouettes. Pure culinary clarity.",
    shortDescriptor: "Timeless ivory-toned porcelain for refined dining experiences.",
    badge: "Timeless Ivory Series",
    category: "Timeless Ivory Series",
    piecesCount: 17,
    heroImage: "/assets/catalogue/ivory-editorial-hero.png",
    rangeImage: "/assets/catalogue/ivory/dinner plate main.png",
    galleryImages: [
      "/assets/catalogue/ivory-editorial-hero.png",
      "/assets/catalogue/ivory/platters main.png",
      "/assets/catalogue/ivory/edge plate big main.png"
    ],
    description: "Timeless ivory-toned porcelain with refined silhouettes, designed for elegant dining and contemporary hospitality.",
    url: "/collections/ivory/"
  }
];

export function getCollections(): Collection[] {
  return COLLECTIONS;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  if (!slug) return undefined;
  return COLLECTIONS.find(c => c.id.toLowerCase() === slug.toLowerCase() || c.name.toLowerCase() === slug.toLowerCase());
}
