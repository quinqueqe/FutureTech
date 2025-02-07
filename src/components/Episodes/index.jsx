import React from 'react'
import HeaderBlock from '../../elements/Header-Block'
import Card from './Card'
import EpisodesDb from './EpisodesDb.json'

export default function index() {
	return (
		<>
			<HeaderBlock
				desc='Stay Informed with Fresh Content'
				title='Latest Podcast Episodes'
				classBtn='none'
			/>
			<div className='episodes section'>
				<div className='episodes__inner container'>
					<ul className='episodes-cards'>
						{EpisodesDb.map((card, i) => (
							<Card key={i} {...card} />
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
