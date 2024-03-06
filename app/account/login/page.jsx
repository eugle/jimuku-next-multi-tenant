"use client";
import { useState } from "react";
import SignIn from './signin'

const LoginPage = () => {

    return (
        <div className="flex flex-1 justify-center items-center h-screen">
            <SignIn />
        </div>
    );
};

export default LoginPage;
