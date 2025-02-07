import React from 'react'

export default function Input({ title, type, placeholder, classNameInput }) {
	return (
		<div>
			<h4>{title}</h4>
			<input className={`touch-input ${classNameInput}`} type={type} placeholder={placeholder} />
		</div>
	)
}
