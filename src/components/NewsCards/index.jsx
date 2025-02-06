import React from 'react'
import Card from './Card'

import img1 from '../../img/newsCards/1.png'
import img2 from '../../img/newsCards/2.png'
import img3 from '../../img/newsCards/3.png'

export default function index() {
	return (
		<div className='newsCards section'>
			<div className='newsCards__inner container'>
				<ul className='newsCards-cards'>
					<Card
						img={img1}
						title='A Decisive Victory for Progressive Policies'
						desc='Politics'
						likes='2.2k'
						links='60'
					/>
					<Card
						img={img2}
						title='Tech Giants Unveil Cutting-Edge AI Innovations'
						desc='Technology'
						likes='6k'
						links='92'
					/>
					<Card
						img={img3}
						title='COVID-19 Variants'
						desc='Health'
						likes='10k'
						links='124'
					/>
				</ul>
			</div>
		</div>
	)
}
