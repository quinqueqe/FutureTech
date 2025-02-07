import React from 'react'
import ReportsHeader from './ReportsHeader'
import Card from './Card'
import reportsDb from './ReportsDb.json'

export default function index() {
	return (
		<div className='reports section'>
			<ReportsHeader />
			<div className="reports__inner container">
			{reportsDb.map((card, i) => (
				<Card {...card} key={i} />
			))}
			</div>
		</div>
	)
}
