/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withPWA(nextConfig);
