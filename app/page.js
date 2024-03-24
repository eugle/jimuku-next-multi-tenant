/** @format */
"use client"

import Hero from './official/home/hero';
import Price from './official/home/price';
import Introduce from './official/home/introduce';
import Fading from './official/home/fading'
import Testimonials from './official/home/testimonials'

export default function Home() {

	return (
		<main>
			<Hero />
			<Price />
			{/* <Fading/>
			<Introduce/> */}
			<Testimonials />
		</main>
	);
}
