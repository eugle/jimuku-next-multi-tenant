/** @format */

import Link from 'next/link';
import Banner from './components/home/banner';
import Header from './components/home/header';
import Hero from './components/home/hero';
import Price from './components/home/price';
import Introduce from './components/home/introduce';
import Manage from './components/home/manage';
import Footer from './components/home/footer';

export default async function Home() {
	return (
		<main>
			<Banner />
			<Header />
			<Hero />
			<Price />
			<Introduce />
			<Manage />
			<Footer />
		</main>
	);
}
