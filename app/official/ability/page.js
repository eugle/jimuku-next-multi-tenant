/** @format */

'use client';

import Banner from '@/app/components/home/banner';
import Header from '@/app/components/home/header';
import Footer from '@/app/components/home/footer';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


export default function Custom() {
	const features = [
		{
		  name: '文章模块',
		  description:
			'通过创建单页文章内容，实现企业简介、业务介绍、品牌介绍等各种自定义的单页宣传内容',
		  icon: CloudArrowUpIcon,
		},
		{
		  name: '产品模块',
		  description:
			'实现产品的分类展示，通过图片和文字混合的形式，展示产品和宣传产品',
		  icon: LockClosedIcon,
		},
		{
		  name: '新闻模块',
		  description:
			'随时更新公司动态，发布最新消息，图文形式，实现新闻内容的发布',
		  icon: ArrowPathIcon,
		},
		{
		  name: '联系留言',
		  description:
			'展示公司的联系方式，公司的地图位置，在线留言等模块功能的集合',
		  icon: FingerPrintIcon,
		},
	  ]
	return (
		<>
			<Banner />
			<Header />
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">功能明细</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            主要功能模块
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            包含宣传型官网的基础模块，可满足大多数中小企业的官网功能需求
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
			<Footer />
		</>
	);
}
