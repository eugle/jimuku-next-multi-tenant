/** @format */

'use client';

import Banner from '@/app/imports/lib/home/banner';
import Header from '@/app/imports/lib/home/header';
import Footer from '@/app/imports/lib/home/footer';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Custom() {
	return (
		<>
			<Banner />
			<Header />
			<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<svg
				className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
				aria-hidden="true"
				>
				<defs>
					<pattern
					id="e813992c-7d03-4cc4-a2bd-151760b470a0"
					width={200}
					height={200}
					x="50%"
					y={-1}
					patternUnits="userSpaceOnUse"
					>
					<path d="M100 200V.5M.5 .5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
					<path
					d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
					strokeWidth={0}
					/>
				</svg>
				<rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
				</svg>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				<div className="lg:pr-4">
					<div className="lg:max-w-lg">
					<p className="text-base font-semibold leading-7 text-indigo-600">极简官网</p>
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">宣传型官网</h1>
					<p className="mt-6 leading-8 text-gray-500">
						在碎片化信息时代，一切都讲究高效，快速。所以我们推崇，极致简单的，以手机移动端优先适配的极简官方宣传型网站。
					</p>
					</div>
				</div>
				</div>
				<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
				<img
					className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
					src="/product/website.jpg"
					alt="极简官网 - 宣传型官网"
				/>
				</div>
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				<div className="lg:pr-4">
					<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
					<p>
						面向中小企业，以入初创企业，在宣传内容还未成熟或不断改进中的时候，需要有一个极致漂亮又简单地达到宣传的目的的官网是非常有必要的。
					</p>
					<ul role="list" className="mt-8 space-y-8 text-gray-600">
						<li className="flex gap-x-3">
						<CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
						<span>
							<strong className="font-semibold text-gray-900">更新简单.</strong> 使内容不断更新，保持和企业发展同步。在企业
							发展的同时不断迭代，保持宣传内容随时，都是最新的。
						</span>
						</li>
						<li className="flex gap-x-3">
						<LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
						<span>
							<strong className="font-semibold text-gray-900">上线简单.</strong> 放弃不必要的多余设计，让宣传回归本质。保持
							必要的宣传内容快速传达给用户，让上线更快更简单。
						</span>
						</li>
						<li className="flex gap-x-3">
						<ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
						<span>
							<strong className="font-semibold text-gray-900">移动端优先.</strong> 手机几乎可以代替平板和电脑，使宣传官网
							能够快速地在移动端显现，同时以适配多种手机屏幕为主。
						</span>
						</li>
					</ul>
					<p className="mt-8">
						麻雀虽小，五脏俱全。我们的极简官网，在保持简单，美观的同时，具备简介、产品、服务、新闻、联系、留言等必备模块，物美价廉。
					</p>
					<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">想与众不同？</h2>
					<p className="mt-6">
						您可以通地设计首页的Banner来美化你的网站，将时间精力用在产品图片和产品介绍上，以宣传内容为主，达到与众不同的展现效果。如果想拥有不同
						的模板，我们可以为您单独一对一定制。
					</p>
					</div>
				</div>
				</div>
			</div>
			</div>
			<Footer />
		</>
	);
}
