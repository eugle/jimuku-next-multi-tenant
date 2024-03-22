'use client'

import { useState } from 'react';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { GET_COMPONENT_LIST } from '@/app/imports/gql/get-component-list'
import Item from './item'

export default function Block(){
    const [start,setStart] = useState(0);
    const [limit,setLimit] = useState(10);
    const [sort,setSort] = useState(["id:asc"]);

    const { data:{components:{data,meta}={}}={} } = useSuspenseQuery(GET_COMPONENT_LIST,{
        variables: {
            sort,
            pagination: {
                start,
                limit
            },
            filters: {
                web_component_tags: {
                  title: {
                    eq: "英雄"
                  }
                }
              }
        }
    });
    const total = meta?.pagination.total || 0;
    const isMore = total > (start + limit);

    const handlePaginationParent = () => {
        const currentStart = start - limit;
        setStart(currentStart < 10 ? 0 : currentStart)
    };

    const handlePaginationNext = () => {
        setStart(10)
    };

    return (
        <>
         {data?.length > 0 && data.map(item => (
            <div className="bg-white py-12 sm:py-18" key={item.id}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className='py-4'>
                        {item.attributes.title}
                    </div>
                    <div className="border-gray-300 border-[1px] rounded-lg overflow-hidden relative">
                        <Item item={item.attributes}/>
                    </div>
                </div>
            </div>
          ))}
        <div className="bg-white mx-auto max-w-7xl px-6 lg:px-8">
            <div
                className="flex items-center justify-between border-t border-gray-200 py-3"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    当前显示 <span className="font-medium">{start}</span> 到 <span className="font-medium">{start + limit}</span> 总共
                    <span className="font-medium">{meta?.pagination.total || 0}</span>
                </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                {start !== 0 && (
                    <button onClick={handlePaginationParent}
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                    >
                        上一页
                    </button>
                )}
                {
                    isMore && (
                        <button onClick={handlePaginationNext}
                        className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                    >
                        下一页
                </button>
                    )
                }
                </div>
            </div>    
          </div>
        </>   
    )
}