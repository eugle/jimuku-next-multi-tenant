/** @format */

'use client';

const features = [
	{ name: '品牌官网', description: '独一无二的专属品牌官网的定制设计' },
	{
		name: '独立商城',
		description: '根据您的业务模式，定制满足需求的功能模块',
	},
	{ name: '创业项目', description: '与你共同探讨完成创业项目' },
	{
		name: '小程序',
		description: '按照你的需求完成小程序的设计开发',
	},
	{ name: 'App', description: '完成多端（苹果和安卓）应用的开发' },
	{
		name: '其它定制',
		description: '或有其它创意构思，可进一步沟通',
	},
];

export default function Custom() {
	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
					<div>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							按需定制
						</h2>
						<p className='mt-4 text-gray-500'>
							根据您的想法和构思，或协助你创意设计，完成独一无二的品牌官网建设。
							也可按照您的需求，完成其它商业模式的小程序或App系统的开发。
						</p>

						<dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
							{features.map((feature) => (
								<div
									key={feature.name}
									className='border-t border-gray-200 pt-4'
								>
									<dt className='font-medium text-gray-900'>
										{feature.name}
									</dt>
									<dd className='mt-2 text-sm text-gray-500'>
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>
					<div className='grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8'>
						<img
							src='/custom/filmmaker-2838932_1280.jpg'
							alt='按需定制'
							className='rounded-lg bg-gray-100'
						/>
					</div>
				</div>
			</div>
		</>
	);
}
