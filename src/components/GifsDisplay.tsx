import React, { useContext, useEffect, useState } from 'react';
import { GiphyContext } from '../context/GiphyContext';

const GifsDisplay = () => {
	// Accessing relevant state and functions from GiphyContext
	const {
		gifs,
		gifsPerPage,
		gifSearchTerm,
		addOnText,
		addOnPosition,
		page,
		loading,
		clearSearch,
	} = useContext(GiphyContext);
	const { updatePage } = useContext(GiphyContext);

	// Local state for the display title and gifs for rendering
	const [gifDisplayTitle, setGifDisplayTitle] = useState('Trending Gifs');
	const [gifsForDisplay, setGifsForDisplay] = useState([]);

	// Function to handle page update based on the increment
	const updatePageClick = (increment: number) => {
		let newPage = page + increment;
		if (newPage < 1) {
			newPage = 1;
		}
		updatePage(newPage);
	};

	// Effect to update the display title and gifsForDisplay based on state changes
	useEffect(() => {
		// Set the display title based on whether it's a search or trending
		if (clearSearch === true) {
			setGifDisplayTitle('Trending Gifs');
		} else {
			setGifDisplayTitle(`Search Results for: ${gifSearchTerm}`);
		}

		// Calculate the index range of gifs to display based on the current page
		const indexOfLastGif = page * gifsPerPage;
		const indexOfFirstGif = indexOfLastGif - gifsPerPage;
		const gifsForDisplay = gifs.slice(indexOfFirstGif, indexOfLastGif);
		setGifsForDisplay(gifsForDisplay);
	}, [page, gifs, gifsPerPage, gifSearchTerm, clearSearch]);

	// Loading state
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		// Container for displaying gifs
		<div className='container my-4'>
			<div className='row'>
				<div className='col-12 mb-2'>
					{/* Display title */}
					<p className='h2 text-center'>{gifDisplayTitle}</p>
				</div>
				<div className='col-12'>
					{/* Gifs display section */}
					<div className='row mb-4 position-relative gif-listing d-flex flex-column'>
						{addOnText !== '' && (
							// Add-on text section
							<div
								className={`add-on-text col-12 alert alert-dark d-flex justify-content-center align-items-center h-100 my-2 ${addOnPosition}`}
							>
								<p className='h5'>Add On Text: {addOnText}</p>
							</div>
						)}
						{/* Gifs grid */}
						<div className='container-fluid'>
							<div className='row'>
								{gifsForDisplay.map((gif: any) => (
									<div className='col-12 col-lg-4 mb-4 mb-lg-0' key={gif.id}>
										<div className='card ratio ratio-1x1'>
											<img
												src={gif.images.fixed_height.url}
												className='card-img-top object-fit-cover'
												alt='...'
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* Pagination section */}
					<div className='row'>
						<div className='col-12 d-flex justify-content-end mb-2'>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<div className='btn-group'>
									{/* Button to navigate to the previous page */}
									<button
										className='btn btn-dark fs-4'
										onClick={() => updatePageClick(-1)}
										disabled={page === 1}
									>
										<i className='bi bi-arrow-left-circle-fill'></i>
									</button>
									{/* Button to navigate to the next page */}
									<button
										className='btn btn-dark fs-4'
										onClick={() => updatePageClick(1)}
										disabled={page === Math.floor(gifs.length / gifsPerPage)}
									>
										<i className='bi bi-arrow-right-circle-fill'></i>
									</button>
								</div>
								{/* Display the current page and total pages */}
								<small className='text-secondary mt-2'>
									Page {page} of {Math.floor(gifs.length / gifsPerPage)}
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GifsDisplay;
