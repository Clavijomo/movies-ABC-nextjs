import { tmdbClient } from "@/app/utils/tmdbClient";
import { PosterMovie } from "./_PosterMovie";

interface MovieDetailProps {
    params: {
        id: string;
    };
}

async function getMovieDetails(movieId: string) {
    try {
        const response = await tmdbClient.get(`/movie/${movieId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching Movie', error);
        return null;
    }
}

export default async function MovieDetailPage({ params }: MovieDetailProps) {
    const movie = await getMovieDetails(params.id);

    if (!movie) {
        return <p>No se encontro la pelicula</p>
    }

    return (
        <div className='container-grid-movies'>
            <PosterMovie movie={movie} />
            <div className='movie-container-related'>
                <div>
                    <h2>Recommendations</h2>
                    <div className='relates-movies'>
                        {/* {moviesRecommend.map((related, i) => (
                            <CardRelated
                                {...related}
                                key={i}
                            />
                        ))} */}
                    </div>
                </div>

            </div>
        </div>
    )
}