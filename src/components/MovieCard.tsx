import React from 'react'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike  } from 'react-icons/ai'
import { IMovie } from '../types/movies.types'
import GenresList from './GenresList'
import MoviePoster from './MoviePoster'
import MovieNameExtractor from './MovieNameExtractor'
import PlayVideo_Button from './PlayVideo_Button'
import SaveInMyList_Button from './SaveInMyList_Button'
import '../style/movie-card.scss'
import '../style/buttons.scss'

interface IMovieCard {
    movie: IMovie
    media_type: 'movie' | 'tv' 
}

const MovieCard: React.FC<IMovieCard> = ({ movie, media_type }) => {

    // console.log(movie)

    return (
        <li className='movie-card'>
            <MoviePoster movie={movie} size={290}/>
            <div className="movie-card-controls">
                <div className="poster-controls-info">
                    <PlayVideo_Button ui='circle' media_type={media_type} movie_id={movie.id}/>
                    <MovieNameExtractor movie={movie} fontSizeInRem={1} fontWeight={400}/>
                    <GenresList genres={movie?.genre_ids} font={10}/>
                </div>

                <div className="poster-controls-buttons">
                    <button className="small-circle-button">
                        <HiVolumeOff size={15} color='#fff'/>
                    </button>
                    <button className="small-circle-button">
                        <AiOutlineDislike size={15} color='#fff'/>
                    </button>
                    <SaveInMyList_Button ui='circle' movie={movie} media_type={media_type}/>
                </div>
            </div>
        </li>
    )
}

export default MovieCard;