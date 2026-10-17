'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { useModalStore } from '@/store/modalStore';

const COLLECTIONS = [
  { id: 'all', label: 'All Products (34)' },
  { id: 'olivera', label: 'OLIVERA (17)' },
  { id: 'ivory', label: 'IVORY (17)' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Types' },
  { id: 'plates', label: 'Plates' },
  { id: 'bowls', label: 'Bowls' },
  { id: 'platters', label: 'Platters' },
  { id: 'accessories', label: 'Accessories' },
];

export default function ShowroomPage() {
  const allProducts = getAllProducts();
  const [activeCollection, setActiveCollection] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const openEnquiryModal = useModalStore((state) => state.openEnquiryModal);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCollection =
        activeCollection === 'all' ||
        product.collectionId.toLowerCase() === activeCollection ||
        product.collection.toLowerCase() === activeCollection;

      const matchesCategory =
        activeCategory === 'all' || product.category.toLowerCase() === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.collection.toLowerCase().includes(q) ||
        product.dimensions.toLowerCase().includes(q) ||
        product.code.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q);

      return matchesCollection && matchesCategory && matchesSearch;
    });
  }, [allProducts, activeCollection, activeCategory, searchQuery]);

  return (
    <>
      {/* SHOWROOM PAGE HERO */}
      <header className="showroom-page-hero" style={{ padding: 'clamp(3rem, 5vw, 4rem) 0 1.5rem' }}>
        <div className="container">
          <div className="showroom-breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.8125rem' }}>
            <Link href="/" style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ margin: '0 0.5rem', color: 'var(--border-medium)' }}>/</span>
            <span style={{ color: 'var(--ink-primary)' }}>Products &amp; Showroom</span>
          </div>

          <div className="editorial-header-block" style={{ marginBottom: 0, maxWidth: 840 }}>
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Technical Catalogue Explorer
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', margin: '0.5rem 0 1rem' }}>
              PORCELAIN SHOWROOM
            </h1>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                color: 'var(--ink-secondary)',
                lineHeight: 1.6,
              }}
            >
              Filter across collections (OLIVERA &amp; IVORY) and tableware categories, search by piece name or dimensions, and examine specifications for our premium European porcelain.
            </p>
          </div>
        </div>
      </header>

      {/* PRODUCT CATALOGUE SHOWROOM & LIVE FILTERING */}
      <section className="showroom-section section-padding" id="showroom-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Showroom Filter Controls */}
          <div className="showroom-controls" style={{ marginBottom: '2.5rem' }}>
            {/* Collection Filter */}
            <div className="filter-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="filter-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-secondary)', fontWeight: 600 }}>
                Collection:
              </span>
              <div className="filter-buttons-group" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {COLLECTIONS.map((col) => (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => setActiveCollection(col.id)}
                    className={`filter-chip ${activeCollection === col.id ? 'active' : ''}`}
                    style={{
                      padding: '0.45rem 1rem',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      border: '1px solid var(--border-medium)',
                      background: activeCollection === col.id ? 'var(--ink-primary)' : 'transparent',
                      color: activeCollection === col.id ? '#FFF' : 'var(--ink-primary)',
                      cursor: 'pointer',
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      fontWeight: activeCollection === col.id ? 600 : 400,
                    }}
                  >
                    {col.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="filter-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <span className="filter-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-secondary)', fontWeight: 600 }}>
                Product Type:
              </span>
              <div className="filter-buttons-group" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
                    style={{
                      padding: '0.45rem 1rem',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      border: '1px solid var(--border-medium)',
                      background: activeCategory === cat.id ? 'var(--ink-primary)' : 'transparent',
                      color: activeCategory === cat.id ? '#FFF' : 'var(--ink-primary)',
                      cursor: 'pointer',
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search & Count Row */}
            <div
              className="showroom-search-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div className="search-input-wrap" style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
                <input
                  type="text"
                  id="showroom-search"
                  className="search-input"
                  placeholder="Search pieces by name, collection, code, or dimension..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    background: '#FFF',
                  }}
                />
              </div>
              <div id="showroom-results-count" className="results-counter" style={{ fontSize: '0.8125rem', color: 'var(--ink-secondary)' }}>
                Showing {filteredProducts.length} of {allProducts.length} pieces
              </div>
            </div>
          </div>

          {/* Showroom Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--ink-secondary)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No pieces match your search criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCollection('all');
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="btn-primary"
                style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="showroom-grid products-grid-catalog olivera-cards-grid" id="showroom-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SHOWROOM BOTTOM B2B SPECIFICATION CALLOUT */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--bg-porcelain-alt)',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            className="b2b-cta-banner"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div className="b2b-cta-text" style={{ maxWidth: 640 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                PROJECT SPECIFICATION &amp; SAMPLES
              </h3>
              <p style={{ color: 'var(--ink-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Ready to compile your tableware program? Request official factory datasheets, trade pricing, or physical sample boxes across OLIVERA and IVORY.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="btn-primary"
                onClick={() => openEnquiryModal('Showroom Tableware Specification Request')}
                style={{ padding: '0.9rem 2rem' }}
              >
                Enquire for Specifications / Samples →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
