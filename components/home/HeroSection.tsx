import React from 'react';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section hero-fullscreen" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Exquisite Porcelain.<br />
            Refined Dining.
          </h1>

          <div className="hero-cta-group">
            <Link href="/collections" className="btn-hero-primary">
              EXPLORE COLLECTIONS
            </Link>
            <Link href="/#contact" className="btn-hero-secondary">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
