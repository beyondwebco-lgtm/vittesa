import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductById, getProductsByCollection } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

interface IvoraProductSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const ivoraProducts = getProductsByCollection('ivora');
  const params: { slug: string }[] = [];

  for (const p of ivoraProducts) {
    if (p.slug) {
      params.push({ slug: p.slug });
    }
    params.push({ slug: p.id });
  }

  return params;
}

export async function generateMetadata({ params }: IvoraProductSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug, 'ivora');

  if (!product) {
    return {
      title: 'IVORA Product | VITTESA Porcelain Maison',
    };
  }

  return {
    title: `${product.name} — IVORA | VITTESA Porcelain Maison`,
    description:
      product.editorialCaption ||
      `Timeless ivora porcelain specifications for ${product.name} (${product.dimensions}) from VITTESA IVORA collection.`,
  };
}

export default async function IvoraProductSlugPage({ params }: IvoraProductSlugPageProps) {
  const { slug } = await params;
  const product = getProductById(slug, 'ivora');

  if (!product) {
    return notFound();
  }

  const relatedProducts = getProductsByCollection('ivora')
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
