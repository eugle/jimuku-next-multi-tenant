/** @format */

import React from 'react';
import { cookies } from "next/headers";
import { ClientLayout } from "./imports/lib/global/ClientLayout";
import { ApolloWrapper } from "./imports/lib/apollo/ApolloWrapper";
import './globals.css';

export const metadata = {
	title: '积木库 - 移动端优先的免费自助建站平台',
	keywords:
		'积木库，免费自助建站平台，宣传网站，移动端优先，企业微官网，宣传官网，会打字就能做网站，免费自助建站，免费建站，免费做网站',
	description:
		'积木库是一个移动端优先的免费自助建站系统，通过积木库免费做网站，轻松拥有专业漂亮的宣传网站。麻省虽小，五脏俱全的免费自助建站平台。手机移动端优先适配，兼容平板、电脑，微官网。这一切，无需专业编程知识，会打字就能免费做网站，轻松几步创建自己的官方网站。建网站就找积木库。',
};

export default function RootLayout({ children }) {
	const cookieStore = cookies();
	const delay = Number(cookieStore.get("apollo-x-custom-delay")?.value ?? 1000);

	return (
		<html lang='en'>
			<body className='min-w-[320px]'>
				<ApolloWrapper delay={delay}>
					<ClientLayout>
						{children}
					</ClientLayout>
				</ApolloWrapper>
			</body>
		</html>
	);
}
