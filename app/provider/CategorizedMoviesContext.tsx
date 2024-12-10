'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { tmdbClient } from '../utils/tmdbClient';

type Category = 'popular' | 'top_rated' | 'now_playing' | 'upcoming';

interface CategorizedMoviesContextProps {
    movies: Record<Category, any[]>;
    error: string | null;
    currentPage: number;
    totalPages: number;
    selectedCategory: Category;
    nextPage: () => void;
    prevPage: () => void;
    changeCategory: (category: Category) => void;
}

const CategorizedMoviesContext = createContext<CategorizedMoviesContextProps | undefined>(undefined);

export const CategorizedMoviesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [movies, setMovies] = useState<Record<Category, any[]>>({
        now_playing: [],
        popular: [],
        top_rated: [],
        upcoming: []
    });
    const [error, setError] = useState<string | null>('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<Category>('popular');

    const fetchMovies = async (category: string, page: number) => {
        setError(null);

        try {
            const url = `/movie/${category}`
            const response = await tmdbClient.get(url, {
                params: {
                    page,
                    sort_by: 'popularity.desc',
                },
            });

            setMovies((prevMovies) => ({ ...prevMovies, [category]: response.data.results }));
            setCurrentPage(response.data.page);
            setTotalPages(response.data.total_pages);
        } catch {
            setError('Hubo un error al cargar las películas');
        }
    };

    useEffect(() => {
        fetchMovies(selectedCategory, 1)
    }, [])

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
            fetchMovies(selectedCategory, currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
            fetchMovies(selectedCategory, currentPage - 1);
        }
    };

    const changeCategory = (category: Category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        fetchMovies(category, 1);
    };

    return (
        <CategorizedMoviesContext.Provider
            value={{
                movies,
                currentPage,
                totalPages,
                selectedCategory,
                error,
                nextPage,
                prevPage,
                changeCategory
            }}
        >
            {children}
        </CategorizedMoviesContext.Provider>
    )
}

export const useCategorizedMovies = () => {
    const context = useContext(CategorizedMoviesContext);
    if (!context) {
        throw new Error('useCategorizedMovies debe ser usado dentro de CategorizedMoviesProvider');
    }

    return context;
}