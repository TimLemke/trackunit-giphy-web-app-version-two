import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JS

import { GiphyProvider } from './context/GiphyContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
	return (
		// Wrap the entire app with GiphyProvider to provide context to components
		<GiphyProvider>
			{/* Main App Container */}
			<div className='App d-flex flex-column h-100'>
				{/* BrowserRouter for handling client-side navigation */}
				<BrowserRouter>
					{/* Navbar Component for app navigation */}
					<Navbar />
					{/* Container for pages */}
					<div className='pages container flex-shrink-0'>
						<div className='row'>
							<div className='col-12'>
								{/* Define routes for different pages */}
								<Routes>
									{/* Home page route */}
									<Route path='/' element={<Home />} />
									{/* About page route */}
									<Route path='/about' element={<About />} />
									{/* Contact page route */}
									<Route path='/contact' element={<Contact />} />
								</Routes>
							</div>
						</div>
					</div>
					{/* Footer Component */}
					<Footer />
				</BrowserRouter>
			</div>
		</GiphyProvider>
	);
}

export default App;
