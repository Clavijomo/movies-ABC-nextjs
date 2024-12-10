import { Movie } from "@/app/interfaces/movie"
import Image from "next/image"

interface Props { movie: Movie }

export const PosterMovie = ({ movie }: Props) => {
    return (
        <div className='container-detail-movie'>
            <div className='overlay' />
            {/* <IconButton className='button-back-poster' sx={{ padding: 2 }} size='medium' onClick={() => router.back()}>
                <ArrowBack />
            </IconButton> */}
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
                        {/* <PlayArrowOutlinedIcon /> */}
                    </button>
                </div>
                <div>
                    <h1 className='title-movie-detail'>name</h1>
                    <div className='sub-info-movie'>
                        <p>date</p>
                        <p>min</p>
                    </div>
                    <p className='description-poster-movie'>description</p>
                    <div className='container-score'>
                        <div className='score'>
                            {/* <CircularRating score={rating} /> */}
                            <p>Users Score</p>
                        </div>
                        <div>
                            {/* {favorite === true ? <Favorite /> : <FavoriteBorderOutlined />} */}
                        </div>
                    </div>
                    {/* {tags && tags.length > 0 &&
                        <div className='tag-container'>
                            {tags.map((tag, i) => (
                                <p className='tag' key={i}>{tag}</p>
                            ))}
                        </div>
                    } */}
                </div>
            </div>
        </div>
    )
}