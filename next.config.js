/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http://d205bpvrqc9yn1.cloudfront.net'],
  },
};

module.exports = nextConfig;
