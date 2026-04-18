import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/xandercorp-website",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;