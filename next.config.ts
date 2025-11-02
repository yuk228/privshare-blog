import type { NextConfig } from 'next'

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
    experimental: {
        optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
}

export default nextConfig
