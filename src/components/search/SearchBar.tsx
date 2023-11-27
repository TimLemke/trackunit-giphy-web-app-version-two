import React, { useContext, useEffect, useState } from 'react';
import { GiphyContext } from '../../context/GiphyContext';

const SearchBar = () => {
	// Accessing relevant state and functions from GiphyContext
	const { gifSearchTerm, clearSearch } = useContext(GiphyContext);
	const [searchTerm, setSearchTerm] = useState(gifSearchTerm);
	const { searchForGifs, resetSearch } = useContext(GiphyContext);

	// Function to handle form submission
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Call searchForGifs function if the search term is not empty
		if (searchTerm !== '') {
			searchForGifs(searchTerm);
		}
	};

	// Function to reset search values
	const resetSearchValues = () => {
		resetSearch();
	};

	// Effect to update the local state when clearSearch changes
	useEffect(() => {
		if (clearSearch) {
			setSearchTerm('');
		}
	}, [clearSearch]);

	return (
		// Container for the search bar and reset button
		<div className='d-flex flex-row justify-content-end align-items-cetner'>
			{/* Form for searching Giphy */}
			<form className='search-bar d-flex w-100 me-2' onSubmit={handleSubmit}>
				{/* Visually hidden label for accessibility */}
				<label htmlFor='giphySearch' className='visually-hidden'>
					Giphy Search
				</label>
				{/* Input field for entering the search term */}
				<input
					id='giphySearch'
					className='form-control me-2'
					type='search'
					placeholder='Giphy Search'
					aria-label='Giphy Search'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				{/* Submit button for triggering the search */}
				<button className='btn btn-success' type='submit'>
					Search
				</button>
			</form>
			{/* Button for resetting search values */}
			<button
				className='btn btn-outline-danger'
				onClick={() => resetSearchValues()}
			>
				Reset
			</button>
		</div>
	);
};

export default SearchBar;
