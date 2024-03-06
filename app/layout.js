/** @format */

import React from 'react';
import './globals.css';

export const metadata = {
	title: '积木库 - 官网298全包, 移动端优先疯狂建站师',
	keywords:
		'积木库，自助建站系统，官网298全包，宣传网站，移动端优先，企业微官网，宣传官网，会打字就能做网站， 疯狂建站师',
	description:
		'积木库是一个移动端优先的自助建站系统，官网298全包，轻松拥有专业漂亮的宣传网站，包含简介、服务、产品、新闻、留言、联系等必备模块。麻省虽小，五脏俱全。手机移动端优先适配，兼容平板、电脑，更可通过微信公众号底部菜单免费链接制作企业微官网。这一切，无需专业编程知识，会打字就能做网站，轻松几步创建自己的宣传网站。建网站就找疯狂建站师。',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='min-w-[320px]'>{children}</body>
		</html>
	);
}
