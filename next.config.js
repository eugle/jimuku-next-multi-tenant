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
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.orbis.com.ar',
				port: '',
				pathname: '/wp-content/themes/barberry/images/**',
			},
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
