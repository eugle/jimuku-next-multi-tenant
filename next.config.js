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
		domains: ['cdn.jimuku.com'],
	},
};

module.exports = withBundleAnalyzer(nextConfig);
