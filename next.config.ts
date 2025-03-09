import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'external-content.duckduckgo.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'external-content.duckduckgo.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
