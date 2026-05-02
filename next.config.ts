import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: false,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'saintdanielshealthcare.com'],
    },
  },
};

export default nextConfig;
