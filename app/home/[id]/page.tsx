import { getMovieDetails, getRecommendations } from '@/app/api/api';
import { Movie } from '@/app/interfaces/movie';
import Head from 'next/head';
import '../../styles/home.css';
import { CardMovieRelates } from './_CardMovieRelates';
import { PosterMovie } from "./_PosterMovie";
import { generateMetadata } from '@/app/metadata';

type Params = Promise<{ id: string }>;

export default async function MovieDetailPage(props: { params: Params }) {
    const { id } = await props.params;

    if (!id) {
        throw new Error('Missing Movie ID in params');
    }

    const movie = await getMovieDetails(id);
    const recommendations: Movie[] = await getRecommendations(id);
    const metadata = await generateMetadata({ params: { id } });

    if (!movie) {
        return <p>No se encontró la película</p>;
    }

    return (
        <>
            <Head>
                <title>{metadata?.title || 'HOLA'}</title>
                <meta name="description" content={metadata?.description} />
                <meta property="og:title" content={metadata?.openGraph?.title} />
                <meta property="og:description" content={metadata?.openGraph?.description} />
                <meta property="og:image" content={metadata?.openGraph?.images[0].url} />
                <meta property="og:type" content="video.movie" />
                <meta name="twitter:card" content={metadata?.twitter?.card} />
                <meta name="twitter:title" content={metadata?.twitter?.title} />
                <meta name="twitter:description" content={metadata?.twitter?.description} />
                <meta name="twitter:image" content={metadata?.twitter?.image} />
            </Head>
            <section className='container-grid-movies'>
                <PosterMovie movie={movie} />
                <div className='movie-container-related'>
                    <div>
                        <h2>Recommendations</h2>
                        <div className='relates-movies'>
                            {recommendations && recommendations.length > 0 ?
                                recommendations.map(({ id, title, backdrop_path }) => (
                                    <CardMovieRelates key={id} title={title} backdrop_path={backdrop_path} />
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
