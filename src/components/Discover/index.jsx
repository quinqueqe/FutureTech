import React from 'react'
import HeaderBlock from '../../elements/Header-Block'
import ExploreTabs from './ExploreTabs'
import ExploreDb from './ExploreDb.json'
import ExploreMessage from './ExploreMessage'

export default function Discover() {

	return (
		<>
			<HeaderBlock
				desc='Welcome to Our News Hub'
				title='Discover the World of Headlines'
				button='View All News'
			/>
			<div className='explore section'>
				<div className='explore__inner container'>
					<ExploreTabs />
					<ul className='explore__messages'>
						{ExploreDb.map((item,i) => (<ExploreMessage key={i} {...item}/>))}
					</ul>
				</div>
			</div>
		</>
	)
}
