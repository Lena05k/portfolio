import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                pathname: '**',
            },
        ],
    },
    /* config options here */
};

export default nextConfig;
