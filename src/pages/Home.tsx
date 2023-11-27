import React from 'react';
import GifSearch from '../components/GifSearch';
import GifsDisplay from '../components/GifsDisplay';

const Home = () => {
	return (
		<div className='container-fluid'>
			<GifSearch />
			<GifsDisplay />
		</div>
	);
};

export default Home;
