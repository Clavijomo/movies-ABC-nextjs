import { createContext, useState, ReactNode, useCallback } from 'react';
import { Movie } from '@/app/interfaces/movie';
import { searchMovies } from '../api/api';
import { useGenericContext } from '../utils/genericContext';

interface SearchContextProps {
    searchResults: Movie[];
    isSearching: boolean;
    handleSearch: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = useCallback(async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        const results = await searchMovies(query);
        setSearchResults(results);
        setIsSearching(false);
    }, []);

    return (
        <SearchContext.Provider
            value={{
                searchResults,
                isSearching,
                handleSearch
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => {
    return useGenericContext(SearchContext,
        'useSearch must be used within a SearchProvider'
    );
}