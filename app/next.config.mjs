import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                port: '',
                pathname: '/w320/**'
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
            }
        ]
    }
};

export default withPlaiceholder(nextConfig);
