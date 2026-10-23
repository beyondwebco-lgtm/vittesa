import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpecificationTrayDrawer } from '@/components/tray/SpecificationTrayDrawer';
import { EnquiryModal } from '@/components/modal/EnquiryModal';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VITTESA — Porcelain Maison | Beautifully Made for the Art of Dining',
  description:
    'Discover OLIVERA by VITTESA — considered porcelain tableware defined by softly muted olive-grey tones and organic silhouettes.',
  icons: {
    icon: '/assets/logo/vittesa-monogram-emblem.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero/sunlit-artisan-stoneware-table-setting.webp"
          type="image/webp"
          media="(min-width: 769px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero/sunlit-artisan-stoneware-table-setting-800w.webp"
          type="image/webp"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/logo/vittesa-monogram-gold.webp"
          type="image/webp"
        />
      </head>
      <body className="olivera-showroom-home">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <SpecificationTrayDrawer />
        <EnquiryModal />
      </body>
    </html>
  );
}
