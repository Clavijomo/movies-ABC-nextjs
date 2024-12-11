'use client'

import { createContext, useContext, useState } from "react";
import { Movie } from "../interfaces/movie";

interface FavoritesContextProps {
    favorites: Movie[];
    addToFavorites: (movie: Movie) => void;
    removeFromFavorites: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addToFavorites = (movie: Movie) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((fav) => fav.id === movie.id)) return prevFavorites;
            return [...prevFavorites, movie];
        });
    }

    const removeFromFavorites = (movieId: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((fav) => fav.id !== movieId)
        )
    }

    const isFavorite = (movieId: number) => {
        return favorites.some((fav) => fav.id === movieId);
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                isFavorite
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('UseFavorites debe ser usado dentro de FavoritesProvier');
    }

    return context;
}