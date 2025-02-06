import React from 'react'

export default function VisualItem({ img, title, desc }) {
	return (
		<li className='visual-item'>
			<img src={img} alt='img' />
			<h5>{title}</h5>
			<p>{desc}</p>
		</li>
	)
}
