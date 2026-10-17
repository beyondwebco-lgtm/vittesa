'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { getAllProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { useModalStore } from '@/store/modalStore';
import { useTrayStore } from '@/store/trayStore';

interface ProductDetailViewProps {
  product: Product;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const allProducts = getAllProducts();
  const openEnquiryModal = useModalStore((state) => state.openEnquiryModal);
  const { addToTray, hasItem, openTray } = useTrayStore();

  const isIvory = product.collection.toLowerCase() === 'ivory';
  const collectionName = isIvory ? 'IVORY' : 'OLIVERA';
  const collectionUrl = isIvory ? '/collections/ivory' : '/collections/olivera';
  const seriesName = isIvory ? 'Timeless Ivory Series' : 'Natural Earth Series';
  const seriesTag = isIvory ? '02 — TIMELESS PORCELAIN SERIES • IVORY' : '01 — NATURAL EARTH SERIES • OLIVERA';
  const defaultFinish = isIvory ? 'Warm Ivory Matte Glaze with Sand Rim' : 'Softly Muted Olive-Grey Matted Glaze';

  // Sync image index when product changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [product.id]);

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for image gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!hasMultipleImages) return;
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasMultipleImages, images.length]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
    touchStartX.current = null;
  };

  const isInTray = hasItem(product.id);
  const relatedProducts = allProducts
    .filter((p) => p.collectionId === product.collectionId && p.id !== product.id)
    .slice(0, 4);

  const handleEnquire = () => {
    openEnquiryModal(
      `${collectionName} — ${product.name} (${product.code})`,
      `I am interested in acquiring specifications and pricing for ${collectionName} ${product.name} (Code: ${product.code}, Dimensions: ${product.dimensions}).\n\nProject / Quantity details:`
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
            <Link href={collectionUrl} className="pdp-back-link">
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
              Back to {collectionName} Collection
            </Link>
            <div className="pdp-breadcrumbs">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href={collectionUrl}>{collectionName}</Link>
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
              <div
                className="pdp-gallery-main-wrap"
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[activeImageIndex] || images[0]}
                  alt={`${product.name} — View ${activeImageIndex + 1}`}
                  className="pdp-main-img"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />

                {hasMultipleImages && (
                  <>
                    <button
                      type="button"
                      className="carousel-nav-btn prev"
                      aria-label="Previous image"
                      onClick={handlePrevImage}
                      style={{
                        position: 'absolute',
                        left: 12,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255,255,255,0.85)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '50%',
                        width: 36,
                        height: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="carousel-nav-btn next"
                      aria-label="Next image"
                      onClick={handleNextImage}
                      style={{
                        position: 'absolute',
                        right: 12,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255,255,255,0.85)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '50%',
                        width: 36,
                        height: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>

                    <span
                      style={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        background: 'rgba(20,20,20,0.65)',
                        color: '#FFF',
                        fontSize: '0.6875rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 2,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {activeImageIndex + 1} / {images.length}
                    </span>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              {hasMultipleImages && (
                <div
                  className="pdp-thumbnails-strip"
                  style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}
                >
                  {images.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View photo ${idx + 1}`}
                      style={{
                        border:
                          idx === activeImageIndex
                            ? '1.5px solid var(--ink-primary)'
                            : '1px solid var(--border-medium)',
                        padding: 2,
                        background: 'transparent',
                        cursor: 'pointer',
                        borderRadius: 2,
                        opacity: idx === activeImageIndex ? 1 : 0.65,
                        transition: 'opacity 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{ width: 68, height: 68, objectFit: 'cover', display: 'block' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: PRODUCT SPECIFICATIONS & CTAS */}
            <div className="pdp-info-col">
              <div className="pdp-collection-tag">{seriesTag}</div>
              <h1 className="pdp-title">{product.name}</h1>
              <div className="pdp-dimensions-tag">{product.dimensions}</div>
              <p className="pdp-description">
                {product.editorialCaption ||
                  `${collectionName} tableware defined by organic silhouettes and refined contemporary dining aesthetics.`}
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
                    {product.specs.capacity && (
                      <tr>
                        <th>Capacity</th>
                        <td>{product.specs.capacity}</td>
                      </tr>
                    )}
                    <tr>
                      <th>Category</th>
                      <td>{product.categoryLabel || product.category}</td>
                    </tr>
                    <tr>
                      <th>Series</th>
                      <td>{product.specs.series || seriesName}</td>
                    </tr>
                    <tr>
                      <th>Material</th>
                      <td>High Vitrified European Porcelain</td>
                    </tr>
                    <tr>
                      <th>Finish</th>
                      <td>{product.specs.finish || defaultFinish}</td>
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
                <Link href={collectionUrl} className="pdp-return-link">
                  ← Return to All 17 {collectionName} Pieces
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE PIECES FROM THIS COLLECTION */}
      <section className="pdp-related-section section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="pdp-related-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Curated Portfolio
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', margin: '0.5rem 0' }}>
              MORE PIECES FROM {collectionName}
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem' }}>
              Explore coordinating plates, bowls, and platters in the {seriesName}.
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
};
