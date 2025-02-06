import React from 'react'
import HeaderBlock from '../../elements/Header-Block'
import EbooksDb from './EbooksDb.json'
import EbooksCard from './EbooksCard'

export default function index() {
	return (
		<>
			<HeaderBlock
				desc='Your Gateway to In-Depth Information'
				title='Unlock Valuable Knowledge with FutureTechs Resources'
				button='View All Resources'
				classBtn='width235'
				classTitle='width1111'
			/>

			<div className='ebooks section'>
				<div className='ebooks__inner container'>
					<ul className='ebooks-cards'>
						{EbooksDb.map((item, i) => (
							<EbooksCard key={i} {...item} />
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
