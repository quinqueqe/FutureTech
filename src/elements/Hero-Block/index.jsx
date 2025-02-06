import React from 'react'

export default function index({ titleTop, titleBot, desc, descClass }) {
	return (
		<div className='hero-block section'>
			<div className='hero-block__inner container'>
				<h3>{titleTop}</h3>
				<div className='hero-block__inner-bot'>
					<h3>{titleBot}</h3>
					<p className={`${descClass} hero-block__inner-bot-desc`}>{desc}</p>
				</div>
			</div>
		</div>
	)
}
