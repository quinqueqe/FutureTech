import React from 'react'
import HeaderBlock from '../../elements/Header-Block'
import WordsItem from './WordsItem'
import WordsDb from './WordsDb.json'

export default function index() {
	return (
		<>
			<HeaderBlock
				desc='What Our Readers Say'
				title='Real Words from Real Readers'
				button='View All Testimonials'
				classBtn='width250'
			/>

			<div className='words section'>
				<div className='words__inner container'>
					<ul className='words-list'>
						{WordsDb.map((item, i) => (
							<WordsItem key={i} {...item} />
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
