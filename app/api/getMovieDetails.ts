import { tmdbClient } from "../utils/tmdbClient";

export async function getMovieDetails(movieId: string) {
    try {
        const response = await tmdbClient.get(`/movie/${movieId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching Movie', error);
        return null;
    }
}