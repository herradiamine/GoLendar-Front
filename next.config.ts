import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force tous les composants à être côté client
  reactStrictMode: true,
};

export default nextConfig;
