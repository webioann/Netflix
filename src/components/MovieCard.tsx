import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { selectMovie, resetMovieData, setModalVisibility } from '../redux/reduxSlice'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike  } from 'react-icons/ai'
import { IMovie } from '../types/movies.types'
import GenresList from './GenresList'
import { collection, doc, getDocs, query, onSnapshot, addDoc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import '../style/movie-card.scss'

interface IMovieCard {
    movie: IMovie
    type: 'movie' | 'tv' | string | undefined
}

const MovieCard: React.FC<IMovieCard> = ({movie, type}) => {

    const dispatch = useAppDispatch()

    const saveMovieInFirestore = async () => {
        await addDoc(collection(db, "my list"), { ...movie, media_type: type })
    }

    return (
        <li className='movie-card'>
            <img className='movie-card-img'
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
                alt={ type === 'movie' ? movie.title : movie.name }
            />
            <div className="movie-card-controls">
                <div className="poster-controls-info">
                    <button className="poster-play-button">
                        <FaPlay className='play-icon'
                            size={20} 
                            color='rgba(255, 255, 255, 0.7)'
                            onClick={() => {
                                dispatch(selectMovie({
                                    media_type: movie.media_type ? movie.media_type : type,
                                    movie_id: movie.id
                                }))
                                dispatch(setModalVisibility(true))
                            }}
                        />
                    </button>
                    <p className='movie-name'>
                        { type === 'movie' ? movie.title : movie.name }
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
                    <button 
                        className="movie-slider-circle"
                        onClick={saveMovieInFirestore}
                        >
                        <FaPlus size={17} color='rgba(255, 255, 255, 0.7)'/>
                    </button>

                </div>
            </div>
        </li>
    )
}

export default MovieCard;