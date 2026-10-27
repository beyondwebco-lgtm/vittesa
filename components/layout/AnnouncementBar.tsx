'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnnouncementBarProps {
  messages?: string[];
}

const DEFAULT_MESSAGES = [
  'BULK & WHOLESALE ENQUIRIES WELCOME',
  'DISCOVER OUR 10 PORCELAIN COLLECTIONS INCLUDING AUREN, MODERN PINK, MODERN BROWN & MODERN BLACK',
  'CONTACT US FOR INTERNATIONAL SHIPPING OPTIONS',
];

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  messages = DEFAULT_MESSAGES,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (messages.length <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [messages.length, isPaused]);

  return (
    <aside className="top-announcement-bar" role="region" aria-label="Announcements">
      <div className="container announcement-container">
        <div
          className="announcement-slider"
          id="announcement-slider"
          aria-live="polite"
          aria-atomic="true"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {messages.map((msg, idx) => (
            <span
              key={idx}
              className={`announcement-slide ${idx === currentIndex ? 'active' : ''}`}
              data-index={idx}
              aria-hidden={idx !== currentIndex}
            >
              {msg}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};
