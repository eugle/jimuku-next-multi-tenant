"use client";

import dayjs from 'dayjs'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    <Link href="/">
                        <img className="w-auto h-7" src="/logo/logo-only-photo.svg" alt="积木库 - 按需定制, 移动端优先疯狂建站师"
                            title="积木库 - 按需定制, 移动端优先疯狂建站师" />
                    </Link>

                    <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400 font-light">按需定制, 移动端优先疯狂建站师</p>

                    <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                        <Link href='https://eugle.cn' target='_blank'>
                            <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                了解更多
                            </button>
                        </Link>
                    </div>
                </div>

                <hr className="my-10 border-gray-200 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <div className="text-sm text-gray-700 font-light">
                        © Copyright {dayjs().format('YYYY')}.
                        <Link href='https://jimuku.com/' target="_blank">
                            <span className="text-gray-700 text-sm px-2 hover:text-gray-500 duration-300">
                                积木库
                            </span>
                        </Link>
                        All Rights Reserved.
                    </div>

                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <Link href='https://beian.miit.gov.cn/' target="_blank">
                            <div className="text-gray-700 text-sm hover:text-gray-500 duration-300 font-light">
                                蜀ICP备2023015175号
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}