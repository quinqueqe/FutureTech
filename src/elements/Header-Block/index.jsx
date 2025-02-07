import React from 'react'

export default function index({ desc, title, button, classBtn, classTitle, classBlock }) {
	return (
		<div className={`header-block ${classBlock}`}>
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
