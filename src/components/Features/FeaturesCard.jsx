import React from 'react'

export default function FeaturesCard({title, desc}) {
	return (
		<li className='features-card'>
			<div className='features-card__content'>
				<h5>{title}</h5>
				<p>{desc}</p>
			</div>
		</li>
	)
}
