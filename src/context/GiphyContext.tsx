import React, { ReactNode, createContext, useState, useEffect } from 'react';


const GiphyContext = createContext({gifs: [], gifsPerPage: 3, initialSearchTerm: '', initialAddOnText: '', addOnText: '', addOnPosition: '', clearSearch: false, page: 1, loading: true, searchForGifs: (searchTerm: string) => searchTerm, updateAddOnText: (addOnText: string) => addOnText, updateAddOnPosition: (addOnPosition: string) => addOnPosition, updatePage: (page: number) => {}, resetSearch: () => {}});

interface Props {
	children: ReactNode;
  } 

const GiphyProvider: React.FC<Props> = ({ children })  => {
	const giphyAPIKey = '1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq';
	const [gifs, setGifs] = useState([]);
	const [gifsPerPage, setGifsPerPage] = useState(3);
	const [initialSearchTerm, setInitialSearchTerm] = useState('');
	const [initialAddOnText, setInitialAddOnText] = useState('');
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [addOnText, setAddOnText] = useState('');
	const [addOnPosition, setAddOnPosition] = useState('');
	const [clearSearch, setClearSearch] = useState(false);

	const fetchGifs = async () => {
		const res = await fetch(
			`https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIKey}&limit=30&rating=g`
		);
		const data = await res.json();
		setGifs(data.data);
		setLoading(false);
	};

	const fetchGifsBySearch = async (searchTerm: string) => {
		const res = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${searchTerm}&limit=30&offset=0&rating=g&lang=en`
		);
		const data = await res.json();
		setGifs(data.data);
		setLoading(false);
	}

	useEffect(() => {
		fetchGifs();
	}, []);

	const searchForGifs = (searchTerm: string) => {
		fetchGifsBySearch(searchTerm);
		setClearSearch(false);
		return searchTerm;
	}

	const updateAddOnText = (addOnText: string) => {
		setAddOnText(addOnText);
		return addOnText;
	}

	const updateAddOnPosition = (addOnPosition: string) => {
		setAddOnPosition(addOnPosition);
		return addOnPosition;
	}

	const updatePage = (page: number) => {
		setPage(page);
	};

	const resetSearch = () => {
		setAddOnText('');
		setAddOnPosition('');
		setPage(1);
		fetchGifs();
		setClearSearch(true);
	};

	return (
		<GiphyContext.Provider value={{ gifs, gifsPerPage, initialSearchTerm, initialAddOnText, addOnText, addOnPosition, clearSearch, page, loading, searchForGifs, updateAddOnText, updateAddOnPosition, updatePage, resetSearch }}>
			{children}
		</GiphyContext.Provider>
	);
};

export { GiphyContext, GiphyProvider };

