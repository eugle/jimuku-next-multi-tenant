"use client";

import { useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import basePath from "@/app/utils/config";
import cogoToast from '@successtar/cogo-toast';

async function login(data) {
    const res = await fetch(`${basePath}/auth/login`, {
        method: 'POST',
        headers: {
            "x-tenant": "www",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
   
    return res.json()
}

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [desabled, setDesabled] = useState('');

    const refusername = useRef(null);
    const refpassword = useRef(null);

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        try{
            if(username?.length < 3){
                cogoToast.error('登陆名至少需要3个字符!');
                refusername.current?.focus();
                refusername.current?.select();
                return false;
            }

            if(password?.length < 6){
                cogoToast.error('密码至少需要6个字符!');
                refpassword.current?.focus();
                refpassword.current?.select();
                return false;
            }
            setDesabled('desabled');
            const data = await login({name: username, password})
            if(data.status === 401) {
                cogoToast.error('用户或密码不正确，请重试!');
                setDesabled('');
                setUsername('');
                setPassword('');
            }else{
                cogoToast.error('恭喜,登陆成功!');

                if(window !== "undefined"){
                    localStorage.setItem('UserToken', data.access_token);
                }
                setDesabled('');
                router.replace('/account');
            }
            
        }catch (err) {
            console.log(err)
            console.log('Error: ',err?.response?.data);
        }

    };

    return (
        <div className="flex flex-1 min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Link href='/'>
                    <img className="mx-auto h-8 w-auto" src="/logo/logo-only-photo.svg" alt="Jimuku" />
                </Link>
                <h2 className="mt-10 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
                    登陆
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-4 text-gray-900">
                            登陆名
                        </label>
                        <div className="mt-2">
                            <input ref={refusername} desabled={desabled} id="username" name="username" type="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-4 text-gray-900">
                                密码
                            </label>
                        </div>
                        <div className="mt-2">
                            <input ref={refpassword} desabled={desabled} id="password" name="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button className={`${desabled ? 'bg-gray-400 hover:bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-500'} flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            type={desabled ? 'button' : "submit"}
                        >
                            {desabled ? '正在登录，请稍等...' : '立即登录'}
                        </button>
                    </div>
                </form>

                <div className="mt-10 text-center text-sm text-gray-500">
                    <div className="p-4">
                        没有账户?
                    </div>
                    <div>
                        <Link href='/account/register'>
                            <button className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                type="button"
                            >
                                去注册
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}