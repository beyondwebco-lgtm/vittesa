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
        source: '/showroom.html',
        destination: '/showroom',
      },
    ];
  },
};

export default nextConfig;
