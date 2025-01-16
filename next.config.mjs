/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/kos-theory" : "",
  assetPrefix: isProd ? "/kos-theory/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
