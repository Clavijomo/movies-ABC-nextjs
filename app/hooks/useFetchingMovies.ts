import { useState, useEffect } from 'react';
import { tmdbClient } from '../utils/tmdbClient';
import { Movie } from '../interfaces/movie';

export const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await tmdbClient.get('/movie/popular', {
                params: {
                    page: 1,
                    sort_by: 'popularity.desc',
                },
            });

            setMovies(response.data.results);
        } catch (error) {
            setError('Hubo un error al cargar las películas');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return { movies, loading, error };
};
