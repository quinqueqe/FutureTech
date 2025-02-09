import React from 'react'
import FooterTopItem from './FooterTopItem'

export default function FooterTop() {
	return (
		<div className='footer__inner-top'>
			<div className='footer-home footer-list'>
				<FooterTopItem
					title='Home'
					btn1='Features'
					btn2='Blogs'
					btn3='Resources'
					btn4='Testimonials'
					btn5='Contact Us'
					btn6='Newsletter'
				/>
			</div>
			<div className='footer-news footer-list'>
				<FooterTopItem
					title='News'
					btn1='Trending Stories'
					btn2='Featured Videos'
					btn3='Technology'
					btn4='Health'
					btn5='Politics'
					btn6='Environment'
				/>
			</div>
			<div className='footer-blogs footer-list'>
				<FooterTopItem
					title='Blogs'
					btn1='Quantum Computing'
					btn2='AI Ethics'
					btn3='Space Exploration'
					btn4='Biotechnology'
					btn5='Renewable Energy'
					btn6='Biohacking'
				/>
			</div>
			<div className='footer-podasts footer-list'>
				<h6 className='footer-title hover-desc-yellow'>Podcasts</h6>
				<button className='footer-btn hover-desc-yellow'>AI Revolution</button>
				<button className='footer-btn hover-desc-yellow'>AI Revolution</button>
				<button className='footer-btn hover-desc-yellow'>TechTalk AI</button>
				<button className='footer-btn hover-desc-yellow'>AI Conversations</button>
			</div>
			<div className='footer-resources '>
				<div>
				<h6 className='footer-title hover-desc-yellow'>Resources</h6>
				</div>
				<div className="footer-resources-btns">
				<button className='footer-resources__btn footer-resources__btn-1 main-hover-yellow'>
					Whitepapers
				</button>
				<button className='footer-resources__btn footer-resources__btn-2 main-hover-yellow'>
					Ebooks
				</button>
				<button className='footer-resources__btn footer-resources__btn-3 main-hover-yellow'>
					Reports
				</button>
				<button className='footer-resources__btn footer-resources__btn-4 main-hover-yellow'>
					Research Papers
				</button>
				</div>
			</div>
		</div>
	)
}
