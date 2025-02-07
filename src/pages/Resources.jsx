import React from 'react'
import HeroBlock from '../elements/Hero-Block'
import Resources from '../components/Resources'
import Reports from '../components/Reports'
import Trends from '../components/Trends'
import Part from '../components/Part'

export default function index() {
	return (
		<>
			<HeroBlock
				titleTop='Unlock a World of '
				titleBot='Knowledge'
				desc='Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether youre an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.'
			/>
			<Resources />
			<Reports />
			<Trends />
			<Part />
		</>
	)
}
