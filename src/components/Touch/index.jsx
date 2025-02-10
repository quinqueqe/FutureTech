import React from 'react'
import logo from '../../img/touch/logo.png'
import Input from './Input'

export default function Touch() {
	const [activeCheckBox, setActiveCheckBox] = React.useState(false)
	return (
		<div className='touch section'>
			<div className='touch__inner container'>
				<div className='touch-content'>
					<div className='touch-left'>
						<img className='touch-left__logo' src={logo} alt='img' />
						<h5>Get in Touch with AI Podcasts</h5>
					</div>
					<form className='touch-right'>
						<div className='touch-right__names'>
							<Input
								title='First Name'
								type='text'
								placeholder='Enter First Name'
							/>
							<Input
								title='Email'
								type='email'
								placeholder='Enter your Email'
							/>
						</div>
						<div className='touch-right__emailToNum'>
							<Input
								title='Last Name'
								type='text'
								placeholder='Enter Last Name'
							/>
							<Input
								title='Phone Number'
								type='tel'
								placeholder='Enter Phone Number'
							/>
						</div>
						<div className='touch-right__message'>
							<Input
								classNameInput='touch-right__message-input'
								title='Message'
								placeholder='Enter your Message'
							/>
						</div>
						<div className='touch-right__bot'>
							<div
								onClick={() => setActiveCheckBox(!activeCheckBox)}
								className='touch-right__bot-checkboxBlock'
							>
								<input
									className={
										activeCheckBox ? 'touch-checkbox-active' : 'touch-checkbox'
									}
									type='checkbox'
								/>
								<h3>I agree with Terms of Use and Privacy Policy</h3>
							</div>
							<button>Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
