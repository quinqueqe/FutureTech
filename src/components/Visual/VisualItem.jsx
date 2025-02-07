import React from 'react'
import VideoBlock from '../../elements/VideoBlock'

export default function VisualItem({ img, title, desc }) {
	return (
		<li className='visual-item'>
			<VideoBlock img={img} time='2.30 min' className='width100'/>
			<h5>{title}</h5>
			<p>{desc}</p>
		</li>
	)
}
