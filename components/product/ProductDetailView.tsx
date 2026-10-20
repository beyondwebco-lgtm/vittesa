'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useTrayStore } from '@/store/trayStore';
import { useModalStore } from '@/store/modalStore';
import { ProductCard } from './ProductCard';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts?: Product[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  relatedProducts = [],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [addedToTray, setAddedToTray] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const addToTray = useTrayStore((state) => state.addToTray);
  const openEnquiryModal = useModalStore((state) => state.openEnquiryModal);

  const images =
    product.images && product.images.length > 0 ? product.images : [product.image];
  const hasMultipleImages = images.length > 1;

  // Keyboard Navigation for Gallery
  useEffect(() => {
    if (!hasMultipleImages) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasMultipleImages, images.length]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || !hasMultipleImages) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped Left -> Next
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else {
        // Swiped Right -> Prev
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    }
    touchStartXRef.current = null;
  };

  const handleAddToTray = () => {
    addToTray(product.id);
    setAddedToTray(true);
    setTimeout(() => {
      setAddedToTray(false);
    }, 1800);
  };

  const handleEnquire = () => {
    openEnquiryModal(
      `${product.collection} — ${product.name}`,
      `I am interested in acquiring specifications and pricing for ${product.collection} ${product.name} (Code: ${product.code || product.id}, Dimensions: ${product.dimensions}).\n\nProject / Quantity details:`
    );
  };

  const isIvora =
    product.collection.toUpperCase() === 'IVORA' ||
    product.collection.toUpperCase() === 'IVORY';
  const isSpeckledBrown =
    product.collection.toUpperCase() === 'SPECKLED BROWN' ||
    product.collectionId === 'speckled-brown' ||
    product.collectionId === 'terra-speckle';
  const isGreyborne =
    product.collection.toUpperCase() === 'GREYBORNE' ||
    product.collectionId === 'greyborne' ||
    product.collectionId === 'urbane-grey';

  const collectionTag = isIvora
    ? '02 — TIMELESS IVORA SERIES • IVORA'
    : isSpeckledBrown
    ? '03 — ARTISAN EARTH SERIES • SPECKLED BROWN'
    : isGreyborne
    ? '04 — REFINED STONEWARE SERIES • GREYBORNE'
    : '01 — NATURAL EARTH SERIES • OLIVERA';

  const colSlug =
    product.collectionId ||
    (isIvora
      ? 'ivora'
      : product.collection.toLowerCase().replace(/\s+/g, '-'));

  const specDim =
    product.dimensions ||
    (product.specs &&
      (product.specs.diameter || product.specs.dimensions || product.specs.capacity)) ||
    '';

  const specsList = [
    {
      label: 'Collection',
      val: isIvora
        ? 'IVORA (Timeless Ivora Series)'
        : isSpeckledBrown
        ? 'SPECKLED BROWN (Artisan Earth Series)'
        : isGreyborne
        ? 'GREYBORNE (Refined Stoneware Series)'
        : `${product.collection} (Natural Earth Series)`,
    },
    { label: 'Category', val: product.categoryLabel || 'Tableware' },
    {
      label: 'Dimensions',
      val:
        product.dimensions ||
        (product.specs && (product.specs.diameter || product.specs.dimensions)) ||
        'Standard',
    },
    {
      label: 'Capacity / Spec',
      val: (product.specs && product.specs.capacity) || specDim || 'Commercial Standard',
    },
    {
      label: 'Surface Finish',
      val:
        (product.specs && product.specs.finish) ||
        (isIvora
          ? 'Warm Ivora Matte Glaze'
          : isSpeckledBrown
          ? 'Speckled Brown Mineral Glaze'
          : isGreyborne
          ? 'Mineral Slate Grey Satin Glaze'
          : 'Softly Muted Olive-Grey Glaze'),
    },
    {
      label: 'Body Composition',
      val: isSpeckledBrown || isGreyborne
        ? 'High-Density Vitrified Stoneware'
        : 'High-Density European Vitrified Porcelain',
    },
    { label: 'Commercial Suitability', val: 'Heavy Hospitality & Industrial Dishwasher Safe' },
    { label: 'Thermal Resistance', val: 'Microwave & Commercial Warming Oven Safe' },
  ];

  return (
    <>
      {/* BREADCRUMBS & NAVIGATION RETURN BAR */}
      <section className="pdp-nav-bar">
        <div className="container">
          <div className="pdp-breadcrumbs-wrap">
            <Link
              href={`/collections/${colSlug}`}
              className="pdp-back-link"
            >
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
              Back to {product.collection} Collection
            </Link>
            <div className="pdp-breadcrumbs">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href={`/collections/${colSlug}`}>
                {product.collection}
              </Link>
              <span className="sep">/</span>
              <span className="current" id="crumb-product-name">
                {product.name}
              </span>
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
                className={`product-item-media pdp-carousel-media ${hasMultipleImages ? 'has-carousel' : ''}`}
                id="pdp-main-media"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="carousel-track">
                  {images.map((src, idx) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={idx}
                      src={src}
                      alt={`${product.name} (View ${idx + 1})`}
                      className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  ))}
                </div>

                {hasMultipleImages && (
                  <>
                    <span className="carousel-counter">
                      {currentSlide + 1} / {images.length}
                    </span>
                    <button
                      className="carousel-nav-btn prev"
                      type="button"
                      aria-label="Previous view"
                      onClick={() =>
                        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                      }
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      className="carousel-nav-btn next"
                      type="button"
                      aria-label="Next view"
                      onClick={() =>
                        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                      }
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                    <div className="carousel-dots-container">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                          type="button"
                          data-index={idx}
                          aria-label={`View ${idx + 1}`}
                          onClick={() => setCurrentSlide(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {hasMultipleImages && (
                <div className="pdp-thumbnails-strip" id="pdp-thumbs-strip">
                  {images.map((src, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`pdp-thumb-btn ${idx === currentSlide ? 'active' : ''}`}
                      data-index={idx}
                      aria-label={`Switch to view ${idx + 1}`}
                      onClick={() => setCurrentSlide(idx)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: PRODUCT SPECIFICATIONS & CTAS */}
            <div className="pdp-info-col">
              <div className="pdp-collection-tag">{collectionTag}</div>
              <h1 className="pdp-title" id="pdp-title">
                {product.name}
              </h1>
              <div className="pdp-dimensions-tag" id="pdp-dimension">
                {specDim}
              </div>
              <p className="pdp-description" id="pdp-desc">
                {product.editorialCaption ||
                  (isIvora
                    ? 'Timeless warm ivora porcelain with refined silhouettes, designed for elegant dining and contemporary hospitality.'
                    : 'Muted olive-grey tones and rounded, organic silhouettes engineered for contemporary fine dining.')}
              </p>

              {/* Technical Specifications Table */}
              <div className="pdp-specs-box">
                <h3 className="pdp-specs-heading">TECHNICAL SPECIFICATIONS</h3>
                <table className="modal-specs-table pdp-specs-table" id="pdp-specs-table">
                  <tbody>
                    {specsList.map((spec, i) => (
                      <tr key={i}>
                        <th>{spec.label}</th>
                        <td>{spec.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Action Buttons Group */}
              <div className="pdp-actions-group">
                <button
                  type="button"
                  className="btn-primary pdp-btn-enquire"
                  id="pdp-enquire-btn"
                  onClick={handleEnquire}
                >
                  ENQUIRE NOW
                </button>
                <button
                  type="button"
                  className="btn-secondary pdp-btn-tray"
                  id="pdp-add-tray-btn"
                  onClick={handleAddToTray}
                >
                  {addedToTray ? '✓ Added to Spec Tray' : '+ Add to Specification Tray'}
                </button>
              </div>

              <div className="pdp-back-bottom">
                <Link
                  href={`/collections/${product.collection.toLowerCase()}`}
                  className="pdp-return-link"
                >
                  ← Return to All 17 {product.collection} Pieces
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE PIECES FROM COLLECTION */}
      {relatedProducts.length > 0 && (
        <section className="pdp-related-section">
          <div className="container">
            <div className="pdp-related-header">
              <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
                Curated Portfolio
              </span>
              <h2>MORE PIECES FROM {product.collection}</h2>
              <p>
                Explore coordinating plates, bowls, and platters in the{' '}
                {isIvora ? 'Timeless Ivora' : 'Natural Earth'} collection.
              </p>
            </div>

            <div className="products-grid-catalog olivera-cards-grid" id="pdp-related-grid">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
