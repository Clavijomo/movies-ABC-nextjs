import Image from "next/image";
import { Movie } from "../interfaces/movie";
import '../styles/home.css';
import Link from "next/link";
import { CircularProgressRating } from "../components/shared/CircularProgressRating";
import { getImageAPI } from "../utils/imageApi";

interface Props {
    movie: Movie
}

export const MovieDetail = ({ movie }: Props) => {
    const { release_date, title, backdrop_path, vote_average, id } = movie;

    return (
        <div className="card-movie">
            <Link href={`/home/${id}`}>
                <Image
                    src={getImageAPI(backdrop_path)}
                    className="image-movie"
                    priority
                    width={200}
                    height={200}
                    alt="Movie"
                />
                <div className="poster-description">
                    <h1 className="title-movie">{title}</h1>
                    <p className="description-movie">{release_date}</p>
                    <div className="container-info-add">
                        <div>
                            <CircularProgressRating minimal={true} score={vote_average} />
                        </div>
                        <div>
                            <p>Favorites</p>
                            <p>Favorito</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}