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

// import { gql } from "@apollo/client";
// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

// const GET_LATEST_PRODUCTS = gql`
// 	query HomepageProducts {
// 	  products {
// 		id
// 		...ProductCardProductFragment
// 	  }
// 	}
// 	${ProductCard.fragments.ProductCardProductFragment}
//   `;

export default function Home() {
	const [user] = useState('');

	// const { data } = useSuspenseQuery(GET_LATEST_PRODUCTS, {
	// 	fetchPolicy: "cache-first",
	// });

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
