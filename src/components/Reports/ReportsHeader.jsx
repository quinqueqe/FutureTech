import React from 'react'

export default function HeaderBlock() {
	const [activeTab, setActiveTab] = React.useState(0)
	const HeaderDb = ['Whitepapers', 'Ebooks', 'Reports']
	return (
		<div className='header-block'>
			<div className='reports--header container'>
				<div className='header-block__inner'>
					<div>
						<button className='header-block__inner-btn'>
							Dive into the Details
						</button>
						<p>In-Depth Reports and Analysis</p>
					</div>
				</div>
				<div className='reports--header-btns'>
					{HeaderDb.map((item, i) => (
						<button
							key={i}
							className={
								activeTab === i
									? 'reports--header-btn-active '
									: 'reports--header-btn main-hover-yellow'
							}
							onClick={() => setActiveTab(i)}
						>
							{item}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
