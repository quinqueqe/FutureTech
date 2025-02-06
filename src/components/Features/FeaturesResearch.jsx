import React from 'react'
import img1 from '../../img/features/icon2.png'
import FeaturesCard from './FeaturesCard'

export default function FeaturesBlog() {
	return (
		<>
			<div className='features-content__blog-inner line-bot'>
				<div className='features-content__blog-inner-left features-research-inner-left'>
					<img src={img1} alt='img' />
					<h4>Research Insights Blogs</h4>
					<p>
						Dive deep into future technology concepts with our research section.
					</p>
				</div>
				<ul className='features-content__blog-inner-right features-research-inner-right'>
					<FeaturesCard title='Depth' desc='500+ research articles for in-depth understanding.'/>
					<FeaturesCard title='Graphics' desc='Visual aids and infographics to enhance comprehension.'/>
					<FeaturesCard title='Trends' desc='Explore emerging trends in future technology research.'/>
					<FeaturesCard title='Contributors' desc='Contributions from tech researchers and academics.'/>
				</ul>
			</div>
		</>
	)
}
