import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Manage() {
    return (
        <div className="relative isolate border-t-[1px] border-gray-200 overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
                            <p className="text-base font-light leading-7 text-indigo-600">功能强大的</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">云端管理系统</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700 font-light">
                                一个云端管理统一管理所有数据，随时随地都能方便地上传和更新内容，功能齐全，使用方便。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/home/dark-project-app-screenshot.jpg"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                分布式多服务器数据存储模式，使数据更安全稳定。管理系统和自助建站系统完全隔离，使前端网站代码更少，访问更快，更利于SEO收录。
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">文件管理器.</strong> 统一文件上传管理器，可管理所有上传过的文件，方便
                                        增加和删除，使用阿里云OSS文件存储，加快图片的访问速度。
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">SSL安全加密.</strong> 前后台包含图片均采用SSL加密传输协议，使内容更
                                        安全，无需任何额外费用。
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">数据备份.</strong> 定期数据备份，保持数据的完整性。一次数据上传可一直
                                        存储，直到服务终止。
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8 font-light">
                                后台管理系统在不断更新，在使用上力求易用，易操作。降低学习成本，所有管理内容都清晰明了，所见即所得，更新后，前端能即时展现最新内容。
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">功能齐全的.</h2>
                            <p className="mt-6 font-light">
                                后台内容管理系统中，包含了简介、产品、新闻、案例、作品、服务、团队、招聘、经销商、视频、下载、联系等常见内容（部份内容视前台模块确定是否展现）。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
