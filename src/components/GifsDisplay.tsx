import React, { useContext, useEffect, useState } from 'react';
import { GiphyContext } from '../context/GiphyContext';

const GifsDisplay = () => {
	const { gifs, gifsPerPage, addOnText, addOnPosition, page, loading } =
		useContext(GiphyContext);
	const { updatePage } = useContext(GiphyContext);
	const { resetSearch } = useContext(GiphyContext);
	const [gifsForDisplay, setGifsForDisplay] = useState([]);

	const updatePageClick = (page: number) => {
		if (page < 1) {
			page = 1;
		} else {
			updatePage(page);
		}
	};

	const clearSearch = () => {
		resetSearch();
	}

	useEffect(() => {
		const indexOfLastGif = page * gifsPerPage;
		const indexOfFirstGif = indexOfLastGif - gifsPerPage;
		const gifsForDisplay = gifs.slice(indexOfFirstGif, indexOfLastGif);
		setGifsForDisplay(gifsForDisplay);
	}, [page, gifs, gifsPerPage]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='container my-4'>
			<div className='row'>
				<div className='col-12'>
					{addOnText !== '' && addOnPosition === 'center-top' && (
						<div className={`alert alert-dark text-center ${addOnPosition}`}>
							<p className='h3'>{addOnText}</p>
						</div>
					)}
					<div className='row mb-4 position-relative'>
					{addOnText !== '' && addOnPosition === 'center-bottom' && (
						<div className={`alert alert-dark d-flex justify-content-center align-items-center position-absolute top-0 end-0 z-1 h-100 opacity-50 ${addOnPosition}`}>
							<p className='h3'>{addOnText}</p>
						</div>
					)}
						{gifsForDisplay.map((gif: any) => (
							<div className='col-12 col-lg-4 mb-4' key={gif.id}>
								<div className='card'>
									<img
										src={gif.images.fixed_height.url}
										className='card-img-top'
										alt='...'
									/>
								</div>
							</div>
						))}
					</div>
					{addOnText !== '' && addOnPosition === 'below-image' && (
						<div className={`alert alert-dark text-center ${addOnPosition}`}>
							<p className='h3'>{addOnText}</p>
						</div>
					)}
					<div className='row'>
						<div className='col-12 d-flex justify-content-end mb-2'>
							<div className='btn-group'>
								<button
									className='btn btn-dark fs-4'
									onClick={() => updatePageClick(page - 1)}
									disabled={page === 1}
								>
									<i className='bi bi-arrow-left-circle-fill'></i>
								</button>
								<button
									className='btn btn-dark fs-4'
									onClick={() => updatePageClick(page + 1)}
								>
									<i className='bi bi-arrow-right-circle-fill'></i>
								</button>
							</div>
						</div>
						<div className="col-12 d-flex justify-content-end">
						<div className='btn-group'>
								<button
									className='btn btn-dark fs-7'
									onClick={() => clearSearch()}
								>
									Clear Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GifsDisplay;
