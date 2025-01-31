import { getMovieDetails } from '@/app/api/api';

export interface Metadata {
    title: string;
    description: string;
    openGraph?: {
        title: string;
        description: string;
        images: { url: string; width: number; height: number; alt: string }[];
    };
    twitter?: {
        card: string;
        title: string;
        description: string;
        image: string;
    };
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const movie = await getMovieDetails(params.id);

    if (!movie) {
        return {
            title: "Movie not found",
            description: "The requested movie was not found",
        };
    }

    return {
        title: movie.title,
        description: movie.overview || 'No description available',
        openGraph: {
            title: movie.title,
            description: movie.overview,
            images: [
                {
                    url: movie.poster_path,
                    width: 800,
                    height: 600,
                    alt: movie.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: movie.title,
            description: movie.overview,
            image: movie.poster_path,
        },
    };
}