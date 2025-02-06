import React from 'react'
import line from '../../img/part/line.png'
export default function PartItem({ title, desc }) {
	return (
		<li className='part-item'>
			<div className='part-item__top'>
				<h4>{title}</h4>
				<div className='part-item__imgBlock'>
					<img src={line} alt='img' />
				</div>
			</div>
			<p>{desc}</p>
		</li>
	)
}
