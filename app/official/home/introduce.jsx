"use client";

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: '上线快',
        description:
            '从注册到上线，最快30分钟。以移动端适配优先，紧跟用户使用习惯。',
        icon: CloudArrowUpIcon,
    },
    {
        name: '极简风',
        description:
            '极简设计，使官网清爽简洁，内容清晰明了，放弃华而不实，回归本质。',
        icon: LockClosedIcon,
    },
    {
        name: '易更新',
        description:
            '任何时候，都可以快速更新和迭代网站内容，何必假手于人，自己来更方便。',
        icon: ArrowPathIcon,
    },
    {
        name: '易使用',
        description:
            '使用操作，尽量简单，降低学习门槛，所见即所得，快速轻松上手。',
        icon: FingerPrintIcon,
    },
]

export default function Introduce() {
    return (
        <div className="bg-white py-10 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-light leading-7 text-indigo-600">极简官网，快速上线</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        不用任何专业基础
                    </p>
                    <p className="mt-6 text-lg font-light leading-8 text-gray-600">
                        无需编程，不用懂设计和代码，更不用任何做网站的专业知识。会打字，会组织内容即可完成网站建设
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
