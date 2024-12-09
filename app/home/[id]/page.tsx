import { tmdbClient } from "@/app/utils/tmdbClient";

export default async function getMovies() {
    try {
        const response = await tmdbClient.get('/movie/popular', {
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY
            }
        })

        return response.data.results;
    } catch (error: any) {
        console.log(error)
        return []
    }
}