"use client";

export default function Hero() {
    return (
        <div className="bg-white">
            <div className="relative isolate p-6 lg:p-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            同时拥有H5移动端、电脑PC端、微信公众号的响应式网站.
                            <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                了解 <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            移动端优先的极简官网
                        </h1>
                        <p className="mt-4 md:mt-6 text-sm md:text-lg leading-5 md:leading-8 font-light text-gray-600">
                            积木库是一个移动端优先的自助建站系统，注册免费试用，不限时长
                        </p>
                        <p className="mt-2 text-sm  md:text-lg leading-5 md:leading-8 font-light text-gray-600">
                            满意后再申请正式上线，298全包，仅限中小企业用户
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/account/login"
                                className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                免费自助创建
                            </a>
                            <a href="#" className="text-sm font-light leading-6 text-gray-900 hover:text-gray-700">
                                功能明细 <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
