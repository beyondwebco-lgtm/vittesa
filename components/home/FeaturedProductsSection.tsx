import React from 'react';
import Link from 'next/link';
import { getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export const FeaturedProductsSection: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="olivera-catalogue-section section-padding" id="products">
      <div className="container">
        <div
          className="editorial-header-block"
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto clamp(2rem, 4vw, 3rem)',
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
            Selected for Your Table
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.75rem)', margin: '0.5rem 0 0.75rem' }}>
            Selected for Your Table
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Explore selected pieces from the OLIVERA and IVORA porcelain collections.
          </p>
        </div>

        {/* Curated Showcase Grid */}
        <div className="products-grid-catalog olivera-cards-grid" id="collection-products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products CTA */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <Link
            href="/showroom"
            className="btn-primary"
            style={{ padding: '0.95rem 2.5rem', fontSize: '0.8125rem' }}
          >
            VIEW ALL PRODUCTS (34 PIECES) →
          </Link>
        </div>
      </div>
    </section>
  );
};
