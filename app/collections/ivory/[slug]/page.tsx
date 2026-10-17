import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById, getProductsByCollection } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

export async function generateStaticParams() {
  const ivoryProducts = getProductsByCollection('ivory');
  const params: { slug: string }[] = [];

  for (const p of ivoryProducts) {
    if (p.slug) {
      params.push({ slug: p.slug });
    }
    params.push({ slug: p.id });
  }

  return params;
}

export default async function IvoryProductSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductById(slug, 'ivory');

  if (!product) {
    return notFound();
  }

  return <ProductDetailView product={product} />;
}
