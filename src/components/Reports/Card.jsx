import React from 'react'
// import BtnVideoPlay from '../../elements/BtnVideoPlay'

export default function Card({
	leftImg,
	leftTitle,
	leftDesc,
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
					<h4 className='ai-card__left-stars-h4'>{leftTitle}</h4>
				</div>
				<b className='ai-card__left-b'>{leftDesc}</b>
			</div>
			<div className='ai-card__right'>
				<div className='ai-card__right-img'>
					<img className='ai-card__right-img-img' src={rightImg} alt='img' />
					{/* <BtnVideoPlay className='ai-card__right-img-btn' /> */}
				</div>
				<div className='reports-right'>
					<div className='reports-right-desc'>
						<h3>{rightTitle}</h3>
						<p className='reports-right-desc-p'>{rightDesc}</p>
					</div>
					<button className='ai-card__mini-btn-download main-hover-yellow'>
						Download PDF Now
					</button>
				</div>
				<div className='ai-card__right-cards'>
					<div className='ai-card__miniRight'>
						<h6>Publication Date</h6>
						<h5>{rightDesc1}</h5>
					</div>
					<div className='ai-card__miniRight'>
						<h6>Category</h6>
						<h5>{rightDesc2}</h5>
					</div>
					<div className='ai-card__miniRight'>
						<h6>Author</h6>
						<h5>{rightDesc3}</h5>
					</div>
				</div>
			</div>
		</li>
	)
}
