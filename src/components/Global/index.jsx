import React from 'react'
import BtnsPost from '../../elements/BtnsPost'

import img from '../../img/global/Image.png'

export default function Global() {
	return (
		<div className='global section'>
			<div className='global__inner container'>
				<img className='global__inner-img' src={img} alt='img' />
				<div className='global-content__right'>
					<h3>Global Climate Summit Addresses Urgent Climate Action</h3>
					<p className='desc'>
						World leaders gathered at the Global Climate Summit to discuss
						urgent climate action, emissions reductions, and renewable energy
						targets.
					</p>
					<div className='global-content__center'>
						<div>
							<p className='desc'>Category</p>
							<h2 className='title'>Environment</h2>
						</div>
						<div>
							<p className='desc'>Publication Date</p>
							<h2 className='title'>October 10, 2023</h2>
						</div>
						<div>
							<p className='desc'>Author</p>
							<h2 className='title'>Jane Smith</h2>
						</div>
					</div>
					<div className='global-content__bot'>
						<div className='global-content__bot-btns'>
							<BtnsPost likes='14k' links='204'/>
						</div>
						<button className='global-content__bot-btn  main-hover-yellow'>
							Read More
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
