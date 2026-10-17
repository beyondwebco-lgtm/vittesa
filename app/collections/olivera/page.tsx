'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

const CATEGORIES = [
  { id: 'all', label: 'All Pieces', count: 17 },
  { id: 'plates', label: 'Plates', count: 6 },
  { id: 'bowls', label: 'Bowls', count: 7 },
  { id: 'platters', label: 'Platters', count: 2 },
  { id: 'accessories', label: 'Accessories', count: 2 },
];

export default function OliveraCollectionPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const allProducts = getAllProducts();

  const filteredProducts =
    activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category.toLowerCase() === activeCategory);

  return (
    <>
      {/* 2. COMPACT COLLECTION HEADING & EDITORIAL IMAGE */}
      <section className="olivera-intro-section" style={{ padding: 'clamp(2rem, 4vw, 3.5rem) 0 1rem' }}>
        <div className="container text-center">
          <span className="collection-intro-label">VITTESA · PORCELAIN MAISON</span>
          <h1 className="collection-intro-title" style={{ margin: '0.25rem 0 0.5rem', letterSpacing: '0.08em' }}>
            OLIVERA
          </h1>
          <p
            className="collection-intro-desc"
            style={{
              maxWidth: 580,
              margin: '0 auto clamp(1.5rem, 3vw, 2.5rem)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.6,
              color: 'var(--ink-secondary)',
            }}
          >
            Softly muted olive-grey porcelain with rounded, organic silhouettes.
          </p>

          <div
            className="olivera-hero-media"
            style={{
              maxWidth: 1040,
              margin: '0 auto',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/catalogue/olivera-editorial-hero.jpg"
              alt="OLIVERA Porcelain Tableware Collection"
              className="olivera-hero-img"
              loading="eager"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOGUE — MAIN FOCUS (17 PIECES) */}
      <section className="olivera-catalogue-section section-padding" id="products">
        <div className="container">
          {/* Category Filter Pills */}
          <div
            className="collection-filter-bar"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border-medium)',
                  background: activeCategory === cat.id ? 'var(--ink-primary)' : 'transparent',
                  color: activeCategory === cat.id ? '#FFF' : 'var(--ink-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  borderRadius: 2,
                }}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="products-grid-catalog olivera-cards-grid" id="collection-products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BULK AND WHOLESALE ENQUIRY BANNER */}
      <section className="bulk-banner-section" id="bulk-banner">
        <div className="container">
          <div className="bulk-banner-card">
            <div className="bulk-banner-content">
              <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
                Trade &amp; Hospitality
              </span>
              <h2 className="bulk-banner-title">Looking for Bulk or Wholesale Orders?</h2>
              <p className="bulk-banner-desc">
                Contact VITTESA to discuss product requirements, quantities, and available shipping options.
              </p>
            </div>
            <div className="bulk-banner-cta">
              <Link href="/#contact" className="btn-primary bulk-banner-btn">
                ENQUIRE ABOUT BULK ORDERS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
