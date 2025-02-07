import React from 'react'
import logo from '../../img/asked/logo.png'
import Card from './Card'
import tabsDb from './TabsDb.json'

export default function Asked() {
	const [activeTab, setActiveTab] = React.useState(null); // null означает, что ни один таб не активен

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? null : index);  // Если кликнули на активный - закрыть, иначе - открыть
    };

	return (
		<div className='asked section'>
			<div className='asked__inner container'>
				<div className='asked-content'>
					<div className='asked-left'>
						<img src={logo} alt='img' />
						<h4>Asked question</h4>
						<h3>
							If the question is not available on our FAQ section, Feel free to
							contact us personally, we will resolve your respective doubts.{' '}
						</h3>
						<button className='ai-card__mini-btn main-hover-yellow'>
							Ask Qustion
						</button>
					</div>
					<ul className='asked-cards'>
            {tabsDb.map((card, index) => (
                <Card
                    key={index}
                    index={index}
                    title={card.title}
                    isActive={index === activeTab}
                    onTabClick={handleTabClick}
                />
            ))}
        </ul>
				</div>
			</div>
		</div>
	)
}
