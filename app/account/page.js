/** @format */

'use client';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {PulseLoader} from 'react-spinners';

import basePath from "@/app/imports/utils/config";

async function getData(token) {
    const res = await fetch(`${basePath}/auth/me`, {
        method: 'GET',
        headers: {
            "x-tenant": "www",
            "Content-Type": "application/json",
            "authorization": "Bearer "+token
        }
    })
   
    return res.json()
}

export default function Account() {
    const [user, setUser] = useState('');
    const [loaded, setLoaded] = useState(true);

    const router = useRouter()

    const getUser = () => {
        if(window !== "undefined"){
            const historyUser = localStorage.getItem('UserToken') || '';
            
            if(!historyUser){
                router.replace('/account/login');
            }

            getData(historyUser).then(res => {
                if(res.statusCode === 401){
                    localStorage.setItem('UserToken', '')
                }else{
                    setUser(res);
                }
            });

            setLoaded(false);
        }
    };

    useEffect(() => {
        getUser()
    },[]);

    const logout= () => {
        if(window !== "undefined"){
            localStorage.setItem('UserToken', '')
            router.replace('/account/login');
        }
    };

    if(loaded){
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <PulseLoader
                    color="#ccc"
                    margin={1}
                    size={8}
                    speedMultiplier={1}
                />
            </div>
        )
    }

	return (
		<>
            <div className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8 border-b-[1px] border-gray-200">
                <div className='p-36'>
                    <div className=''>
                        <div>欢迎回来: {user.name}</div>
                        <div className='text-sm leading-8 text-gray-500'>构建功能即将上线，敬请期待</div>
                        <div>
                            <button className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                    type="button" onClick={() => logout()}
                                >
                                    退出登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
}
