'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/product/ProductCard';
import { useModalStore } from '@/store/modalStore';

interface ShowroomExplorerProps {
  products: Product[];
}

export const ShowroomExplorer: React.FC<ShowroomExplorerProps> = ({ products }) => {
  const [activeCollection, setActiveCollection] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const openEnquiryModal = useModalStore((state) => state.openEnquiryModal);

  // Products filtered by collection first to compute category counts
  const collectionScopedProducts = useMemo(() => {
    if (activeCollection === 'all') return products;
    const aCol = activeCollection.toLowerCase().replace(/[\s_-]+/g, '');
    return products.filter((p) => {
      const pCol = p.collection.toLowerCase().replace(/[\s_-]+/g, '');
      if (pCol === aCol) return true;
      if ((pCol === 'ivora' || pCol === 'ivory') && (aCol === 'ivora' || aCol === 'ivory')) return true;
      if (
        (pCol === 'speckledbrown' || pCol === 'terraspeckle') &&
        (aCol === 'speckledbrown' || aCol === 'terraspeckle')
      ) {
        return true;
      }
      return false;
    });
  }, [products, activeCollection]);

  const categories = useMemo(() => {
    const counts: Record<string, number> = {
      all: collectionScopedProducts.length,
      plates: 0,
      bowls: 0,
      platters: 0,
      cups: 0,
      accessories: 0,
    };

    collectionScopedProducts.forEach((p) => {
      const cat = p.category.toLowerCase();
      if (counts[cat] !== undefined) {
        counts[cat]++;
      } else {
        counts[cat] = 1;
      }
    });

    return [
      { key: 'all', label: `All Types (${counts.all || 0})` },
      { key: 'plates', label: `Plates (${counts.plates || 0})` },
      { key: 'bowls', label: `Bowls (${counts.bowls || 0})` },
      { key: 'platters', label: `Platters (${counts.platters || 0})` },
      { key: 'cups', label: `Cups & Beverage (${counts.cups || 0})` },
      { key: 'accessories', label: `Accessories (${counts.accessories || 0})` },
    ];
  }, [collectionScopedProducts]);

  const filteredProducts = useMemo(() => {
    const aCol = activeCollection.toLowerCase().replace(/[\s_-]+/g, '');
    return products.filter((p) => {
      // 1. Collection Filter
      const pCol = p.collection.toLowerCase().replace(/[\s_-]+/g, '');
      const matchesCollection =
        activeCollection === 'all' ||
        pCol === aCol ||
        ((pCol === 'ivora' || pCol === 'ivory') && (aCol === 'ivora' || aCol === 'ivory')) ||
        ((pCol === 'speckledbrown' || pCol === 'terraspeckle') &&
          (aCol === 'speckledbrown' || aCol === 'terraspeckle'));

      // 2. Category Filter
      const matchesCategory =
        activeCategory === 'all' || p.category.toLowerCase() === activeCategory.toLowerCase();

      // 3. Search Filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        (p.dimensions && p.dimensions.toLowerCase().includes(query)) ||
        (p.code && p.code.toLowerCase().includes(query)) ||
        p.collection.toLowerCase().includes(query);

      return matchesCollection && matchesCategory && matchesSearch;
    });
  }, [products, activeCollection, activeCategory, searchQuery]);

  const collectionCounts = useMemo(() => {
    let olivera = 0;
    let ivora = 0;
    let speckledBrown = 0;
    products.forEach((p) => {
      const c = p.collection.toLowerCase().replace(/[\s_-]+/g, '');
      if (c === 'olivera') olivera++;
      else if (c === 'ivora' || c === 'ivory') ivora++;
      else if (c === 'speckledbrown' || c === 'terraspeckle') speckledBrown++;
    });
    return { olivera, ivora, speckledBrown };
  }, [products]);

  return (
    <>
      <section className="showroom-section section-padding" id="showroom-section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          {/* Showroom Controls */}
          <div className="showroom-controls">
            {/* 1. Collection Filter Pills */}
            <div className="filter-row" style={{ marginBottom: '1.25rem' }}>
              <span className="filter-label">Collection</span>
              <div className="filter-buttons-group">
                <button
                  type="button"
                  className={`filter-chip ${activeCollection === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCollection('all')}
                >
                  All Products ({products.length})
                </button>
                <button
                  type="button"
                  className={`filter-chip ${activeCollection === 'olivera' ? 'active' : ''}`}
                  onClick={() => setActiveCollection('olivera')}
                >
                  OLIVERA ({collectionCounts.olivera})
                </button>
                <button
                  type="button"
                  className={`filter-chip ${activeCollection === 'ivora' || activeCollection === 'ivory' ? 'active' : ''}`}
                  onClick={() => setActiveCollection('ivora')}
                >
                  IVORA ({collectionCounts.ivora})
                </button>
                <button
                  type="button"
                  className={`filter-chip ${activeCollection === 'speckled-brown' ? 'active' : ''}`}
                  onClick={() => setActiveCollection('speckled-brown')}
                >
                  SPECKLED BROWN ({collectionCounts.speckledBrown})
                </button>
              </div>
            </div>

            {/* 2. Category Filter Pills */}
            <div className="filter-row">
              <span className="filter-label">Product Type</span>
              <div className="filter-buttons-group">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    className={`filter-chip ${activeCategory === cat.key ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Search & Count Row */}
            <div className="showroom-search-row">
              <div className="search-input-wrap">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  id="showroom-search"
                  className="search-input"
                  placeholder="Search pieces by name, dimensions, or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div id="showroom-results-count" className="results-counter">
                Showing {filteredProducts.length} catalogue pieces
              </div>
            </div>
          </div>

          {/* Showroom Cards Grid */}
          <div className="showroom-grid products-grid-catalog olivera-cards-grid" id="showroom-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--ink-secondary)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                No pieces match your search criteria.
              </p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setActiveCollection('all');
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                style={{
                  border: '1px solid var(--border-medium)',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  background: 'transparent',
                }}
              >
                Reset Filters
              </button>
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
          <div className="b2b-cta-banner" style={{ marginTop: 0 }}>
            <div className="b2b-cta-text">
              <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
                Bespoke Procurement
              </span>
              <h2>Need Samples or Technical Schedules for a Hospitality Project?</h2>
              <p>
                Our commercial specialists assist architects, interior designers, and hospitality
                operators with physical sample sets, quotation schedules, and international logistics.
              </p>
            </div>
            <div className="b2b-cta-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() =>
                  openEnquiryModal('Showroom Procurement', 'Hospitality project specification enquiry:\n')
                }
              >
                REQUEST PROJECT CONSULTATION
              </button>
              <Link
                href="/documents/vittesa-catalogue.pdf"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD FULL CATALOGUE (PDF)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
