import React from 'react'
import FooterTop from './FooterTop'
import FooterBot from './FooterBot'

export default function index() {
	return (
		<footer className='footer section'>
			<div className='footer__inner container'>
				<FooterTop />
				<FooterBot />
			</div>
		</footer>
	)
}
