import React from 'react'

export default function ExploreTabs() {
	const tabsDb = [
		'All',
		'Technology',
		'Politics',
		'Health',
		'Environment',
		'Sports',
	]

	const [activeTab, setActiveTab] = React.useState(0)
	return (
		<ul className='explore__tabs'>
			{tabsDb.map((tab, i) => (
				<li
					className={
						activeTab === i
							? `explore__tabs-tab-active`
							: 'explore__tabs-tab'
					}
					key={i}
					onClick={() => setActiveTab(i)}
				>
					{tab}
				</li>
			))}
		</ul>
	)
}
