'use client'

import { useState } from 'react';
import { SideMenu } from '../components/shared/SideMenu';
import { useMovies } from '../hooks/useFetchingMovies';
import { Movie } from '../interfaces/movie';
import { MovieDetail } from './MovieDetail';

export default function HomePage() {
    const { movies, loading } = useMovies();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<{ id: number, name: string }[]>([]);
    const modules = ['Top Rated', 'Now Playing', 'Popular', 'Upcoming'];

    return (
        <div className="dashboard-container">
            <SideMenu handleCategoryClick={() => { }} modules={modules} selectedCategory='' />
            <div className='movies-content'>
                {movies && movies.length > 0 &&
                    <div className='container-movies'>
                        {movies.map((movie, i) => (
                            <MovieDetail movie={movie} key={i} />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}