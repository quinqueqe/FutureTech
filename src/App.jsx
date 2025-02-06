import React from 'react'
import { Route, Routes } from 'react-router-dom'

// общие блоки
import Header from './components/Header'
import Footer from './components/Footer'

// страницы
import Home from './pages/Home'
import News from './pages/News'
import Podcasts from './pages/Podcasts'
import Resources from './pages/Resources'
import ContactUs from './pages/ContactUs'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/FutureTech' element={<Home />} />
				<Route path='/FutureTech/news' element={<News />} />
				<Route path='/FutureTech/podcasts' element={<Podcasts />} />
				<Route path='/FutureTech/resources' element={<Resources />} />
				<Route path='/FutureTech/contact-us' element={<ContactUs />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
