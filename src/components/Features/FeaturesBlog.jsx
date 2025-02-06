import React from 'react'
import img1 from '../../img/features/icon1.png'
import FeaturesCard from './FeaturesCard'

export default function FeaturesBlog() {
	return (
		<>
			<div className='features-content__blog-inner line-bot'>
				<div className='features-content__blog-inner-left'>
					<img src={img1} alt='img' />
					<h4>Future Technology Blog</h4>
					<p>
						Stay informed with our blog section dedicated to future technology.
					</p>
				</div>
				<ul className='features-content__blog-inner-right'>
					<FeaturesCard
						title='Quantity'
						desc='Over 1,000 articles on emerging tech trends and breakthroughs.'
					/>
					<FeaturesCard
						title='Variety'
						desc='Articles cover fields like AI, robotics, biotechnology, and more.'
					/>
					<FeaturesCard
						title='Frequency'
						desc='Fresh content added daily to keep you up to date.'
					/>
					<FeaturesCard
						title='Authoritative'
						desc='Written by our team of tech experts and industry professionals.'
					/>
				</ul>
			</div>
		</>
	)
}
