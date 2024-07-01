/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sei.io',
                port: '',
            },
        ],
    },
};

export default nextConfig;
