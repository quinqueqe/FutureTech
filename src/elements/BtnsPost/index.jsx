import React from 'react'
import heartImg from '../../img/explore/heart.png'
import heartActiveImg from '../../img/explore/activeHeart.png'
import linkImg from '../../img/explore/link.png'

export default function BtnsPost({ likes, links }) {
	const [activeHeart, setActiveHeart] = React.useState(true)

	return (
		<>
			<button
				onClick={() => setActiveHeart(!activeHeart)}
				className='explore__message-links-link main-hover-yellow'
			>
				<img src={activeHeart ? heartImg : heartActiveImg} alt='img' />
				{likes}
			</button>
			<button className='explore__message-links-link main-hover-yellow'>
				<img src={linkImg} alt='img' />
				{links}
			</button>
		</>
	)
}
