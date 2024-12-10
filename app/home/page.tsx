'use client'

import { Pagination } from '../components/shared/Pagination';
import { SideMenu } from '../components/shared/SideMenu';
import { useCategorizedMovies } from '../provider/CategorizedMoviesContext';
import { MovieDetail } from './MovieDetail';

export default function HomePage() {
    const {
        movies,
        selectedCategory,
        changeCategory,
    } = useCategorizedMovies();

    const categories: ('popular' | 'top_rated' | 'now_playing' | 'upcoming')[] = ['popular', 'top_rated', 'now_playing', 'upcoming'];

    return (
        <div className='container-section-pagination'>
            <div className="dashboard-container">
                <SideMenu
                    handleCategoryClick={changeCategory}
                    modules={categories}
                    selectedCategory={selectedCategory}
                />
                <div className='movies-content'>
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
                </div>
                <Pagination />
            </div>
        </div>
    )
}