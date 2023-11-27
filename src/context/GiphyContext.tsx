import React, { ReactNode, createContext, useState, useEffect } from 'react';

// Create GiphyContext with default values
const GiphyContext = createContext({
	gifs: [],
	gifsForDisplay: [],
	gifsPerPage: 3,
	gifSearchTerm: '',
	addOnText: '',
	addOnPosition: '',
	clearSearch: true,
	page: 1,
	loading: true,
	fetchTrendingGifs: () => {},
	searchForGifs: (searchTerm: string) => searchTerm,
	updateAddOnText: (addOnText: string) => addOnText,
	updateAddOnPosition: (addOnPosition: string) => addOnPosition,
	updatePage: (page: number) => {},
	resetSearch: () => {},
});

// GiphyProvider component
const GiphyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	// API key for Giphy
	const giphyAPIKey = '1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq';

	// Initial state using useState hook
	const [state, setState] = useState({
		gifs: [],
		gifsForDisplay: [],
		gifsPerPage: 3,
		gifSearchTerm: '',
		page: 1,
		loading: true,
		addOnText: '',
		addOnPosition: '',
		clearSearch: true,
	});

	// Function to fetch trending gifs
	const fetchTrendingGifs = async () => {
		try {
			const res = await fetch(
				`https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIKey}&limit=30&rating=g`
			);

			if (!res.ok) {
				throw new Error(`Failed to fetch trending gifs. Status: ${res.status}`);
			}

			const data = await res.json();
			// Update state with fetched data
			setState((prevState) => ({
				...prevState,
				gifs: data.data,
				loading: false,
			}));
		} catch (error) {
			console.error('Error fetching trending gifs:', error);
			// Handle error state if needed
			setState((prevState) => ({
				...prevState,
				loading: false,
			}));
		}
	};

	// Function to fetch gifs based on search term
	const fetchGifs = async (searchTerm: string) => {
		try {
			const res = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${searchTerm}&limit=30&offset=0&rating=g&lang=en`
			);

			if (!res.ok) {
				throw new Error(`Failed to fetch gifs. Status: ${res.status}`);
			}

			const data = await res.json();
			// Update state with fetched data, resetting some values
			setState((prevState) => ({
				...prevState,
				gifSearchTerm: searchTerm,
				gifs: data.data,
				page: 1,
				loading: false,
			}));
		} catch (error) {
			console.error(
				`Error fetching gifs for search term "${searchTerm}":`,
				error
			);
			// Handle error state if needed
			setState((prevState) => ({
				...prevState,
				loading: false,
			}));
		}
	};

	// Function to initiate a search for gifs
	const searchForGifs = (searchTerm: string) => {
		fetchGifs(searchTerm);
		// Update state to indicate that a search has been performed
		setState((prevState) => ({
			...prevState,
			clearSearch: false,
		}));
		return searchTerm;
	};

	// Function to update add-on text
	const updateAddOnText = (addOnText: string) => {
		// Update state with new add-on text
		setState((prevState) => ({
			...prevState,
			addOnText: addOnText,
		}));
		return addOnText;
	};

	// Function to update add-on position
	const updateAddOnPosition = (addOnPosition: string) => {
		// Update state with new add-on position
		setState((prevState) => ({
			...prevState,
			addOnPosition: addOnPosition,
		}));
		return addOnPosition;
	};

	// Function to update the current page
	const updatePage = (page: number) => {
		// Update state with new page value
		setState((prevState) => ({
			...prevState,
			page: page,
		}));
	};

	// Function to reset the search and fetch trending gifs
	const resetSearch = () => {
		// Reset relevant state values
		setState((prevState) => ({
			...prevState,
			gifs: [],
			addOnText: '',
			addOnPosition: '',
			page: 1,
			clearSearch: true,
		}));
		// Fetch trending gifs
		fetchTrendingGifs();
	};

	// Effect hook to fetch trending gifs on component mount
	useEffect(() => {
		fetchTrendingGifs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Provide the GiphyContext with the current state and functions
	return (
		<GiphyContext.Provider
			value={{
				...state,
				fetchTrendingGifs,
				searchForGifs,
				updateAddOnText,
				updateAddOnPosition,
				updatePage,
				resetSearch,
			}}
		>
			{children}
		</GiphyContext.Provider>
	);
};

// Export the GiphyContext and GiphyProvider
export { GiphyContext, GiphyProvider };
