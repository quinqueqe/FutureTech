import React from 'react'
import HeaderBlock from '../../elements/Header-Block'
import FeaturesBlog from './FeaturesBlog'
import FeaturesResearch from './FeaturesResearch'

export default function index() {
	return (
		<>
			<HeaderBlock
				desc='Unlock the Power of'
				title='FutureTech Features'
				classBtn='none'
			/>
			<div className='features section'>
				<div className='features-content container'>
					<div className='features-content__blog'>
						<FeaturesBlog />
					</div>
					<div className='features-content__research'>
						<FeaturesResearch />
					</div>
				</div>
			</div>
		</>
	)
}
