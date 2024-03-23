/**
 * @format
 * @type {import('next').NextConfig}
 */
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	eslint: {
        ignoreDuringBuilds: true,
    },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.jimuku.com',
				port: '',
				pathname: '/',
			},
		],
	},
};

module.exports = withBundleAnalyzer(nextConfig);
