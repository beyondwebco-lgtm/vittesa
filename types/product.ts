/**
 * VITTESA — TypeScript Type Definitions
 */

export interface ProductSpecs {
  diameter?: string;
  height?: string;
  capacity?: string;
  dimensions?: string;
  finish?: string;
  series?: string;
  durability?: string;
  [key: string]: string | undefined;
}

export type ProductCategory = 'all' | 'plates' | 'bowls' | 'platters' | 'accessories' | 'cups';

export interface Product {
  id: string;
  slug?: string;
  code: string;
  productCode: string;
  name: string;
  collection: string;
  collectionId: string;
  category: string;
  categoryLabel: string;
  colors: string[];
  colorHexes: string[];
  dimensions: string;
  specs: ProductSpecs;
  images: string[];
  image: string;
  editorialCaption?: string;
}

export interface Collection {
  id: string;
  number: string;
  layer: string;
  layerNumber: string;
  name: string;
  series: string;
  tagline: string;
  shortDescriptor: string;
  badge: string;
  category: string;
  piecesCount: number;
  heroImage: string;
  rangeImage: string;
  galleryImages: string[];
  description: string;
  url: string;
}

export interface TrayItem {
  id: string;
  code: string;
  name: string;
  collection: string;
  dimensions: string;
  image: string;
  quantity?: number;
}

export interface CategoryOption {
  id: string;
  label: string;
  count?: number;
}
