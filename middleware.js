/** @format */

// middleware.js
import { NextResponse } from 'next/server';

export const config = {
	matcher: ['/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'],
};

export default async function middleware(req) {
	const url = req.nextUrl;
	const hostname = req.headers.get('host');

	// 获得子域名
	const subdomain = hostname.split('.')[0];

	// 这些域名直接访问主页
	const allowedDomains = [
		'localhost:3000',
		'jimuku',
		'www',
		'www1',
		'wwww',
		'office',
		'master',
		'manage',
		'manager',
	];

	// 判断是不是子域名
	const isAllowedDomain = allowedDomains.find(
		(domain) => domain === subdomain
	);

	// 直接访问主页的
	if (isAllowedDomain) {
		return NextResponse.next();
	}

	// 有子域名的访问子域名
	return NextResponse.rewrite(
		new URL(`/${subdomain}${url.pathname}`, req.url)
	);
}
