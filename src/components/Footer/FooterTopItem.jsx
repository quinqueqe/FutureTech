import React from 'react'

export default function FooterTopItem({
	title,
	btn1,
	btn2,
	btn3,
	btn4,
	btn5,
	btn6,
}) {
	return (
		<>
			<h6 className='footer-title hover-desc-yellow'>{title}</h6>
			<button className='footer-btn hover-desc-yellow'>{btn1}</button>
			<button className='footer-btn hover-desc-yellow'>{btn2}</button>
			<button className='footer-btn hover-desc-yellow'>{btn3}</button>
			<button className='footer-btn hover-desc-yellow'>{btn4}</button>
			<button className='footer-btn hover-desc-yellow'>{btn5}</button>
			<button className='footer-btn hover-desc-yellow'>{btn6}</button>
		</>
	)
}
