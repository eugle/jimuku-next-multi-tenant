"use client";

import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

export default function Banner() {
    const [hide, setHide] = useState(false);
    const [user, setUser] = useState('');
    const [loaded, setLoaded] = useState(true);
    
    useEffect(() => {
        if(window !== "undefined"){
            const historyUser = localStorage.getItem('UserToken') || '';
            setLoaded(false);
        }
    },[]);

    const changeEvent = () => {
        setHide(true);
    }

    if (hide || user || loaded) {
        return null;
    }

    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 text-white font-extralight">
                    <strong className="font-normal">全新重构版本上线在即</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    前100名注册并认证成功企业用户，获赠200元优惠券，可全额抵扣~
                </p>
                <a
                    href="/account/register"
                    className="flex-none rounded-full text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-1 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    抢先注册 <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                    onClick={() => changeEvent()}
                >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-5 w-5 text-slate-300" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
