import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Credentials | VITTESA Porcelain Maison',
  description: 'Corporate Credentials of VITTESA — Commercial porcelain tableware manufacturer and exporter.',
};

export default function CorporateCredentialsPage() {
  return (
    <div
      className="corporate-credentials-page"
      style={{
        minHeight: 'calc(100dvh - var(--header-height) - 180px)',
      }}
    />
  );
}

