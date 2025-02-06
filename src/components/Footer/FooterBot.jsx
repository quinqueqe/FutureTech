import React from 'react'
import link1 from '../../img/footer/1.png'
import link2 from '../../img/footer/2.png'
import link3 from '../../img/footer/3.png'

export default function FooterBot() {
  return (
	<div className='footer__inner-bot'>
		<div>
			<p>Terms & Conditions <b>Privacy Policy</b></p>
		</div>
		<div className="footer__inner-bot-socials">
			<button><img src={link1} alt="img" /></button>
			<button><img src={link2} alt="img" /></button>
			<button><img src={link3} alt="img" /></button>
		</div>
		<h5>© 2024 FutureTech. All rights reserved.</h5>
	</div>
  )
}
