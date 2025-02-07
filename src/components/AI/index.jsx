import React from 'react'
import Card from './Card'
import AiDb from './AiDb.json'

export default function Ai() {
	return (
		<div className='ai section'>
			<div className='ai__inner container'>
					{AiDb.map((card, i) => (
						<Card key={i} {...card} />
					))}
			</div>
		</div>
	)
}
