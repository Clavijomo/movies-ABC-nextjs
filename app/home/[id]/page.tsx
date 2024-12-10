import { getMovieDetails, getRecommendations } from '@/app/api/api';
import { Movie } from '@/app/interfaces/movie';
import '../../styles/home.css';
import { CardMovieRelates } from './_CardMovieRelates';
import { PosterMovie } from "./_PosterMovie";

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
    if (!params || !params.id) {
        throw new Error('Missing Movie ID in params');
    }

    const { id } = params;
    const movie = await getMovieDetails(id);
    const recommendations: Movie[] = await getRecommendations(id);

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
