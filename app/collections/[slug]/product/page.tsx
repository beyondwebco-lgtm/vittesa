import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductById, getProductsByCollection } from '@/data/products';
import { getCollectionBySlug } from '@/data/collections';
import { ProductDetailView } from '@/components/product/ProductDetailView';

interface PDPQueryProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ id?: string; product?: string; slug?: string }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: PDPQueryProps): Promise<Metadata> {
  const { slug } = await params;
  const { id, product: queryProd, slug: querySlug } = await searchParams;
  const sLower = slug.toLowerCase().replace(/[\s_-]+/g, '');
  const defaultId =
    sLower === 'ivora' || sLower === 'ivory'
      ? 'asei7103'
      : sLower === 'speckledbrown' || sLower === 'terraspeckle'
      ? 'assb5101'
      : 'ase07103';
  const targetId = id || queryProd || querySlug || defaultId;

  const product = getProductById(targetId, slug);
  const collection = getCollectionBySlug(slug);

  if (!product) {
    return {
      title: `${collection?.name || 'VITTESA'} Product | VITTESA Porcelain`,
    };
  }

  return {
    title: `${product.name} — ${product.collection} | VITTESA Porcelain`,
    description:
      product.editorialCaption ||
      `Authentic European hospitality porcelain specifications for ${product.name} from VITTESA ${product.collection} collection.`,
  };
}

export default async function ProductQueryPage({ params, searchParams }: PDPQueryProps) {
  const { slug } = await params;
  const { id, product: queryProd, slug: querySlug } = await searchParams;
  const sLower = slug.toLowerCase().replace(/[\s_-]+/g, '');
  const defaultId =
    sLower === 'ivora' || sLower === 'ivory'
      ? 'asei7103'
      : sLower === 'speckledbrown' || sLower === 'terraspeckle'
      ? 'assb5101'
      : 'ase07103';
  const targetId = id || queryProd || querySlug || defaultId;

  let product = getProductById(targetId, slug);
  const collectionProducts = getProductsByCollection(slug);

  if (!product && collectionProducts.length > 0) {
    product = collectionProducts[0];
  }

  if (!product) {
    notFound();
  }

  const relatedProducts = collectionProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
