const featuredTestimonial = {
  body: '我们很快就建立了自己的网站。无需编码并由人工智能技术提供支持，它改变了游戏规则',
  author: {
    name: '李先生',
    handle: '企业主',
    imageUrl:'/avatar/user/male(8).svg',
  },
}
const testimonials = [
  [
    [
      {
        body: '作为一名开发人员，我不知道如何为我的网站编写出色的UI界面。有了 积木库 AI，这很容易，并且已经增加了我们的 SEO 流量',
        author: {
          name: '张女仕',
          handle: '程序员',
          imageUrl:
          '/avatar/user/female(7).svg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: '整个过程很简单，有需要我会再次使用积木库。我可以每月添加新的新闻来与我的客户分享最新消息',
        author: {
          name: 'Lindsay',
          handle: '销售专员',
          imageUrl:
          '/avatar/user/male(3).svg',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: '当你是一名创业者时，时间就是金钱。 这就是为什么这个网站构建器对我来说是完美的工具。我在没有额外帮助的情况下建立了我的网站',
        author: {
          name: 'Tom',
          handle: '创业者',
          imageUrl:'/avatar/user/female(6).svg',
        },
      }
      // More testimonials...
    ],
    [
      {
        body: '有了 积木库，我能够生成自己的定制网站，只需点击几下即可。我推荐你使用积木库！',
        author: {
          name: 'Leonard',
          handle: '设计师',
          imageUrl:
            '/avatar/user/female(3).svg',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ccc] to-[#9089fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ccc] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            客户的评价
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            让更多的人通过积木库，AI网站构建器自己创建网站
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
