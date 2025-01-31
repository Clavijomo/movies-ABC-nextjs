'use client'

import { createContext, useEffect, useState } from 'react';
import { MovieCategory } from '../interfaces/movie';
import { tmdbClient } from '../api/tmdbClient';
import { useGenericContext } from '../utils/genericContext';

interface CategorizedMoviesContextProps {
    movies: Record<MovieCategory, any[]>;
    error: string | null;
    currentPage: number;
    totalPages: number;
    selectedCategory: MovieCategory;
    nextPage: () => void;
    prevPage: () => void;
    changeCategory: (category: MovieCategory) => void;
}

const CategorizedMoviesContext = createContext<CategorizedMoviesContextProps | undefined>(undefined);

export const CategorizedMoviesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [movies, setMovies] = useState<Record<MovieCategory, any[]>>({
        now_playing: [],
        popular: [],
        top_rated: [],
        upcoming: []
    });
    const [error, setError] = useState<string | null>('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<MovieCategory>('popular');

    const fetchMovies = async (category: string, page: number) => {
        setError(null);

        try {
            const url = `/movie/${category}`
            const response = await tmdbClient.get(url, {
                params: {
                    page,
                    sort_by: 'popularity.desc',
                }
            });

            setMovies((prevMovies) => ({
                ...prevMovies,
                [category]: response.data.results
            }));
            setCurrentPage(response.data.page);
            setTotalPages(response.data.total_pages);
        } catch {
            setError('Hubo un error al cargar las películas');
        }
    };

    useEffect(() => {
        fetchMovies(selectedCategory, 1);
    }, [selectedCategory]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => {
                const newPage = prevPage + 1;
                fetchMovies(selectedCategory, newPage);
                return newPage;
            });
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => {
                const newPage = prev - 1;
                fetchMovies(selectedCategory, newPage);
                return newPage;
            });
        }
    };

    const changeCategory = (category: MovieCategory) => {
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
    return useGenericContext(CategorizedMoviesContext,
        'useCategorizedMovies debe ser usado dentro de CategorizedMoviesProvider'
    );
}