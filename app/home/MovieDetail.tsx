import Image from "next/image";
import { Movie } from "../interfaces/movie";
import '../styles/home.css';
import Link from "next/link";
import { CircularProgressRating } from "../components/shared/CircularProgressRating";

interface Props {
    movie: Movie
}

export const MovieDetail = ({ movie }: Props) => {
    const { release_date, title, backdrop_path, vote_average } = movie;

    const imageUrl = backdrop_path
        ? `${process.env.NEXT_PUBLIC_API_IMG}${backdrop_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div className="card-movie">
            <Link href={`/home/${movie.id}`}>
                <Image
                    src={imageUrl}
                    className="image-movie"
                    width={200}
                    height={200}
                    alt="Movie"
                />
                <div className="poster-description">
                    <h1 className="title-movie">{title}</h1>
                    <p className="description-movie">{release_date}</p>
                    <div className="container-info-add">
                        <div>
                            <CircularProgressRating minimal score={vote_average} />
                        </div>
                        <div>
                            <p>Favorites</p>
                            <p>Favortito</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}