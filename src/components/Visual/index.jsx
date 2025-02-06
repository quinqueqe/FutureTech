import React from 'react'
import HeaderBlock from '../../elements/Header-Block'
import VisualItem from './VisualItem'
import VisualDb from './VisualDb.json'

export default function index() {
	return (
		<>
			<HeaderBlock
				desc='Featured Videos'
				title='Visual Insights for the Modern Viewer'
				button='View All'
				classBtn='width146'
			/>
			<div className='visual section'>
				<div className='visual__inner container'>
					<ul className='visual-items'>
						{VisualDb.map((item, i) => (
							<VisualItem key={i} {...item} />
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
