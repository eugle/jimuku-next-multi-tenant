/** @format */

'use client';
import {useState, useEffect} from 'react';

import Header from '@/app/components/home/header';
import Footer from '@/app/components/home/footer';

import {useRouter} from 'next/navigation';
import {PulseLoader} from 'react-spinners';

import basePath from "@/app/utils/config";

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

    useEffect(() => {
        if(window !== "undefined"){
            const historyUser = localStorage.getItem('UserToken') || '';
            
            if(!historyUser){
                router.replace('/account/login');
            }

            getData(historyUser).then(res => {
                if(res.statusCode === 401){
                    localStorage.setItem('UserToken', '')
                }
                setUser(res);
            });

            setLoaded(false);
        }
    },[]);

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
			<Header />
            <div className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8 border-b-[1px] border-gray-200">
                <div className='p-36'>
                    <div className=''>
                        <div>欢迎回来: {user.name}</div>
                        <div className='text-sm leading-8 text-gray-500'>构建功能即将上线，敬请期待</div>
                    </div>
                </div>
            </div>
            <Footer />
		</>
	);
}
