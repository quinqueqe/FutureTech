import React from 'react'
import appraisal from '../../img/words/appraisal.png'

export default function WordsItem({ img, name, subName, desc }) {
	return (
		<li className='words-item'>
			<div className='words-item__top'>
				<img src={img} alt='img' />
				<div>
					<h6>{name}</h6>
					<h5>{subName}</h5>
				</div>
			</div>
			<div className='words-item-relative'>
				<div className='words-item__appraisal'>
					<img src={appraisal} alt='img' />
					<img src={appraisal} alt='img' />
					<img src={appraisal} alt='img' />
					<img src={appraisal} alt='img' />
					<img src={appraisal} alt='img' />
				</div>
				<div className='words-item__content'>
					<p>{desc}</p>
				</div>
			</div>
		</li>
	)
}
