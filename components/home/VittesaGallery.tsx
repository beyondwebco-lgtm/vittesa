'use client';

import React from 'react';
import MagicBento from './MagicBento';

// Put images in /public/images/ (or change paths).
const ITEMS = [
  {
    id: 'bento-1',
    image: '/images/bento-1.jpg',
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: 'bento-2',
    image: '/images/bento-2.jpg',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 'bento-3',
    image: '/images/bento-3.jpg',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 'bento-4',
    image: '/images/bento-4.jpg',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 'bento-5',
    image: '/images/bento-5.jpg',
    colSpan: 1,
    rowSpan: 1
  }
];

export default function VittesaGallery() {
  return (
    <section id="featured-collection" style={{ background: '#f4efe6', padding: '48px 16px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <MagicBento
          items={ITEMS}
          theme="light"
          glowColor="#8a7a62"
          columns={4}
          rowHeight={240}
          gap={4}
          radius={28}
          enableBorderGlow
          enableSpotlight={false}
          spotlightRadius={390}
          clickEffect
          enableStars={false}
          particleCount={24}
          enableTilt={false}
          enableMagnetism
          textAutoHide={false}
          intro
        />
      </div>
    </section>
  );
}
