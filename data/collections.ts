import { Collection } from '@/types/product';

export const COLLECTIONS: Collection[] = [
  {
    id: "olivera",
    slug: "olivera",
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
    itemCount: 17,
    heroImage: "/assets/catalogue/olivera-editorial-hero.jpg",
    editorialImage: "/assets/catalogue/olivera-editorial-hero.jpg",
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
    id: "ivora",
    slug: "ivora",
    number: "02",
    layer: "TIMELESS PORCELAIN",
    layerNumber: "02",
    name: "IVORA",
    series: "Timeless Ivora Series",
    tagline: "Warm ivora tones. Refined silhouettes. Pure culinary clarity.",
    shortDescriptor: "Timeless ivora-toned porcelain for refined dining experiences.",
    badge: "Timeless Ivora Series",
    category: "Timeless Ivora Series",
    piecesCount: 17,
    itemCount: 17,
    heroImage: "/assets/catalogue/ivora-editorial-hero.png",
    editorialImage: "/assets/catalogue/ivora-editorial-hero.png",
    rangeImage: "/assets/catalogue/ivora/dinner plate main.png",
    galleryImages: [
      "/assets/catalogue/ivora-editorial-hero.png",
      "/assets/catalogue/ivora/platters main.png",
      "/assets/catalogue/ivora/edge plate big main.png"
    ],
    description: "Timeless ivora-toned porcelain with refined silhouettes, designed for elegant dining and contemporary hospitality.",
    url: "/collections/ivora/"
  },
  {
    id: "speckled-brown",
    slug: "speckled-brown",
    number: "03",
    layer: "ARTISAN STONEWARE",
    layerNumber: "03",
    name: "SPECKLED BROWN",
    series: "Artisan Earth Series",
    tagline: "Organic speckling. Tactile warmth. Timeless stoneware character.",
    shortDescriptor: "Artisan speckled brown stoneware crafted for rustic warmth and contemporary dining.",
    badge: "Artisan Earth Series",
    category: "Artisan Earth Series",
    piecesCount: 17,
    itemCount: 17,
    heroImage: "/assets/catalogue/speckled-brown-editorial-hero.png",
    editorialImage: "/assets/catalogue/speckled-brown-editorial-hero.png",
    rangeImage: "/assets/catalogue/speckled-brown/Flat Plate 30 CM - Lifestyle.png",
    galleryImages: [
      "/assets/catalogue/speckled-brown-editorial-hero.png",
      "/assets/catalogue/speckled-brown/Flat Plate 30 CM - Lifestyle.png",
      "/assets/catalogue/speckled-brown/Pasta Plate 27 CM - Lifestyle.png"
    ],
    description: "Artisan speckled brown vitrified stoneware featuring natural mineral flecks, organic silhouettes, and rich tactile warmth.",
    url: "/collections/speckled-brown/"
  }
];

export function getCollections(): Collection[] {
  return COLLECTIONS;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  if (!slug) return undefined;
  const s = slug.toLowerCase().trim().replace(/[\s_-]+/g, '');
  if (s === 'ivory' || s === 'ivora') {
    return COLLECTIONS.find(c => c.id === 'ivora');
  }
  if (s === 'speckledbrown' || s === 'terraspeckle') {
    return COLLECTIONS.find(c => c.id === 'speckled-brown');
  }
  return COLLECTIONS.find(
    c =>
      c.id.toLowerCase().replace(/[\s_-]+/g, '') === s ||
      c.name.toLowerCase().replace(/[\s_-]+/g, '') === s
  );
}

