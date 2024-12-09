import axios from "axios"

export const getGenres = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genre/movie/list`, {
            params: { api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY }
        });
        const genres = response.data.genres;
        console.log('Generos', genres);

        return genres;
    } catch {
        console.log('ERROR')
    }
}