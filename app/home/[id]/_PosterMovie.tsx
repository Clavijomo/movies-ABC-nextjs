'use client'

import { CircularProgressRating } from "@/app/components/shared/CircularProgressRating"
import { Movie } from "@/app/interfaces/movie"
import { useFavorites } from "@/app/provider/FavoritesContext"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import { IconButton } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../../styles/movie.css'

interface Props { movie: Movie }

export const PosterMovie = ({ movie }: Props) => {
    const router = useRouter();

    const { title, overview, release_date, vote_average, id } = movie;
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

    const handleFavoriteClick = () => {
        if (isFavorite(id)) {
            removeFromFavorites(id);
        } else {
            addToFavorites(movie);
        }
    }

    return (
        <div className='container-detail-movie'>
            <div className='overlay' />
            <IconButton
                onClick={() => router.back()}
                className="button-back-poster"
                sx={{ padding: 2 }}
                size="medium"
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <div className='detail-movie'>
                <div className='section-trailer-movie'>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_IMG}${movie.backdrop_path}`}
                        alt='movie'
                        width={200}
                        className='image'
                        height={200}
                    />
                    <button>
                        Oficial trailer
                        <PlayArrowOutlinedIcon />
                    </button>
                </div>
                <div>
                    <h1 className='title-movie-detail'>{title}</h1>
                    <div className='sub-info-movie'>
                        <p>{release_date}</p>
                    </div>
                    <p className='description-poster-movie'>{overview}</p>
                    <div className='container-score'>
                        <div className='score'>
                            <CircularProgressRating score={vote_average} />
                            <p>Users Score</p>
                        </div>
                        <div>
                            <IconButton onClick={handleFavoriteClick}>
                                {isFavorite(id) ? (
                                    <FavoriteIcon color="warning" />
                                ) : (
                                    <FavoriteBorderIcon color="warning" />
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}