/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/stickers/**",
      },
    ],
  },
};
