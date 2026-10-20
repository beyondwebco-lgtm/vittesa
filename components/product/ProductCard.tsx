'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images =
    product.images && product.images.length > 0 ? product.images : [product.image];
  const hasMultipleImages = images.length > 1;

  const colSlug =
    product.collectionId ||
    (product.collection.toLowerCase() === 'ivory' ||
    product.collection.toLowerCase() === 'ivora'
      ? 'ivora'
      : product.collection.toLowerCase().replace(/\s+/g, '-'));

  const productUrl =
    product.slug
      ? `/collections/${colSlug}/${product.slug}`
      : `/collections/${colSlug}/product?id=${product.id}`;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentSlide(index);
  };

  return (
    <div
      className="product-item-card"
      data-category={product.category}
      data-product-id={product.id}
    >
      <div
        className={`product-item-media ${hasMultipleImages ? 'has-carousel' : ''}`}
        onClick={() => router.push(productUrl)}
        style={{ cursor: 'pointer' }}
      >
        <div className="carousel-track">
          {images.map((imgSrc, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={imgSrc}
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
              onClick={handlePrev}
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
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              className="carousel-nav-btn next"
              type="button"
              aria-label="Next view"
              onClick={handleNext}
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
                  onClick={(e) => handleDotClick(e, idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="product-item-body">
        <div>
          <h3 className="product-item-title">
            <Link href={productUrl} className="product-title-link">
              {product.name}
            </Link>
          </h3>
          <div className="product-item-dimensions">
            {product.dimensions ||
              (product.specs &&
                (product.specs.diameter || product.specs.dimensions || product.specs.capacity)) ||
              ''}
          </div>
        </div>
        <div className="product-card-actions">
          <Link href={productUrl} className="btn-card-quickview" role="button">
            VIEW PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};
