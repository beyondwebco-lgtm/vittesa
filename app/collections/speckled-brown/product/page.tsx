'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getProductById, getProductsByCollection } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

function SpeckledBrownProductContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id') || searchParams.get('slug') || 'assb5101';

  const product =
    getProductById(productId, 'speckled-brown') || getProductById('assb5101', 'speckled-brown');

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p style={{ marginTop: '1rem', color: 'var(--ink-secondary)' }}>
          The requested product could not be located in the SPECKLED BROWN collection.
        </p>
        <Link href="/collections/speckled-brown" className="btn-primary" style={{ marginTop: '2rem' }}>
          Back to SPECKLED BROWN Collection
        </Link>
      </div>
    );
  }

  const relatedProducts = getProductsByCollection('speckled-brown')
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}

export default function SpeckledBrownProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <p>Loading product details...</p>
        </div>
      }
    >
      <SpeckledBrownProductContent />
    </Suspense>
  );
}
