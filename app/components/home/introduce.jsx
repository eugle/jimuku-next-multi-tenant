"use client";

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: '上线快一点',
        description:
            '让网站更快，内容更少，使客户能以尽量少的时间了解您，达到宣传展示的目的。',
        icon: CloudArrowUpIcon,
    },
    {
        name: '网站安全一点',
        description:
            '中小企业通过实名认证，绑定独立域名并通过内容审核，即获赠免费SSL加密证书。',
        icon: LockClosedIcon,
    },
    {
        name: '更新方便一点',
        description:
            '在任何时候，都可快速更新网站内容，无需假手于人，让内容更新更方便一些。',
        icon: ArrowPathIcon,
    },
    {
        name: '使用简单一点',
        description:
            '所有功能尽量做到简单，再简单，降低学习门槛，所见即所得，快速轻松上手。',
        icon: FingerPrintIcon,
    },
]

export default function Introduce() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-light leading-7 text-indigo-600">如无必要，勿增实体</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        多为初创企业考虑一点
                    </p>
                    <p className="mt-6 text-lg font-light leading-8 text-gray-600">
                        针对中小企业用户，事情做少一点，只关注真正有效的内容，以轻松快速的方式，上传内容并快速审核发布，降低沟通和时间成本
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base font-light leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
