import React from 'react';
import '../../styles/movie.css';
import { Movie } from '@/app/interfaces/movie';
import Image from 'next/image';
import { getImageAPI } from '@/app/utils/imageApi';

type PropsT = Omit<Movie, 'vote_average' | 'id' | 'overview' | 'release_date'>

export const CardMovieRelates = (props: PropsT) => {
    const { title, backdrop_path } = props;

    return (
        <div className='card-related'>
            <Image
                src={getImageAPI(backdrop_path)}
                width={200}
                priority
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
