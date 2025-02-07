import React from 'react'

export default function index({ className }) {
	return (
		<div className={`btnVideoPlay ${className}`}>
			<svg
				width='58'
				height='58'
				viewBox='0 0 58 58'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M0.5625 29C0.5625 13.2944 13.2944 0.5625 29 0.5625C44.7056 0.5625 57.4375 13.2944 57.4375 29C57.4375 44.7056 44.7056 57.4375 29 57.4375C13.2944 57.4375 0.5625 44.7056 0.5625 29ZM41.4663 26.1318C43.7167 27.382 43.7167 30.6183 41.4663 31.8685L25.1248 40.9471C22.9377 42.1621 20.25 40.5807 20.25 38.0788V19.9215C20.25 17.4196 22.9377 15.8381 25.1248 17.0531L41.4663 26.1318Z'
					fill='none'
				></path>
			</svg>
		</div>
	)
}
