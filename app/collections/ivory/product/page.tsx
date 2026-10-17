'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getProductById } from '@/data/products';
import { ProductDetailView } from '@/components/product/ProductDetailView';

function IvoryProductContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id') || searchParams.get('slug') || 'asei7103';

  const product = getProductById(productId, 'ivory') || getProductById('asei7103', 'ivory');

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p style={{ marginTop: '1rem', color: 'var(--ink-secondary)' }}>
          The requested product could not be located in the IVORY collection.
        </p>
        <Link href="/collections/ivory" className="btn-primary" style={{ marginTop: '2rem' }}>
          Back to IVORY Collection
        </Link>
      </div>
    );
  }

  return <ProductDetailView product={product} />;
}

export default function IvoryProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <p>Loading product details...</p>
        </div>
      }
    >
      <IvoryProductContent />
    </Suspense>
  );
}
