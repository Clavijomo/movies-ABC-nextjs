import { getMovieDetails } from '@/app/api/api';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = params;
    const movie = await getMovieDetails(id);

    if (!movie) {
        return {
            title: "Movie not found",
            description: "The requested movie was not found"
        }
    }

    return {
        title: `ABC | ${movie.title}`,
        description: movie.overview
    }
}