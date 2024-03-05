/** @format */

import React from 'react';
import './globals.css';

export const metadata = {
	title: '积木库',
	keywords:
		'积木库，免费建站，无代码，零代码，可视化构建，免费企业官网，宣传官网，真免费',
	description:
		'积木库是一个面向普通用户（小白）的专业真免费建站平台，不懂设计和代码在线免费创建专业企业官网，无代码可视化构建，通过积木式（组件）堆砌即可获得漂亮的响应式网站。',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
