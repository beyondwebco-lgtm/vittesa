'use client';

import React from 'react';
import MagicBento from './MagicBento';

// Put images in /public/images/ (or change paths).
const ITEMS = [
  {
    id: 'olivera',
    title: 'OLIVERA',
    description:
      'Softly muted olive-grey porcelain with rounded, organic silhouettes crafted for contemporary dining.',
    label: 'SHOP NOW →',
    image: '/images/olivera.jpg',
    href: 'https://vittesa.vercel.app/collections/olivera',
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: 'ivora',
    title: 'IVORA',
    description:
      'Timeless ivory-toned porcelain with refined silhouettes, designed for elegant dining and contemporary hospitality.',
    label: 'SHOP NOW →',
    image: '/images/ivora.jpg',
    href: 'https://vittesa.vercel.app/collections/ivora'
  },
  {
    id: 'speckled-brown',
    title: 'SPECKLED BROWN',
    description:
      'Artisan speckled brown vitrified stoneware featuring natural mineral flecks, organic silhouettes, and rich tactile warmth.',
    label: 'SHOP NOW →',
    image: '/images/speckled-brown.jpg',
    href: 'https://vittesa.vercel.app/collections/speckled-brown'
  },
  {
    id: 'greyborne',
    title: 'GREYBORNE',
    description:
      'Architectural mineral slate grey stoneware featuring smooth matte surfaces, refined contours, and exceptional hospitality durability.',
    label: 'SHOP NOW →',
    image: '/images/greyborne.jpg',
    href: 'https://vittesa.vercel.app/collections/greyborne'
  },
  {
    id: 'modern-sage-green',
    title: 'MODERN SAGE GREEN',
    description:
      'Subtle modern sage green porcelain with soft satin surfaces, balanced profiles, and calm contemporary hospitality presence.',
    label: 'SHOP NOW →',
    image: '/images/modern-sage-green.jpg',
    href: 'https://vittesa.vercel.app/collections/modern-sage-green'
  },
  {
    id: 'terrane',
    title: 'TERRANE',
    description:
      'Raw earthy mineral-toned vitrified porcelain crafted with sculpted profiles, hand-accented rims, and organic tactile presence.',
    label: 'SHOP NOW →',
    image: '/images/terrane.jpg',
    href: 'https://vittesa.vercel.app/collections/terrane',
    colSpan: 4,
    rowSpan: 1
  }
].map(item => ({ ...item, target: '_blank', rel: 'noopener noreferrer' }));

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
