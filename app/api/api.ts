import { tmdbClient } from "./tmdbClient";

export async function getMovieDetails(movieId: string | string[] | undefined) {
    if (!movieId) throw new Error("Movie ID is required");

    try {
        const response = await tmdbClient.get(`/movie/${movieId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching Movie', error);
        return null;
    }
}

export async function getRecommendations(movieId: string | string[] | undefined) {
    try {
        const response = await tmdbClient.get(`/movie/${movieId}/recommendations`);
        return response.data.results;
    } catch (error: any) {
        console.error("Error fetching recommendations", error);
        return [];
    }
}

export async function searchMovies(query: string) {
    try {
        const response = await tmdbClient.get('/search/movie', {
            params: { query }
        });

        return response.data.results;
    } catch (error: any) {
        console.error('Error searching movies', error);
        return [];
    }
}