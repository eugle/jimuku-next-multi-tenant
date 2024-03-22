/** @format */

'use client';

export default function Custom() {
	return (
		<>
			<section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'>
				<div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
				<div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
				<div className='mx-auto max-w-2xl lg:max-w-4xl'>
					<figure className='mt-10'>
						<div className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-9'>
							使用教程
						</div>
					<div className='pt-4'>
						<blockquote className='text-center'>
							<p className='text-gray-500 leading-8'>
								“我会录制丰富的使用教程，以及和此行业相关的干货知识，欢迎关注我的自媒体，快速进步！”
							</p>
						</blockquote>
					</div>
						<figcaption className='mt-10'>
							<img
								className='mx-auto h-10 w-10 rounded-full'
								src='/tutorial/avatar.jpg'
								alt='疯狂建站师'
							/>
							<div className='mt-4 flex items-center justify-center space-x-3 text-base'>
								<div className='font-semibold text-gray-900'>
									疯狂建站师
								</div>
								<svg
									viewBox='0 0 2 2'
									width={3}
									height={3}
									aria-hidden='true'
									className='fill-gray-900'
								>
									<circle cx={1} cy={1} r={1} />
								</svg>
								<div className='text-gray-600'>全网同名</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</section>
		</>
	);
}
