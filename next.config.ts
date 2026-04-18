import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages doesn't need basePath for subdirectory
  // Remove basePath - we'll use root domain or subdomain
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages needs this for proper routing
  trailingSlash: true,
};

export default nextConfig;