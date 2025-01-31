'use client'

import { useFavorites } from '@/app/provider/FavoritesContext'
import '../../styles/favorites.css'
import { CardFavorite } from './_CardFavorite';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function FavoritesHomePage() {
    const { favorites } = useFavorites();

    return (
        <div className='container-favorites'>
            <div className='section-favorites-description'>
                {favorites && favorites.length > 0 ? (
                    <div className='container-found-favorites'>
                        <h1>Favoritos</h1>
                        <p>Aquí se encuentran tus películas favoritas</p>
                    </div>
                ) : (
                    <div className='container-notfound-favorites'>
                        <h1>Ups. Aún no tienes películas favoritas :(</h1>
                        <p>Comienza añadiendo algunas en el catálogo</p>
                        <Link className='button-back-movies' href={'/home'}>
                            <ArrowBackIosNewIcon fontSize='small' />
                            Volver
                        </Link>
                    </div>
                )}
                <div className='section-list-favorites'>
                    {favorites && favorites.length > 0 &&
                        <div className='grid-favorites'>
                            {favorites.map((fav, i) => (
                                <CardFavorite {...fav} key={i} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}