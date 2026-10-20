import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductById, getProductsByCollection } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

interface SpeckledBrownProductSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const speckledBrownProducts = getProductsByCollection('speckled-brown');
  const params: { slug: string }[] = [];

  for (const p of speckledBrownProducts) {
    if (p.slug) {
      params.push({ slug: p.slug });
    }
    params.push({ slug: p.id });
  }

  return params;
}

export async function generateMetadata({ params }: SpeckledBrownProductSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug, 'speckled-brown');

  if (!product) {
    return {
      title: 'SPECKLED BROWN Product | VITTESA Porcelain Maison',
    };
  }

  return {
    title: `${product.name} — SPECKLED BROWN | VITTESA Porcelain Maison`,
    description:
      product.editorialCaption ||
      `Artisan stoneware specifications for ${product.name} (${product.dimensions}) from VITTESA SPECKLED BROWN collection.`,
  };
}

export default async function SpeckledBrownProductSlugPage({ params }: SpeckledBrownProductSlugPageProps) {
  const { slug } = await params;
  const product = getProductById(slug, 'speckled-brown');

  if (!product) {
    return notFound();
  }

  const relatedProducts = getProductsByCollection('speckled-brown')
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
