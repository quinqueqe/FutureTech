import React from 'react'
import BtnsPost from '../../elements/BtnsPost'

export default function Card({ img, title, desc, likes, links }) {
	return (
		<li className='newsCards-card'>
			<img src={img} alt='img' />
			<h5>{title}</h5>
			<h3>{desc}</h3>
			<div className='newsCards-card__bot'>
				<div className='newsCards-card__bot-btns'>
					<BtnsPost likes={likes} links={links} />
				</div>
				<button className='newsCards-card__bot-btns-btn main-hover-yellow'>
					Read More
				</button>
			</div>
		</li>
	)
}
