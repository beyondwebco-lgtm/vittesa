'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTrayStore } from '@/store/trayStore';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const items = useTrayStore((state) => state.items);
  const openTray = useTrayStore((state) => state.openTray);
  const trayCount = mounted ? items.length : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isCollection = pathname.startsWith('/collections');

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="brand-logo-wrap" aria-label="VITTESA Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo/vittesa-monogram-gold.webp"
                alt="VITTESA — Porcelain Maison"
                className="brand-logo-wordmark"
                fetchPriority="high"
                decoding="async"
              />
            </Link>

            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-links">
                <li>
                  <Link href="/" className={`nav-link ${isHome ? 'active' : ''}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className={`nav-link ${isCollection ? 'active' : ''}`}
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showroom"
                    className={`nav-link ${pathname === '/showroom' ? 'active' : ''}`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="nav-actions">
              {trayCount > 0 && (
                <button
                  type="button"
                  onClick={openTray}
                  className="open-tray-btn"
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border-medium)',
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--ink-primary)',
                    borderRadius: '2px',
                  }}
                  aria-label={`View Specification Tray (${trayCount} pieces)`}
                >
                  <span>Tray</span>
                  <span
                    className="tray-badge"
                    style={{
                      background: 'var(--tone-gold)',
                      color: '#FFF',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {trayCount}
                  </span>
                </button>
              )}

              <Link href="/collections" className="btn-contact-header">
                EXPLORE COLLECTIONS
              </Link>

              <button
                className="mobile-menu-toggle"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};
