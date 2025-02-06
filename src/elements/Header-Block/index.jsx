import React from 'react'

export default function index({ desc, title, button, classBtn, classTitle }) {
	return (
		<div className='header-block'>
			<div className='header-block__inner container'>
				<div>
					<button className='header-block__inner-btn'>{desc}</button>
					<p className={classTitle}>{title}</p>
				</div>
				<button className={`${classBtn} header-block__inner-btn-dark dark-link `}>
					{button}
				</button>
			</div>
		</div>
	)
}
