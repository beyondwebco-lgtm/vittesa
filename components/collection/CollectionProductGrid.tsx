'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/product/ProductCard';

interface CollectionProductGridProps {
  products: Product[];
}

export const CollectionProductGrid: React.FC<CollectionProductGridProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const counts: Record<string, number> = {
      all: products.length,
      plates: 0,
      bowls: 0,
      platters: 0,
      accessories: 0,
    };

    products.forEach((p) => {
      const cat = p.category.toLowerCase();
      if (counts[cat] !== undefined) {
        counts[cat]++;
      } else {
        counts[cat] = 1;
      }
    });

    return [
      { key: 'all', label: `All (${counts.all || 0})` },
      { key: 'plates', label: `Plates (${counts.plates || 0})` },
      { key: 'bowls', label: `Bowls (${counts.bowls || 0})` },
      { key: 'platters', label: `Platters (${counts.platters || 0})` },
      { key: 'accessories', label: `Accessories (${counts.accessories || 0})` },
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
  }, [products, activeCategory]);

  return (
    <section className="olivera-catalogue-section section-padding" id="products">
      <div className="container">
        {/* Filter Bar */}
        <div className="products-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`filter-chip ${activeCategory === cat.key ? 'active' : ''}`}
              data-filter={cat.key}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid-catalog olivera-cards-grid" id="collection-products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
