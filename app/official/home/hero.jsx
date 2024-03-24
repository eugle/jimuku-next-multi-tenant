"use client";

import Link from "next/link";

export default function Hero({user}) {
    return (
            <div className="relative z-10 isolate p-6 lg:p-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center"> 
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            同时拥有H5移动端、电脑PC端、微信公众号的响应式网站
                            {/* <Link href="/official/h5" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                了解 <span aria-hidden="true">&rarr;</span>
                            </Link> */}
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            移动端优先的免费建站
                        </h1>
                        <p className="mt-4 md:mt-6 text-lg leading-7 md:leading-8 font-light text-gray-600">
                            积木库是一个移动端优先的免费自助建站平台，注册免费使用，不限时长，企业实名认证后即可申请正式上线
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href={user?"/website/create":"/account/register"}
                                className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {user?'快速创建':'免费注册'}
                            </Link>
                            <Link href="/official/ability" className="rounded-md text-sm px-5 py-[13px] border-[1px] border-gray-300 hover:border-gray-200 shadow-sm font-light leading-6 text-gray-900 hover:text-gray-700">
                                版本区别 <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
