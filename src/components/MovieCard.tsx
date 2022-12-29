import React from 'react'
import { useAppDispatch } from '../redux/store'
import { selectMovie, resetMovieData, openModal } from '../redux/reduxSlice'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike  } from 'react-icons/ai'
import { IMovie } from '../types/movies.types'
import GenresList from './GenresList'
import '../style/movie-card.scss'

interface IMovieCard {
    movie: IMovie
    type: 'movie' | 'tv' | 'all'
}

const MovieCard: React.FC<IMovieCard> = ({movie, type}) => {

    const dispatch = useAppDispatch()

    return (
        <li className='movie-card' key={movie.id}>
        <img className='movie-card-img'
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
            alt={movie.name}
        />
        <div className="movie-card-controls">
            <div className="poster-controls-info">
                <button className="poster-play-button">
                    <FaPlay className='play-icon'
                        size={20} 
                        color='rgba(255, 255, 255, 0.7)'
                        onClick={() => {
                            dispatch(resetMovieData())
                            dispatch(selectMovie({
                                media_type: type === 'all' ? movie.media_type : type,
                                movie_id: Number(movie.id)
                            }))
                            dispatch(openModal())
                        }}
                    />
                </button>
                <p className='movie-name'>
                    { !movie.name || !movie.original_name ? 
                        (movie.title ? movie.title : movie.original_title) :
                        (movie.name ? movie.name : movie.original_name) 
                    }
                </p>
                <GenresList genres={movie?.genre_ids} font={12}/>
            </div>

            <div className="poster-controls-buttons">
                <button className="movie-slider-circle">
                    <HiVolumeOff size={17} color='rgba(255, 255, 255, 0.7)'/>
                </button>
                <button className="movie-slider-circle">
                    <AiOutlineLike size={17} color='rgba(255, 255, 255, 0.7)'/>
                </button>
                <button className="movie-slider-circle">
                    <AiOutlineDislike size={17} color='rgba(255, 255, 255, 0.7)'/>
                </button>
                <button className="movie-slider-circle">
                    <FaPlus size={17} color='rgba(255, 255, 255, 0.7)'/>
                </button>

            </div>
        </div>
    </li>
)
}

export default MovieCard