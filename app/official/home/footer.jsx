'use client'

import dayjs from 'dayjs'
import Link from 'next/link'

const navigation = {
    solutions: [
      { name: '免费注册', href: '#' },
      { name: '登陆', href: '#' },
      { name: '组件', href: '#' },
      { name: '控制面板', href: '#' },
    ],
    support: [
      { name: '联合分销', href: '#' },
      { name: '投资人', href: '#' },
      { name: '合作伙伴', href: '#' }
    ],
    company: [
      { name: '文档', href: '#' },
      { name: '教程', href: '#' },
      { name: '社群', href: '#' },
    ],
    legal: [
      { name: '关于我们', href: '#' },
      { name: '动态', href: '#' },
      { name: '招聘', href: '#' },
      { name: '隐私策略', href: '#' },
    ],
    social: [
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      
    ],
  }
  
  export default function Example() {
    return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <img
                className="h-7"
                src="/logo/logo-only-photo.svg" 
                alt="积木库 - 移动端优先的免费自助建站平台"
                title="积木库 - 移动端优先的免费自助建站平台"
              />
              <p className="text-sm leading-6 text-gray-600">
                积木库 - 移动端优先的免费自助建站平台
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">快速构建</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">生态协作</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">学习</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">公司</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            
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

                    <div className="flex mt-3 sm:mt-0">
                        <Link href='https://beian.miit.gov.cn/' target="_blank">
                            <div className="text-gray-700 text-sm hover:text-gray-500 duration-300 font-light">
                                蜀ICP备2023015175号
                            </div>
                        </Link>
                    </div>
                </div>
          </div>
        </div>
      </footer>
    )
  }
  