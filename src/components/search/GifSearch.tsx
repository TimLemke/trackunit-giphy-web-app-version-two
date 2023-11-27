import React, { useContext } from 'react';
import { GiphyContext } from '../../context/GiphyContext';
import SearchBar from './SearchBar';

const GifSearch = () => {
	// Accessing relevant state and functions from GiphyContext
	const { addOnText } = useContext(GiphyContext);
	const { updateAddOnText, updateAddOnPosition } = useContext(GiphyContext);

	return (
		// Container for the GifSearch component with top and bottom margin
		<div className='container my-4'>
			{/* First row containing the SearchBar component */}
			<div className='row'>
				<div className='col-12 mb-2'>
					<SearchBar />
				</div>
			</div>
			{/* Second row for add-on text input and position selection */}
			<div className='row'>
				<div className='container-fluid'>
					<div className='row'>
						{/* Column for the Add On Text input */}
						<div className='col-12 col-lg-6'>
							{/* Form control for entering add-on text */}
							<div className='form-floating'>
								<input
									id='addOnText'
									className='form-control mb-2'
									type='text'
									placeholder='Add on Text'
									aria-label='Giphy Search'
									value={addOnText}
									onChange={(e) => updateAddOnText(e.target.value)}
								/>
								<label htmlFor='addOnText'>Add On Text</label>
							</div>
						</div>
						{/* Column for the Add On Position selection */}
						<div className='col-12 col-lg-6'>
							{/* Display the position selection dropdown only if add-on text is present */}
							{addOnText !== '' && (
								<div className='form-floating'>
									{/* Dropdown for selecting add-on position */}
									<select
										id='addOnPosition'
										className='form-select'
										aria-label='Default select example'
										onChange={(e) => updateAddOnPosition(e.target.value)}
									>
										<option value='center-top'>Center Top</option>
										<option value='center-bottom'>Center Bottom</option>
										<option value='below-image'>Below Image</option>
									</select>
									<label htmlFor='addOnPosition'>Add On Position</label>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GifSearch;
