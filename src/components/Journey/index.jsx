import React from 'react'
import JourneyList from './JourneyList'
import Resources from './Resources'
import JourneyCard from './JourneyCard'

import bot1 from '../../img/journey/bot1.png'
import bot2 from '../../img/journey/bot2.png'
import bot3 from '../../img/journey/bot3.png'

export default function index() {
	return (
		<div className='journey section'>
			<div className='journey__inner container'>
				<div className='journey-content'>
					<div className='journey-content__top line-bot'>
						<div className='journey-content__explore'>
							<h5>Your Journey to Tomorrow Begins Here</h5>
							<h2>Explore the Frontiers of Artificial Intelligence</h2>
							<p>
								Welcome to the epicenter of AI innovation. FutureTech AI News is
								your passport to a world where machines think, learn, and
								reshape the future. Join us on this visionary expedition into
								the heart of AI.
							</p>
							<JourneyList />
						</div>
						<Resources />
					</div>
					<ul className='journey-content__bot'>
						<JourneyCard
						img={bot1}
							title='Latest News Updates'
							subtitle='Stay Current'
							desc='Over 1,000 articles published monthly'
						/>
						<JourneyCard
						img={bot2}
							title='Expert Contributors'
							subtitle='Trusted Insights'
							desc='50+ renowned AI experts on our team'
						/>
						<JourneyCard
						img={bot3}
							title='Global Readership'
							subtitle='Worldwide Impact'
							desc='2 million monthly readers'
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}
