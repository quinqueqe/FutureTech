import React from 'react'
import HeroBlock from '../elements/Hero-Block'
import Ai from '../components/AI'
import Episodes from '../components/Episodes'
import Part from '../components/Part'

export default function index() {
	return (
		<>
			<HeroBlock
				titleTop='Unlock the World of Artificial Intelligence '
				titleBot='through Podcasts'
				desc='Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether youre an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.'
				descClass='width900'
			/>
			<Ai />
			<Episodes />
			<Part />
		</>
	)
}
