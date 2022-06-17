/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "images.punkapi.com"]
  }
};

module.exports = nextConfig;
