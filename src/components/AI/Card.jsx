import React from 'react'
import imgStar from '../../img/ai/star.png'
import BtnVideoPlay from '../../elements/BtnVideoPlay'

export default function Card({
	leftImg,
	leftTitle,
	leftMiniTitle,
	leftMiniDesc,
	rightImg,
	rightTitle,
	rightDesc,

	rightDesc1,
	rightDesc2,
	rightDesc3,
}) {
	return (
		<li className='ai-card'>
			<div className='ai-card__left'>
				<img src={leftImg} alt='img' />
				<div className='ai-card__left-stars'>
					<h4>{leftTitle}</h4>
					<div className='ai-card__left-stars-block'>
						<img src={imgStar} alt='img' />
						<img src={imgStar} alt='img' />
						<img src={imgStar} alt='img' />
						<img src={imgStar} alt='img' />
						<img src={imgStar} alt='img' />
					</div>
				</div>

				<div className='ai-card__mini'>
					<div>
						<h6>{leftMiniTitle}</h6>
						<h5>{leftMiniDesc}</h5>
					</div>
					<button className='ai-card__mini-btn main-hover-yellow'>Listen Podcast</button>
				</div>
			</div>
			<div className='ai-card__right'>
				<div className='ai-card__right-img'>
					<img src={rightImg} alt='img' />
					<BtnVideoPlay className='ai-card__right-img-btn'/>
				</div>
				<h3>{rightTitle}</h3>
				<p>{rightDesc}</p>
				<div className='ai-card__right-cards'>
					<div className='ai-card__miniRight'>
						<h6>Total Episodes</h6>
						<h5>{rightDesc1}</h5>
					</div>
					<div className='ai-card__miniRight'>
						<h6>Average Episode Length</h6>
						<h5>{rightDesc2}</h5>
					</div>
					<div className='ai-card__miniRight'>
						<h6>Release Frequency</h6>
						<h5>{rightDesc3}</h5>
					</div>
				</div>
			</div>
		</li>
	)
}
