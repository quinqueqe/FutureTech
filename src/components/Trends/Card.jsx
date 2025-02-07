import React from 'react'

export default function Card({ img, title, desc }) {
	return (
		<li className='trends-card'>
			<img src={img} alt='img' />
			<h5>{title}</h5>
			<p>{desc}</p>
			<div className='trends-card__btns'>
				<button className='trends-card-btnLeft main-hover-yellow'>
					View Details
				</button>
				<button className='trends-card-btnRight main-hover-yellow'>
					Download PDF Now
				</button>
			</div>
		</li>
	)
}
