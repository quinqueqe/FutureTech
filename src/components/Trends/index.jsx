import React from 'react'
import Card from './Card'
import trendsDb from './TrendsDb.json'

export default function index() {
	return (
		<div className='trends section'>
			<div className='trends__inner container'>
				<ul className='trends-cards'>
					{trendsDb.map((card, i) => (
						<Card {...card} key={i} />
					))}
				</ul>
			</div>
		</div>
	)
}
