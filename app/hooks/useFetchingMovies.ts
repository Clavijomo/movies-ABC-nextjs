import { useEffect, useState } from 'react';
import { Movie } from '../interfaces/movie';
import { tmdbClient } from '../utils/tmdbClient';

export const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const fetchMovies = async (page: number = 1) => {
        setLoading(true);
        setError(null);

        try {
            const response = await tmdbClient.get('/discover/movie', {
                params: {
                    sort_by: 'popularity.desc',
                    page
                }
            });

            setMovies(response.data.results);
            setCurrentPage(response.data.page);
            setTotalPages(response.data.total_pages);
        } catch {

        } finally {
            setLoading(false);
        }
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            fetchMovies(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            fetchMovies(currentPage - 1);
        }
    }

    useEffect(() => {
        fetchMovies(currentPage);
    }, [])

    return {
        movies,
        currentPage,
        totalPages,
        loading,
        error,
        nextPage,
        prevPage
    }
}
