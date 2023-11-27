import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { GiphyProvider } from './context/GiphyContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';

function App() {
	return (
		<GiphyProvider>
			<div className='App container-fluid'>
				<BrowserRouter>
					<Navbar />
					<div className='pages container'>
						<div className='row'>
							<div className='col-12'>
								<Routes>
									<Route path='/' element={<Home />} />
									<Route path='/about' element={<About />} />
									<Route path='/contact' element={<Contact />} />
								</Routes>
							</div>
						</div>
					</div>
				</BrowserRouter>
			</div>
		</GiphyProvider>
	);
}

export default App;
