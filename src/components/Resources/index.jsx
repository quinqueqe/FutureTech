import React from 'react'
import Card from './Card'

export default function index() {
	return (
		<div className='resources section'>
			<div className='resources__inner container'>
				<ul className='resources-cards'>
					<Card number='300' desc='Resources available'/>
					<Card number='12k' desc='Total Downloads'/>
					<Card number='10k' desc='Active Users'/>
					<Card number='100' desc='Countries Accesses Our Content '/>
				</ul>
			</div>
		</div>
	)
}
