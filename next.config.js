/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://blog.minjongdev.com/resume",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
