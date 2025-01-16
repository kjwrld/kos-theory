/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Enables static export
  basePath: isProd ? "/your-repo-name" : "", // Adjust for GitHub Pages
  assetPrefix: isProd ? "/your-repo-name/" : "", // Adjust for GitHub Pages
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
};

export default nextConfig;
