/** @format */
"use client"

import Banner from './components/home/banner';
import Header from './components/home/header';
import Hero from './components/home/hero';
import Price from './components/home/price';
import Introduce from './components/home/introduce';
import Manage from './components/home/manage';
import Footer from './components/home/footer';
import {useState, useEffect} from 'react'

export default function Home() {
	const [user, setUser] = useState('');
    
    useEffect(() => {
        if(window !== "undefined"){
            setUser(localStorage.getItem('UserToken') || '');
        }
    },[]);

	return (
		<main>
			<Banner />
			<Header />
			<Hero user={user}/>
			<Price user={user}/>
			<Introduce />
			<Manage />
			<Footer />
		</main>
	);
}
