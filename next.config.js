/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  swcMinify: true,
  images: {
    domains: ['http://d205bpvrqc9yn1.cloudfront.net'],
  },
};

module.exports = nextConfig;
