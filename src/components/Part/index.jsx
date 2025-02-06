import React from 'react'
import logo from '../../img/part/Logo.png'
import PartItem from './PartItem'

export default function index() {
	return (
		<div className='part section'>
			<div className='part__inner container'>
				<div className='part-header'>
					<img src={logo} alt='img' />
					<div className='part-header__desc'>
						<h6>Learn, Connect, and Innovate</h6>
						<h3>Be Part of the Future Tech Revolution</h3>
						<p>
							Immerse yourself in the world of future technology. Explore our
							comprehensive resources, connect with fellow tech enthusiasts, and
							drive innovation in the industry. Join a dynamic community of
							forward-thinkers.
						</p>
					</div>
				</div>

				<ul className='part-list'>
					<PartItem title='Resource Access' desc='Visitors can access a wide range of resources, including ebooks, whitepapers, reports.'/>
					<PartItem title='Community Forum' desc='Join our active community forum to discuss industry trends, share insights, and collaborate with peers.'/>
					<PartItem title='Tech Events' desc='Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.'/>
				</ul>
			</div>
		</div>
	)
}
