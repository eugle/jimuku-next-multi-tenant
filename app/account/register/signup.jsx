
"use client";
import { useState } from "react";
import Link from "next/link";

async function getData() {
    const res = await fetch('http://localhost:3006/auth/me', {
        method: 'GET',
        headers: {
            "x-tenant": "www",
            "Content-Type": "application/json",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NWVkNWUwYjQ2YjhlYzVkNGZjMWUyYzEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTAwOTI0OTMsImV4cCI6MTcxMDA5NjA5M30.ePzJA41jCr7izm0WdB7yyhDW9NZHIzp9Gn3gZCKy0dw"
        },
        // body: JSON.stringify({name: 'admin', password: '123456'}),
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    // Register User
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await getData()
          console.log(data);
        //   router.replace('/profile');
        } catch (err) {
            console.log(err);
            console.log('Error: ',err?.response?.data);
        }
      }
    
    return (
        <div className="flex flex-1 min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Link href='/'>
                    <img className="mx-auto h-8 w-auto" src="/logo/logo-only-photo.svg" alt="Jimuku" />
                </Link>
                <h2 className="mt-10 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">注册</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="re-password" className="block text-sm font-medium leading-4 text-gray-900">
                                确认密码
                            </label>
                        </div>
                        <div className="mt-2">
                            <input id="re-password" name="re-password" type="password" autoComplete="current-password" value={repassword} onChange={(e) => setRePassword(e.target.value)} required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                        >
                            立即注册
                        </button>
                    </div>
                </form>

                <div className="mt-10 text-center text-sm text-gray-500">
                    <div className="p-4">
                        已有账户?
                    </div>
                    <div>
                        <Link href='/account/login'>
                            <button className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                type="button"
                            >
                                去登录
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}