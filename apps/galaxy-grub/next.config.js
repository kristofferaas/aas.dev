/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
};

