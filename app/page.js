/** @format */

import Link from 'next/link';

export default async function Home() {
	return (
		<main>
			<div className='flex justify-center items-center flex-1 h-screen bg-gray-50'>
				<div className='p-10 shadow-lg bg-white rounded-tr-2xl rounded-bl-2xl divide-y divide-dashed divide-gray-400'>
					<div className='flex justify-center text-sm text-gray-700 font-medium pb-4'>
						积木库
					</div>
					<div className='pt-4  flex text-xs flex-col'>
						<div className='justify-center flex'>
							积木库是一个面向中小企业的在线网站建设系统
						</div>
						<div className='justify-center flex py-4'>
							无需编程，会打字就能建网站
						</div>
						<div className='justify-center flex'>
							无代码可视化构建，通过积木式（组件）堆砌即可获得漂亮的响应式网站。
						</div>
						<div className='justify-center flex pt-10'>
							通过企业认证即可上线
						</div>
					</div>
				</div>
			</div>
			<div className='fixed left-0 bottom-0 flex justify-center w-full'>
				<div className='h-[48px] bg-gray-200 items-center flex flex-1 justify-center '>
					<Link href='https://beian.miit.gov.cn/' target='_blank'>
						<div className='text-gray-700 text-xs hover:text-blue-700 duration-300'>
							蜀ICP备2023015175号
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
