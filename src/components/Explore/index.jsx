import React from 'react'
import HeaderBlock from '../../elements/Header-Block'
import ExploreTabs from './ExploreTabs'
import ExploreDb from './ExploreDb.json'
import ExploreMessage from './ExploreMessage'

export default function Explore() {

	return (
		<>
			<HeaderBlock
				desc='A Knowledge Treasure Trove'
				title='Explore FutureTechs In-Depth Blog Posts'
				button='View All Blogs'
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
