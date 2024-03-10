/** @format */

'use client';

import Banner from '@/app/components/home/banner';
import Header from '@/app/components/home/header';
import Footer from '@/app/components/home/footer';
import Link from 'next/link';
import { XMarkIcon, CheckIcon, FingerPrintIcon, LockClosedIcon, RadioIcon, SquaresPlusIcon, ClipboardIcon, PhoneIcon } from '@heroicons/react/24/outline'


export default function Custom() {
	const features = [
		{
			name: '免费版',
			description: '无任何费用，零成本获得免费官方网站',
			price: 0,
			button: '注册免费版',
			color: 'bg-gray-600',
			hover: 'bg-gray-500',
			link: '/account/register',
			list: [
				{text: '文章模块', icon: CheckIcon},
				{text: '产品模块', icon: CheckIcon},
				{text: '新闻模块', icon: CheckIcon},
				{text: '视频模块', icon: CheckIcon},
				{text: '在线留言', icon: CheckIcon},
				{text: '文件管理系统', icon: CheckIcon},
				{text: '多端适配', icon: CheckIcon},
				{text: '企业认证', icon: CheckIcon},
				{text: '上线审核', icon: CheckIcon},
				{text: '广告违禁词审查', icon: XMarkIcon, color: 'text-red-600'},
				{text: '人工客服工单问答', icon: XMarkIcon, color: 'text-red-600'},
				{text: '绑定独立域名', icon: XMarkIcon, color: 'text-red-600'},
				{text: '部署加密SSL证书', icon: XMarkIcon, color: 'text-red-600'},
			]

		},
		{
			name: '专业版',
			description: '专业版官网，免费部署SSL安全证书加密协议',
			price: 298,
			button: '升级专业版',
			color: 'bg-indigo-600',
			hover: 'bg-indigo-500',
			link: '/account/upgrade',
			iconColor: 'text-green-800',
			list: [
				{text: '文章模块', icon: CheckIcon},
				{text: '产品模块', icon: CheckIcon},
				{text: '新闻模块', icon: CheckIcon},
				{text: '视频模块', icon: CheckIcon},
				{text: '在线留言', icon: CheckIcon},
				{text: '文件管理系统', icon: CheckIcon},
				{text: '多端适配', icon: CheckIcon},
				{text: '企业认证', icon: CheckIcon},
				{text: '上线审核', icon: CheckIcon},
				{text: '广告违禁词审查', icon: CheckIcon},
				{text: '人工客服工单问答', icon: CheckIcon},
				{text: '绑定独立域名', icon: CheckIcon},
				{text: '部署加密SSL证书', icon: CheckIcon},
			]
		}
	]

	return (
		<>
			<Banner />
			<Header />
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-light leading-7 text-indigo-600">版本间的区别</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						免费版 和 专业版
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						专业版可绑定独立域名，无任何其它功能模块使用上的区别，免费版没有任何限制
					</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl justify-center flex-row md:flex">
						{features.map(item => (
							<div key={item.name} className="border-gray-200 border-[1px] p-8 mb-4 md:mb-0 md:m-4 rounded-xl">
								<div className="text-base font-bold">{item.name}</div>
								<div className="text-sm font-light leading-5 pt-8 pb-8">{item.description}</div>
								
								<div className="flex flex-row">
									<div className='text-3xl font-semibold leading-10'>
										￥{item.price}
									</div>
									<div className='text-sm font-light text-gray-800 flex items-end pb-1.5 pl-1.5'>
										/年
									</div>
								</div>
								<div className='pt-10 pb-10 flex items-center'>
									<Link
										href={item.link}
										className={`rounded-md ${item.color} hover:${item.hover} px-6 py-2.5 flex flex-1 justify-center font-normal text-sm text-white shadow-s focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
									>
										{item.button}
									</Link>
								</div>
								<div className="pl-2">
									{item.list.map(feature => (
										<div className="text-sm font-light leading-8 flex flex-row">
											<div className="flex items-center">
												<feature.icon className={`h-4 w-4 ${feature.color || 'text-green-600'}`} aria-hidden="true" />
											</div>
											<div className="pl-2">
												{feature.text}
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
    		</div>
			<Footer />
		</>
	);
}
