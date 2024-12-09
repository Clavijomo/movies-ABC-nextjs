import Image from "next/image";
import { Movie } from "../interfaces/movie";
import '../styles/home.css';

interface Props {
    movie: Movie
}

export const MovieDetail = ({ movie }: Props) => {
    const {
        release_date,
        title,
        backdrop_path
    } = movie;

    const imageUrl = backdrop_path
        ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div className="card-movie">
            <Image
                src={imageUrl}
                width={200}
                height={200}
                alt="Movie"
            />
            <div className="poster-description">
                <h1 className="title-movie">{title}</h1>
                <p className="description-movie">{release_date}</p>
                <div className="container-info-add">
                    <div>
                        {/* <CircularProgressBar
                            score={rating}
                            minimal={true}
                        /> */}
                    </div>
                    <div>
                        <p>Favorites</p>
                        <p>
                            Favortito
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}