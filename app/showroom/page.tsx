import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllProducts } from '@/data/products';
import { ShowroomExplorer } from '@/components/showroom/ShowroomExplorer';

export const metadata: Metadata = {
  title: 'Showroom — Technical Catalogue Explorer | VITTESA Porcelain',
  description:
    'Explore VITTESA porcelain collections including OLIVERA and IVORA. Filter by collection or tableware category, search pieces, and examine technical specifications.',
};

export default function ShowroomPage() {
  const products = getAllProducts();

  return (
    <>
      {/* SHOWROOM PAGE HERO */}
      <header className="showroom-page-hero">
        <div className="container">
          <div className="showroom-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Showroom</span>
          </div>
          <div className="editorial-header-block" style={{ marginBottom: 0, maxWidth: '800px' }}>
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Technical Catalogue Explorer
            </span>
            <h1>PORCELAIN SHOWROOM</h1>
            <p>
              Filter across tableware collections and categories, search by piece name or dimensions,
              and examine specifications for all 34 VITTESA porcelain pieces.
            </p>
          </div>
        </div>
      </header>

      {/* Showroom Interactive Explorer */}
      <ShowroomExplorer products={products} />
    </>
  );
}
