/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [""],
  },
  headers: [
    {
      key: "Cache-Control",
      value: "public, max-age=3600, must-revalidate",
    },
  ],
};

module.exports = nextConfig;
