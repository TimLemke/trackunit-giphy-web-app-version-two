import React, { useContext, useEffect, useState } from 'react';
import { GiphyContext } from '../context/GiphyContext';

const GifSearch = () => {
	const { initialSearchTerm, initialAddOnText, clearSearch} =
		useContext(GiphyContext);
	const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
	const [currentAddOnText, setCurrentAddOnText] = useState(initialAddOnText);
	const [currentPosition, setCurrentPosition] = useState('center-top');
	const { searchForGifs, updateAddOnText, updateAddOnPosition } = useContext(GiphyContext);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (currentAddOnText !== '') {
			updateAddOnText(currentAddOnText);
		}
		if (currentPosition !== '') {
			updateAddOnPosition(currentPosition);
		} else {
			updateAddOnPosition(currentPosition);
		}
		if (searchTerm !== '') {
			searchForGifs(searchTerm);
		}
	};

	useEffect(() => {
		if (clearSearch) {
			setSearchTerm('');
			setCurrentAddOnText('');
			setCurrentPosition('center-top');
		}
	}, [clearSearch]);

	return (
		<div className='container my-4'>
			<div className='row'>
				<div className='col-12 mb-4'>
					<form className='d-flex' onSubmit={handleSubmit}>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Giphy Search'
							aria-label='Giphy Search'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<button className='btn btn-outline-success' type='submit'>
							Search
						</button>
					</form>
				</div>
				<div className='col-12'>
					<form className='d-flex' onSubmit={handleSubmit}>
						<input
							className='form-control me-2'
							type='text'
							placeholder='Add on Text'
							aria-label='Giphy Search'
							value={currentAddOnText}
							onChange={(e) => setCurrentAddOnText(e.target.value)}
						/>

						<select
							className='form-select'
							aria-label='Default select example'
							onChange={(e) => setCurrentPosition(e.target.value)}
						>
							<option value='center-top'>Center Top</option>
							<option value='center-bottom'>Center Bottom</option>
							<option value='below-image'>Below Image</option>
						</select>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GifSearch;
