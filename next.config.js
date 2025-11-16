/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {
    // Empty config to silence warning - Turbopack will work with default settings
  },
  output: 'export',
};

module.exports = nextConfig;
