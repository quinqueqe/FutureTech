import React from 'react'

export default function Card({ number, desc }) {
	return (
		<li className='resources-card'>
			<h4>
				{number}
				<span>+</span>
			</h4>
			<p>{desc}</p>
		</li>
	)
}
