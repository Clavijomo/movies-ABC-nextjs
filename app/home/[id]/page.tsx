import { getMovieDetails, getRecommendations } from '@/app/api/api';
import { Movie } from '@/app/interfaces/movie';
import '../../styles/home.css';
import { CardMovieRelates } from './_CardMovieRelates';
import { PosterMovie } from "./_PosterMovie";
import { generateMetadata } from '../../metadata';
import Head from 'next/head';

export { generateMetadata };

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
        <>
            <Head>
                <title>{movie.title}</title>
                <meta name="description" content={movie.overview} />
                <meta property="og:title" content={movie.title} />
                <meta property="og:description" content={movie.overview} />
                <meta property="og:image" content={movie.poster_path} />
                <meta property="og:type" content="video.movie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={movie.title} />
                <meta name="twitter:description" content={movie.overview} />
                <meta name="twitter:image" content={movie.poster_path} />
            </Head>
            <section className='container-grid-movies'>
                <PosterMovie movie={movie} />
                <div className='movie-container-related'>
                    <div>
                        <h2>Recommendations</h2>
                        <div className='relates-movies'>
                            {recommendations && recommendations.length > 0 ?
                                recommendations.map(({ id, title, backdrop_path }) => (
                                    <CardMovieRelates
                                        key={id}
                                        title={title}
                                        backdrop_path={backdrop_path}
                                    />
                                )) :
                                <p>No recommendations available</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}