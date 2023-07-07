/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.henryford.edu.ar',
                port: '',
                pathname: '/uploads/**',
            },
        ],
    },
}

module.exports = nextConfig
