import React from 'react';
import '../../styles/movie.css';
import { Movie } from '@/app/interfaces/movie';
import Image from 'next/image';

type PropsT = Omit<Movie, 'vote_count' | 'vote_average' | 'id' | 'overview' | 'release_date'>

export const CardMovieRelates = (props: PropsT) => {
    const { title, backdrop_path } = props;

    const imageUrl = backdrop_path
        ? `${process.env.NEXT_PUBLIC_API_IMG}${backdrop_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div className='card-related'>
            <Image
                src={imageUrl}
                width={200}
                height={200}
                className='image-movie-recommend'
                alt='movie-recommend'
            />
            <div>
                <h1 className='title-movie-related'>{title}</h1>
            </div>
        </div>
    )
}
