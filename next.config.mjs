/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/index.html',
        destination: '/',
      },
      {
        source: '/collections/index.html',
        destination: '/collections',
      },
      {
        source: '/collections/olivera/index.html',
        destination: '/collections/olivera',
      },
      {
        source: '/collections/olivera/product.html',
        destination: '/collections/olivera/product',
      },
      {
        source: '/collections/ivory',
        destination: '/collections/ivora',
      },
      {
        source: '/collections/ivory/index.html',
        destination: '/collections/ivora',
      },
      {
        source: '/collections/ivory/product.html',
        destination: '/collections/ivora/product',
      },
      {
        source: '/collections/ivory/:slug',
        destination: '/collections/ivora/:slug',
      },
      {
        source: '/collections/ivora/index.html',
        destination: '/collections/ivora',
      },
      {
        source: '/collections/ivora/product.html',
        destination: '/collections/ivora/product',
      },
      {
        source: '/collections/speckled-brown/index.html',
        destination: '/collections/speckled-brown',
      },
      {
        source: '/collections/speckled-brown/product.html',
        destination: '/collections/speckled-brown/product',
      },
      {
        source: '/collections/terra-speckle',
        destination: '/collections/speckled-brown',
      },
      {
        source: '/collections/terra-speckle/:slug',
        destination: '/collections/speckled-brown/:slug',
      },
      {
        source: '/collections/greyborne/index.html',
        destination: '/collections/greyborne',
      },
      {
        source: '/collections/greyborne/product.html',
        destination: '/collections/greyborne/product',
      },
      {
        source: '/collections/urbane-grey',
        destination: '/collections/greyborne',
      },
      {
        source: '/collections/urbane-grey/:slug',
        destination: '/collections/greyborne/:slug',
      },
      {
        source: '/collections/modern-sage-green/index.html',
        destination: '/collections/modern-sage-green',
      },
      {
        source: '/collections/modern-sage-green/product.html',
        destination: '/collections/modern-sage-green/product',
      },
      {
        source: '/collections/sage-green',
        destination: '/collections/modern-sage-green',
      },
      {
        source: '/collections/sage-green/:slug',
        destination: '/collections/modern-sage-green/:slug',
      },
      {
        source: '/collections/terrane/index.html',
        destination: '/collections/terrane',
      },
      {
        source: '/collections/terrane/product.html',
        destination: '/collections/terrane/product',
      },
      {
        source: '/collections/the-terrane-collection',
        destination: '/collections/terrane',
      },
      {
        source: '/collections/the-terrane-collection/:slug',
        destination: '/collections/terrane/:slug',
      },
      {
        source: '/collections/the-modern-pink-collection',
        destination: '/collections/modern-pink',
      },
      {
        source: '/collections/the-modern-pink-collection/:slug',
        destination: '/collections/modern-pink/:slug',
      },
      {
        source: '/collections/the-modern-brown-collection',
        destination: '/collections/modern-brown',
      },
      {
        source: '/collections/the-modern-brown-collection/:slug',
        destination: '/collections/modern-brown/:slug',
      },
      {
        source: '/collections/the-modern-black-collection',
        destination: '/collections/modern-black',
      },
      {
        source: '/collections/the-modern-black-collection/:slug',
        destination: '/collections/modern-black/:slug',
      },
      {
        source: '/collections/the-auren-collection',
        destination: '/collections/auren',
      },
      {
        source: '/collections/the-auren-collection/:slug',
        destination: '/collections/auren/:slug',
      },
      {
        source: '/showroom.html',
        destination: '/showroom',
      },
    ];
  },
};

export default nextConfig;
