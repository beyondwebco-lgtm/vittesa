'use client';

import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getProductById, getAllProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { useModalStore } from '@/store/modalStore';
import { useTrayStore } from '@/store/trayStore';

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id') || 'ase07103';

  const product = getProductById(productId) || getProductById('ase07103');
  const allProducts = getAllProducts();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sync state if product changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [productId]);

  const openEnquiryModal = useModalStore((state) => state.openEnquiryModal);
  const { addToTray, hasItem, openTray } = useTrayStore();

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p style={{ marginTop: '1rem', color: 'var(--ink-secondary)' }}>
          The requested product could not be located in the OLIVERA collection.
        </p>
        <Link href="/collections/olivera" className="btn-primary" style={{ marginTop: '2rem' }}>
          Back to OLIVERA Collection
        </Link>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const isInTray = hasItem(product.id);
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  const handleEnquire = () => {
    openEnquiryModal(
      `OLIVERA — ${product.name} (${product.code})`,
      `I am interested in acquiring specifications and pricing for OLIVERA ${product.name} (Code: ${product.code}, Dimensions: ${product.dimensions}).\n\nProject / Quantity details:`
    );
  };

  const handleTrayToggle = () => {
    if (isInTray) {
      openTray();
    } else {
      addToTray(product.id);
      openTray();
    }
  };

  return (
    <>
      {/* BREADCRUMBS & NAVIGATION RETURN BAR */}
      <section className="pdp-nav-bar">
        <div className="container">
          <div className="pdp-breadcrumbs-wrap">
            <Link href="/collections/olivera" className="pdp-back-link">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to OLIVERA Collection
            </Link>
            <div className="pdp-breadcrumbs">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/collections/olivera">OLIVERA</Link>
              <span className="sep">/</span>
              <span className="current">{product.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAIL MAIN STAGE */}
      <section className="pdp-stage-section">
        <div className="container">
          <div className="pdp-stage-grid">
            {/* LEFT COLUMN: PHOTO GALLERY & SLIDESHOW */}
            <div className="pdp-gallery-col">
              <div className="pdp-gallery-main-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[activeImageIndex] || images[0]}
                  alt={`${product.name} — View ${activeImageIndex + 1}`}
                  className="pdp-main-img"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 2 }}
                />
              </div>

              {/* Thumbnail strip */}
              {images.length > 1 && (
                <div className="pdp-thumbnails-strip" style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  {images.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        border: idx === activeImageIndex ? '1.5px solid var(--ink-primary)' : '1px solid var(--border-medium)',
                        padding: 2,
                        background: 'transparent',
                        cursor: 'pointer',
                        borderRadius: 2,
                        opacity: idx === activeImageIndex ? 1 : 0.65,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{ width: 64, height: 64, objectFit: 'cover', display: 'block' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: PRODUCT SPECIFICATIONS & CTAS */}
            <div className="pdp-info-col">
              <div className="pdp-collection-tag">02 — NATURAL EARTH SERIES • OLIVERA</div>
              <h1 className="pdp-title">{product.name}</h1>
              <div className="pdp-dimensions-tag">{product.dimensions}</div>
              <p className="pdp-description">
                {product.editorialCaption ||
                  'Softly muted olive-grey porcelain tableware defined by organic silhouettes and refined contemporary dining aesthetics.'}
              </p>

              {/* Technical Specifications Table */}
              <div className="pdp-specs-box">
                <h3 className="pdp-specs-heading">TECHNICAL SPECIFICATIONS</h3>
                <table className="modal-specs-table pdp-specs-table">
                  <tbody>
                    <tr>
                      <th>Product Code</th>
                      <td>{product.code}</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td>{product.dimensions}</td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td>{product.categoryLabel || product.category}</td>
                    </tr>
                    <tr>
                      <th>Series</th>
                      <td>Natural Earth Series</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>High Vitrified European Porcelain</td>
                    </tr>
                    <tr>
                      <th>Finish</th>
                      <td>Softly Muted Olive-Grey Matted Glaze</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Action Buttons Group */}
              <div className="pdp-actions-group">
                <button
                  type="button"
                  className="btn-primary pdp-btn-enquire"
                  onClick={handleEnquire}
                >
                  ENQUIRE NOW
                </button>
                <button
                  type="button"
                  className="btn-secondary pdp-btn-tray"
                  onClick={handleTrayToggle}
                  style={{
                    background: isInTray ? 'var(--bg-porcelain-alt)' : 'transparent',
                    borderColor: isInTray ? 'var(--tone-gold)' : undefined,
                    color: isInTray ? 'var(--tone-gold)' : undefined,
                  }}
                >
                  {isInTray ? '✓ In Specification Tray' : '+ Add to Specification Tray'}
                </button>
              </div>

              <div className="pdp-back-bottom" style={{ marginTop: '2rem' }}>
                <Link href="/collections/olivera" className="pdp-return-link">
                  ← Return to All 17 OLIVERA Pieces
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE PIECES FROM OLIVERA */}
      <section className="pdp-related-section section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="pdp-related-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Curated Portfolio
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', margin: '0.5rem 0' }}>
              MORE PIECES FROM OLIVERA
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem' }}>
              Explore coordinating plates, bowls, and platters in the Natural Earth collection.
            </p>
          </div>

          <div className="products-grid-catalog olivera-cards-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <p>Loading product details...</p>
        </div>
      }
    >
      <ProductDetailContent />
    </Suspense>
  );
}
