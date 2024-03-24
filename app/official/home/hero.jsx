"use client";

import Link from "next/link";

export default function Hero() {
    return (
            <div className="relative h-screen z-10 isolate p-6 lg:p-8">
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center"> 
                        <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-gray-600 border-dotted ring-1 ring-gray-900/20 hover:ring-gray-900/30">
                            <div className="flex items-center">
                                <span className="pr-2 text-base">超过 99+ 多国语言支持，移动端优先适配的响应式网站</span>
                                {/* <span className="text-2xl">🇨🇳 🇺🇸 🇯🇵 🇰🇷 🇨🇦 🇫🇷 🇵🇹 🇩🇪 🌎 👇</span> */}
                                {/* <Link href="/official/h5" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    了解 <span aria-hidden="true">&rarr;</span>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            AI 无代码可视化网站构建
                        </h1>
                        <p className="mt-4 md:mt-6 text-lg leading-7 md:leading-8 font-light text-gray-600">
                            适合想要快速上线的企业用户，无需任何前置基础知识，5分钟快速免费创建网站。积木库是您的专属私人设计师，人工智能开发团队...
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href='/account/register'
                                className="rounded-md bg-indigo-600 px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                免费注册
                            </Link>
                            <Link href="/account/login" className="rounded-md text-sm px-10 py-[13px] border-[1px] border-gray-300 hover:border-gray-200 shadow-sm font-light leading-6 text-gray-900 hover:text-gray-700">
                                开始构建 <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
