'use client';

import React, { useState, useRef, useEffect } from 'react';

interface CollectionFadeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CollectionFadeImage: React.FC<CollectionFadeImageProps> = ({
  src,
  alt,
  className = 'olivera-feature-img',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <noscript>
        <style>{`
          .collection-fade-img {
            opacity: 1 !important;
            transform: none !important;
          }
        `}</style>
      </noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} collection-fade-img ${isLoaded ? 'is-loaded' : ''}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </>
  );
};
