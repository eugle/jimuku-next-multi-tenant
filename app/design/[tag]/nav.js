'use client'

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { GET_COMPONENT_TAG } from '@/app/imports/gql/get-component-tag'
import { useRouter } from "next/navigation"
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Nav({tag}) {

    const { data:{componentTags:{data}={}}={} } = useSuspenseQuery(GET_COMPONENT_TAG, {
      skip: !tag,
      variables: {
        pagination: {
          limit: 20
        },
      }
    });

    const router = useRouter();
    const handleSwitch = (e) => {
      router.push(`/design/${data.find(({attributes:tab}) => tab.title === e.target.value).attributes.identity}`)
    };

    const handleClick = (params) => {
      router.push(`/design/${params}`)
    };

    return (
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={data.find(({attributes:tab}) => tab.identity === tag).title}
            onChange={(e) => handleSwitch(e)}
          >
            {data?.length > 0 && data.map(({attributes:tab}) => (
              <option key={tab.title}>
                {tab.title}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b flex flex-row border-gray-200">
            <div className="flex flex-1 text-sm font-medium items-center">
              选择组件类型
            </div>
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {data?.length > 0 && data.map(({attributes:tab}) => (
                <button
                  key={tab.title}
                  className={classNames(
                    tab.identity === tag
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                  )}
                  aria-current={tab.identity === tag ? 'page' : undefined}
                  onClick={() => handleClick(tab.identity)}
                >
                  {tab.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }
  