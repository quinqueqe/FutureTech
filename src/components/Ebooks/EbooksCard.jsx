import React from 'react'


export default function EbooksCard({
	leftLogo,
	leftTitle,
	leftDesc,
	leftIcon1,
	leftIcon2,
	leftIcon3,
	leftIcon4,
	rightTitle,
	rightDesc,
	rightImg,
	totalTitle,
	totalDesc,
	downloadTitle,
	downloadDesc,
	averageTitle,
	averageDesc,
}) {
	return (
		<li className='ebooks-card'>
			<div className='ebooks-card__left'>
				<img src={leftLogo} alt='img' />
				<h3>{leftTitle}</h3>
				<p>{leftDesc}</p>
				<button className='main-hover-yellow'>Download Ebooks Now</button>
				<div className='ebooks-card__left-downloaded'>
					<div>
						<h6>Downloaded By</h6>
						<b>10k + Users</b>
					</div>
					<div className='journey-content__resources-content-humans-content ebooks-card__left-downloaded-icons'>
						<img src={leftIcon1} alt='img' />
						<img src={leftIcon2} alt='img' />
						<img src={leftIcon3} alt='img' />
						<img src={leftIcon4} alt='img' />
					</div>
				</div>
			</div>

			<div className='ebooks-card__right'>
				<div className='ebooks-card__right-top'>
					<h5>{rightTitle}</h5>
					<h4>{rightDesc}</h4>
				</div>
				<img src={rightImg} alt='img' />
				<div>
					<div className='ebooks-card__right-two'>
						<div className='ebooks-card__right-total'>
							<h6>{totalTitle}</h6>
							<p>{totalDesc}</p>
						</div>
						<div className='ebooks-card__right-download'>
							<div>
								<h6>{downloadTitle}</h6>
								<p>{downloadDesc}</p>
							</div>
							<div>
								<button className='main-hover-yellow'>Preview</button>
							</div>
						</div>
					</div>
					<div className='ebooks-card__right-average'>
						<h6>{averageTitle}</h6>
						<p>{averageDesc}</p>
					</div>
				</div>
			</div>
		</li>
	)
}
