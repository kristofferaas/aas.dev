/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    serverActions: true,
    typedRoutes: true,
    runtime: "experimental-edge",
  }
};
