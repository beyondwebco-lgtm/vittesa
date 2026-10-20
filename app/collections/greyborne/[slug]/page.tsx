import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductById, getProductsByCollection } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

interface GreyborneProductSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const greyborneProducts = getProductsByCollection('greyborne');
  const params: { slug: string }[] = [];

  for (const p of greyborneProducts) {
    if (p.slug) {
      params.push({ slug: p.slug });
    }
    params.push({ slug: p.id });
  }

  return params;
}

export async function generateMetadata({ params }: GreyborneProductSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug, 'greyborne');

  if (!product) {
    return {
      title: 'GREYBORNE Product | VITTESA Porcelain Maison',
    };
  }

  return {
    title: `${product.name} — GREYBORNE | VITTESA Porcelain Maison`,
    description:
      product.editorialCaption ||
      `Refined stoneware specifications for ${product.name} (${product.dimensions}) from VITTESA GREYBORNE collection.`,
  };
}

export default async function GreyborneProductSlugPage({ params }: GreyborneProductSlugPageProps) {
  const { slug } = await params;
  const product = getProductById(slug, 'greyborne');

  if (!product) {
    return notFound();
  }

  const relatedProducts = getProductsByCollection('greyborne')
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
