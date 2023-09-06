/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = {
//   nextConfig,
//   images: {
//     domains: ["https://img.icons8.com/stickers/200/european-dragon.png"],
//   },
// };

module.exports = {
  nextConfig,
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
