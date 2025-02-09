import React from 'react'
import { Link } from 'react-router-dom'
import headerPromo from '../../img/header/headerPromo.png'
import headerLogo from '../../img/header/headerLogo.png'

export default function Header() {
	const headerDb = ['Home', 'News', 'Podcasts', 'Resources']
	const [openHeader, setOpenHeader] = React.useState(false)
	const headerLinks = [
		'/FutureTech',
		'/FutureTech/news',
		'/FutureTech/podcasts',
		'/FutureTech/resources',
	]

	// функционал для сохранения активного таба в localStorage
	// Получаем значение активного таба из localStorage или устанавливаем по умолчанию 0
	const [activeTab, setActiveTab] = React.useState(() => {
		const savedTab = localStorage.getItem('activeTab')
		return savedTab !== null ? Number(savedTab) : 0 // Преобразуем строку в число
	})

	// Сохраняем активный таб в localStorage при изменении
	React.useEffect(() => {
		localStorage.setItem('activeTab', activeTab)
	}, [activeTab])

	return (
		<div className='header'>
			<div className={openHeader ? 'none' : 'header__promo'}>
				<button>
					Subscribe to our Newsletter For New & latest Blogs and Resources
				</button>
				<span>
					<img src={headerPromo} alt='img' />
				</span>
			</div>
			<div className='header-back'>
				<div className='header-container container'>
					<div className={openHeader ? 'header__inner-open' : 'header__inner'}>
						<Link to='/FutureTech'>
							<img src={headerLogo} alt='img' />
						</Link>
						<div className='header-btns'>
							{headerDb.map((btn, i) => (
								<Link
									to={headerLinks[i]}
									key={i}
									className={
										activeTab === i ? 'header-btn-active' : 'header-btn'
									}
									onClick={() => {
										window.scrollTo(0, 0)
										setActiveTab(i)
										setOpenHeader(false)
									}}
								>
									{btn}
								</Link>
							))}
						</div>

						<div>
							<Link
								to='/FutureTech/contact-us'
								className='header-btn-yellow'
								onClick={() => {
									setActiveTab(-1)
									setOpenHeader(false)
								}}
							>
								Contact Us
							</Link>
							<div
								onClick={() => setOpenHeader(!openHeader)}
								className='header-burger'
							>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
