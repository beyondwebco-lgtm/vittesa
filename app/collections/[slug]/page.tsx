import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCollectionBySlug, getCollections } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';
import { CollectionProductGrid } from '@/components/collection/CollectionProductGrid';
import { BulkBannerSection } from '@/components/home/BulkBannerSection';

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const collections = getCollections();
  return collections.map((col) => ({
    slug: col.slug || col.id,
  }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: 'Collection Not Found | VITTESA Porcelain',
    };
  }

  return {
    title: `${collection.name} Collection | VITTESA Porcelain Maison`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCollection(slug);

  return (
    <>
      {/* 2. Collection Heading & Editorial Image */}
      <section className="olivera-intro-section" style={{ padding: 'clamp(2rem, 4vw, 3.5rem) 0 1rem' }}>
        <div className="container text-center">
          <span className="collection-intro-label">VITTESA · PORCELAIN MAISON</span>
          <h1
            className="collection-intro-title"
            style={{ margin: '0.25rem 0 0.5rem', letterSpacing: '0.08em' }}
          >
            {collection.name}
          </h1>
          <p
            className="collection-intro-desc"
            style={{
              maxWidth: '580px',
              margin: '0 auto clamp(1.5rem, 3vw, 2.5rem)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.6,
              color: 'var(--ink-secondary)',
            }}
          >
            {collection.description}
          </p>

          <div
            className="olivera-hero-media"
            style={{
              maxWidth: '1040px',
              margin: '0 auto',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={collection.editorialImage || collection.heroImage || '/assets/catalogue/olivera-editorial-hero.jpg'}
              alt={`${collection.name} Porcelain Tableware Collection`}
              className="olivera-hero-img"
              loading="eager"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 3. Products Catalogue Grid with Filtering */}
      <CollectionProductGrid products={products} />

      {/* 4. Bulk and Wholesale Enquiry Banner */}
      <BulkBannerSection />
    </>
  );
}
