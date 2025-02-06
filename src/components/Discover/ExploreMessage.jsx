import React from 'react'
// import img from '../../img/explore/1.png'
import heartImg from '../../img/explore/heart.png'
import heartActiveImg from '../../img/explore/activeHeart.png'
import messageImg from '../../img/explore/message.png'
import linkImg from '../../img/explore/link.png'

export default function ExploreMessage({
	img,
	name,
	subName,
	date,
	text,
	desc,
	likes,
	messages,
	links,
}) {
	const [activeHeart, setActiveHeart] = React.useState(true)
	return (
		<li className='explore__message'>
			<div className='explore__message-human'>
				<img src={img} alt='img' />
				<div>
					<h4>{name}</h4>
					<b>{subName}</b>
				</div>
			</div>
			<div className='explore__message-main'>
				<h6>{date}</h6>
				<p>{text}</p>
				<h3>{desc}</h3>
				<div className='explore__message-links'>
					<button
						onClick={() => setActiveHeart(!activeHeart)}
						className='explore__message-links-link main-hover-yellow'
					>
						<img src={activeHeart ? heartImg : heartActiveImg} alt='img' />
						{likes}
					</button>
					<button className='explore__message-links-link main-hover-yellow'>
						<img src={messageImg} alt='img' />
						{messages}
					</button>
					<button className='explore__message-links-link main-hover-yellow'>
						<img src={linkImg} alt='img' />
						{links}
					</button>
				</div>
			</div>
			<button className='header-block__inner-btn-dark dark-link'>
			Read More
			</button>
		</li>
	)
}
