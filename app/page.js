/** @format */
"use client"

import Hero from './official/home/hero';
import Price from './official/home/prices';
import Introduce from './official/home/introduce';
// import Manage from './official/home/manage';

import {useState, useEffect} from 'react'

export default function Home() {
	const [user] = useState('');

	return (
		<main>
			<Hero user={user}/>
			<Price user={user}/>
			<Introduce />
			{/* <Manage /> */}
		</main>
	);
}
