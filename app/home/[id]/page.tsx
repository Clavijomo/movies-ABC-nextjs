import { getMovieDetails } from '@/app/api/getMovieDetails';
import '../../styles/home.css';
import { PosterMovie } from "./_PosterMovie";
import { tmdbClient } from '@/app/utils/tmdbClient';
import { CardMovieRelates } from './_CardMovieRelates';
import { Movie } from '@/app/interfaces/movie';

async function getRecommendations(movieId: string) {
    try {
        const response = await tmdbClient.get(`/movie/${movieId}/recommendations`);
        return response.data.results;
    } catch (error: any) {
        console.error("Error fetching recommendations", error);
        return [];
    }
}

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
    const movie = await getMovieDetails(params.id);
    const recommendations: Movie[] = await getRecommendations(params.id);

    if (!movie) {
        return <p>No se encontró la película</p>;
    }

    return (
        <div className='container-grid-movies'>
            <PosterMovie movie={movie} />
            <div className='movie-container-related'>
                <div>
                    <h2>Recommendations</h2>
                    <div className='relates-movies'>
                        {recommendations && recommendations.length > 0 ?
                            recommendations.map(({ id, title, backdrop_path }) => (
                                <CardMovieRelates
                                    backdrop_path={backdrop_path}
                                    title={title}
                                    key={id}
                                />
                            )) :
                            <p>No recommendations available</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
