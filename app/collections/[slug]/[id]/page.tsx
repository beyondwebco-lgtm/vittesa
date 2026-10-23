import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllProducts, getProductById, getProductsByCollection } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

interface CleanProductPageProps {
  params: Promise<{ slug: string; id: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  const params: { slug: string; id: string }[] = [];

  for (const p of products) {
    const colSlug =
      p.collectionId ||
      (p.collection.toLowerCase() === 'ivory' || p.collection.toLowerCase() === 'ivora'
        ? 'ivora'
        : p.collection.toLowerCase().replace(/\s+/g, '-'));

    params.push({
      slug: colSlug,
      id: p.id,
    });
    if (p.slug) {
      params.push({
        slug: colSlug,
        id: p.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: CleanProductPageProps): Promise<Metadata> {
  const { slug, id } = await params;
  const product = getProductById(id, slug);

  if (!product) {
    return {
      title: 'Product Not Found | VITTESA Porcelain',
    };
  }

  return {
    title: `${product.name} — ${product.collection} | VITTESA Porcelain`,
    description:
      product.editorialCaption ||
      `Authentic hospitality porcelain specifications for ${product.name} from VITTESA ${product.collection} collection.`,
  };
}

export default async function CleanProductPage({ params }: CleanProductPageProps) {
  const { slug, id } = await params;
  const product = getProductById(id, slug);

  if (!product) {
    notFound();
  }

  const collectionProducts = getProductsByCollection(slug);
  const relatedProducts = collectionProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
