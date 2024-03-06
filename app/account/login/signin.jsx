
"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();


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
                            <input id="username" name="username" type="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-4 text-gray-900">
                                密码
                            </label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                    <div>
                        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                        >
                            立即登陆
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