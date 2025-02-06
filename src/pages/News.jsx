import React from 'react'
import HeroBlock from '../elements/Hero-Block'
import Global from '../components/Global'
import NewsCards from '../components/NewsCards'
import Discover from '../components/Discover'
import Part from '../components/Part'
import Visual from '../components/Visual'

export default function index() {
	return (
		<>
			<HeroBlock
				titleTop='Todays Headlines: Stay'
				titleBot='Informed'
				desc='Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.'
			/>
			<Global />
			<NewsCards />
			<Discover />
			<Visual />
			<Part />
		</>
	)
}
