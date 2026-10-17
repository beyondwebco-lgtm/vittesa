'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTrayStore } from '@/store/trayStore';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const items = useTrayStore((state) => state.items);
  const openTray = useTrayStore((state) => state.openTray);
  const trayCount = mounted ? items.length : 0;

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}
      id="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="mobile-nav-backdrop" onClick={onClose} />
      <div className="mobile-nav-dialog">
        <div className="mobile-nav-header">
          <Link href="/" className="brand-logo-wrap mobile-logo-wrap" aria-label="VITTESA Home" onClick={onClose}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/vittesa-monogram-gold.png"
              alt="VITTESA"
              className="brand-logo-wordmark"
            />
          </Link>
          <button className="btn-close-mobile-nav" aria-label="Close Navigation" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="mobile-nav-body">
          <ul className="mobile-nav-links">
            <li>
              <Link href="/" onClick={onClose}>
                <span className="nav-num">01</span> Home
              </Link>
            </li>
            <li>
              <Link href="/collections" onClick={onClose}>
                <span className="nav-num">02</span> Collections
              </Link>
            </li>
            <li>
              <Link href="/showroom" onClick={onClose}>
                <span className="nav-num">03</span> Products
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={onClose}>
                <span className="nav-num">04</span> About Us
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={onClose}>
                <span className="nav-num">05</span> Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          {trayCount > 0 && (
            <button
              type="button"
              onClick={() => {
                onClose();
                openTray();
              }}
              style={{
                width: '100%',
                marginBottom: '0.75rem',
                padding: '0.75rem',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: '1px solid var(--border-medium)',
                background: 'transparent',
                color: 'var(--ink-primary)',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              <span>SPECIFICATION TRAY</span>
              <span
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
          <Link href="/collections" className="btn-contact-header mobile-contact-btn" onClick={onClose}>
            EXPLORE COLLECTIONS
          </Link>
        </div>
      </div>
    </div>
  );
};
