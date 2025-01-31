'use client'

import { Pagination } from '@mui/material';
import { SideMenu } from '../components/shared/SideMenu';
import { useCategorizedMovies } from '../provider/CategorizedMoviesContext';
import { useSearchContext } from '../provider/SearchContext';
import LoadingPage from './[id]/loading';
import { MovieDetail } from './_MovieDetail';

export default function HomePage() {
    const { movies, selectedCategory, changeCategory } = useCategorizedMovies();
    const categories: ('popular' | 'top_rated' | 'now_playing' | 'upcoming')[] = ['popular', 'top_rated', 'now_playing', 'upcoming'];

    const { isSearching, searchResults } = useSearchContext();

    return (
        <section className='container-section-pagination'>
            <div className="dashboard-container">
                <SideMenu
                    handleCategoryClick={changeCategory}
                    modules={categories}
                    selectedCategory={selectedCategory}
                />
                <div className='movies-content'>
                    {isSearching ? (
                        <LoadingPage />
                    ) : searchResults.length > 0 ? (
                        <div>
                            <h2>Search Results for</h2>
                            <div className='container-movies'>
                                {searchResults.map((movie, i) => (
                                    <MovieDetail movie={movie} key={i} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div key={selectedCategory}>
                            <h2>{selectedCategory.replace('_', ' ').toUpperCase()}</h2>
                            <div className='container-movies'>
                                {movies[selectedCategory]?.length > 0 && (
                                    movies[selectedCategory].map((movie, i) => (
                                        <MovieDetail movie={movie} key={i} />
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <Pagination />
            </div>
        </section>
    );
}