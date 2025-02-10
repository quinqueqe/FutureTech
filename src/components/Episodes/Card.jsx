import React from 'react'
import VideoBlock from '../../elements/VideoBlock'

export default function Card({ cardImg, title, desc }) {
	return (
		<li className='episodes-card'>
			<VideoBlock img={cardImg} time='2.30 min' classMain='width470 episodes-card-img' />
			<h5>{title}</h5>
			<p>{desc}</p>
			<button className='main-hover-yellow'>Listen Podcast</button>
		</li>
	)
}
