import React from 'react'
import PlayBtn from '../BtnVideoPlay'

export default function index({ img, time, className,classMain }) {
	return (
		<div className={`videoBlock ${classMain}`}>
			<img className={className} src={img} alt='img' />
			<div className='videoBlock__inner'>
				<div className='videoBlock-playBtn'>
					<PlayBtn />
				</div>
				<div className='videoBlock-time'>
					<h6>{time}</h6>
				</div>
			</div>
		</div>
	)
}
