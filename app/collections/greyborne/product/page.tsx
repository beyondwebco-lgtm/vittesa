'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getProductById, getProductsByCollection } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

function GreyborneProductContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id') || searchParams.get('slug') || 'asgb5101';

  const product =
    getProductById(productId, 'greyborne') || getProductById('asgb5101', 'greyborne');

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p style={{ marginTop: '1rem', color: 'var(--ink-secondary)' }}>
          The requested product could not be located in the GREYBORNE collection.
        </p>
        <Link href="/collections/greyborne" className="btn-primary" style={{ marginTop: '2rem' }}>
          Back to GREYBORNE Collection
        </Link>
      </div>
    );
  }

  const relatedProducts = getProductsByCollection('greyborne')
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}

export default function GreyborneProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <p>Loading product details...</p>
        </div>
      }
    >
      <GreyborneProductContent />
    </Suspense>
  );
}
