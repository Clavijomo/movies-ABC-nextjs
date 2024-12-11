import { Movie } from '@/app/interfaces/movie'
import React from 'react'
import '../../styles/favorites.css'
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

type PropsT = Omit<Movie, 'release_date' | 'id'>

export const CardFavorite = (props: PropsT) => {
    const imageUrl = props.backdrop_path
        ? `${process.env.NEXT_PUBLIC_API_IMG}${props.backdrop_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div className='card-favorite'>
            <div>
                <div className='section-image'>
                    <Image
                        src={imageUrl}
                        className='image-favorite'
                        width={50}
                        height={50}
                        alt='image-favorite'
                    />
                </div>
                <div>
                    <h1 className='favorite-title'>{props.title}</h1>
                    <p className='tagLine-favorite'>{props.tagline}</p>
                    <p className='favorite-description'>{props.overview}</p>
                </div>
            </div>
            <div className='section-favorite-vote-count'>
                <p className='vote_average'>{props.vote_average.toFixed(2)}</p>
                <StarIcon fontSize='small' color='warning' />
            </div>
        </div>
    )
}
