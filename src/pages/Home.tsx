import React from 'react';
import GifSearch from '../components/search/GifSearch';
import GifsDisplay from '../components/GifsDisplay';

// Home component
const Home = () => {
	return (
		<div className='home-page'>
			{/* Render the GifSearch component */}
			<GifSearch />
			{/* Render the GifsDisplay component */}
			<GifsDisplay />
		</div>
	);
};

// Export the Home component
export default Home;
