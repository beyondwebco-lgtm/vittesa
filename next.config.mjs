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
        source: '/showroom.html',
        destination: '/showroom',
      },
    ];
  },
};

export default nextConfig;
