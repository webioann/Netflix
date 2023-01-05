import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike  } from 'react-icons/ai'
import { IMovie } from '../types/movies.types'
import GenresList from './GenresList'
import PlayVideoButtonIcon from './PlayVideoButtonIcon';
import { IMG_BASE_URL } from '../helpers/constants'
import { saveMovieInMyList, deleteMovieFromMyList } from '../firebase.config'
import '../style/movie-card.scss'

interface IMovieCard {
    movie: IMovie
    media_type: 'movie' | 'tv' 
}

const MovieCard: React.FC<IMovieCard> = ({ movie, media_type }) => {

    return (
        <li className='movie-card'>
            <img className='movie-card-img'
                src={`${IMG_BASE_URL}${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
                alt={ media_type === 'movie' ? movie.title : movie.name }
            />
            <div className="movie-card-controls">
                <div className="poster-controls-info">
                    <button className="poster-play-button">
                        <PlayVideoButtonIcon 
                            size={20} 
                            color='rgba(255, 255, 255, 0.7)' 
                            media_type={media_type} 
                            movie_id={movie.id}
                        />
                    </button>
                    <p className='movie-name'>
                        { media_type === 'movie' ? movie.title : movie.name }
                    </p>
                    <GenresList genres={movie?.genre_ids} font={12}/>
                </div>

                <div className="poster-controls-buttons">
                    <button className="movie-slider-circle">
                        <HiVolumeOff size={17} color='rgba(255, 255, 255, 0.7)'/>
                    </button>
                    {/* <button className="movie-slider-circle">
                        <AiOutlineLike size={17} color='rgba(255, 255, 255, 0.7)'/>
                    </button> */}
                    <button className="movie-slider-circle">
                        <AiOutlineDislike size={17} color='rgba(255, 255, 255, 0.7)'/>
                    </button>
                    <button 
                        className="movie-slider-circle"
                        onClick={() => saveMovieInMyList({movie, media_type: media_type})}
                        >
                        <FaPlus size={17} color='rgba(255, 255, 255, 0.7)' title='save in My List'/>
                    </button>

                </div>
            </div>
        </li>
    )
}

export default MovieCard;