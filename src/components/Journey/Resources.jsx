import React from 'react'
import img1 from '../../img/journey/1.png'
import img2 from '../../img/journey/2.png'
import img3 from '../../img/journey/3.png'
import img4 from '../../img/journey/4.png'

export default function Resources() {
	return (
		<div className='journey-content__resources'>
			<div className='journey-content__resources-content'>
				<div className='journey-content__resources-content-humans'>
					<div className='journey-content__resources-content-humans-content'>
						<img src={img1} alt='img' />
						<img src={img2} alt='img' />
						<img src={img3} alt='img' />
						<img src={img4} alt='img' />
					</div>
				</div>
				<h5>Explore 1000+ resources</h5>
				<p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
				<button className='journey-content__resources-content-btn dark-link'>Explore Resources</button>
			</div>
		</div>
	)
}
