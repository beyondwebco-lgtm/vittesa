'use client';

import React from 'react';
import MagicBento from './MagicBento';

// Put images in /public/images/ (or change paths).
const ITEMS = [
  {
    id: 'olivera',
    title: 'OLIVERA',
    image: '/images/olivera.jpg',
    href: 'https://vittesa.vercel.app/collections/olivera',
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: 'ivora',
    title: 'IVORA',
    image: '/images/ivora.jpg',
    href: 'https://vittesa.vercel.app/collections/ivora'
  },
  {
    id: 'speckled-brown',
    title: 'SPECKLED BROWN',
    image: '/images/speckled-brown.jpg',
    href: 'https://vittesa.vercel.app/collections/speckled-brown'
  },
  {
    id: 'greyborne',
    title: 'GREYBORNE',
    image: '/images/greyborne.jpg',
    href: 'https://vittesa.vercel.app/collections/greyborne'
  },
  {
    id: 'modern-sage-green',
    title: 'MODERN SAGE GREEN',
    image: '/images/modern-sage-green.jpg',
    href: 'https://vittesa.vercel.app/collections/modern-sage-green'
  },
  {
    id: 'terrane',
    title: 'TERRANE',
    image: '/images/terrane.jpg',
    href: 'https://vittesa.vercel.app/collections/terrane'
  },
  {
    id: 'modern-pink',
    title: 'MODERN PINK',
    image: '/images/modern-pink.jpg',
    href: 'https://vittesa.vercel.app/collections/modern-pink'
  },
  {
    id: 'modern-brown',
    title: 'MODERN BROWN',
    image: '/images/modern-brown.jpg',
    href: 'https://vittesa.vercel.app/collections/modern-brown'
  },
  {
    id: 'modern-black',
    title: 'MODERN BLACK',
    image: '/images/modern-black.jpg',
    href: 'https://vittesa.vercel.app/collections/modern-black'
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
