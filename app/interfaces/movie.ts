export interface Movie {
    title: string
    vote_average: number
    id: number
    overview: string
    backdrop_path: string
    tagline?: string
    release_date: string
}

export type MovieCategory = 'popular' | 'now_playing' | 'top_rated' | 'upcoming';