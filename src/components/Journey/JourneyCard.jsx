import React from 'react'

export default function JourneyCard({ img, title, subtitle, desc }) {
	return (
		<li className='journeyCard'>
			<div className='journeyCard-top'>
				<img src={img} alt='img' />
			</div>
			<div className='journeyCard-center'>
				<div className='journeyCard-center__left'>
					<h5>{title}</h5>
					<b>{subtitle}</b>
				</div>
				<div>
					<button></button>
				</div>
			</div>
			<div className='journeyCard-bot'>
				<p>{desc}</p>
			</div>
		</li>
	)
}
