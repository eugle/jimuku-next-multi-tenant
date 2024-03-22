'use client'

import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    // '独立域名和配置服务 (.com/.cn)',
    // 'ICP代备案服务',
    '证书部署，免费部署SSL加密安全协议',
    '在线客服，一对一在线工单问答服务',
    '实名认证，仅限中小企业用户',
    '内容审核，确保内容合规合法',
]

export default function Price({user}) {
    return (
        <div className="bg-white py-10 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        无隐性费用
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 font-light">
                        积木库为降低使用成本，在不绑定独立域名的情况下，将一直免费，不收取任何费用，认证后即可正式上线
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                            专业版费用
                        </h3>
                        <p className="mt-6 text-base leading-7 text-gray-600 font-light">
                            专业版可绑定独立域名，赠送免费SSL加密证书，并免费开通和部署上线。
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">包含的服务</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">每年仅需</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">￥298</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">RMB</span>
                                </p>
                                <a
                                    href={user?"/website/create":"/account/register"}
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-4 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {user?'快速创建':'免费注册'}
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600 font-light">
                                    提供发票和收据，方便公司报销
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
