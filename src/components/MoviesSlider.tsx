import React, { useState, useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovie, resetMovieData, openModal } from '../redux/reduxSlice'

import { saveMoviesOnStorage } from '../redux/moviesStorage'
import { useLazyFetchMoviesQuery } from '../redux/fetchMoviesData'

import { useFetchMoviesQuery } from '../redux/fetchMoviesData'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike  } from 'react-icons/ai'
import { IMovie } from '../types/movies.types'
import GenresList from './GenresList'
import '../style/movies-slider.scss'

type MovieRowPropsType = {
    title: string
    path: string
    type: 'movie' | 'tv' | 'all'
}

const MoviesSlider = ({ title, path, type }: MovieRowPropsType) => {

    const { data: movies } = useFetchMoviesQuery({path: path})
    const rowRef = useRef<HTMLUListElement>(null)
    const [isMoved, setIsMoved] = useState(false)
    const [moviesList, setMoviesList] = useState<IMovie[] | []>([])
    const dispatch = useAppDispatch()

    const movies_storage = useAppSelector(state => state.movies_storage.movies)
    const [ fetch, { data: newMovies } ] = useLazyFetchMoviesQuery()

    const onArrowClick = (direct: 'left' | 'right') => {
        if( rowRef.current ) {
            setIsMoved(true)
            const { scrollLeft, clientWidth } = rowRef.current
            const scrollTo = direct === 'left' 
            ? scrollLeft - clientWidth 
            : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    if( movies ) {
        return (
            <section className='slider-container'>
                <h2 className='row-title'>{title}</h2>

                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => (
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
                                                    media_type: movie.media_type ? movie.media_type : type,
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
                                    <button className="circle">
                                        <HiVolumeOff size={17} color='rgba(255, 255, 255, 0.7)'/>
                                    </button>
                                    <button className="circle">
                                        <AiOutlineLike size={17} color='rgba(255, 255, 255, 0.7)'/>
                                    </button>
                                    <button className="circle">
                                        <AiOutlineDislike size={17} color='rgba(255, 255, 255, 0.7)'/>
                                    </button>
                                    <button className="circle">
                                        <FaPlus size={17} color='rgba(255, 255, 255, 0.7)'/>
                                    </button>

                                </div>
                            </div>
                        </li>
                        ))
                    }
                </ul>

                <div className="arrow-icons-wrapper">
                    <SlArrowLeft className={ isMoved ? 'arrow' : 'hidden-arrow' }
                        onClick={() => onArrowClick('left')}
                        size={30}
                        color='#ffffff' 
                    />
                    <SlArrowRight className='arrow'
                        onClick={() => onArrowClick('right')} 
                        size={30}
                        color='#ffffff' 
                    />
                </div>
            </section>
        )
    }
    else{
        return ( <div className='--hidden-row'/> )
    } 
}
export default MoviesSlider;
    // useEffect(() => {
    //     const getMovies = async () => {
    //         const local_data = localStorage.getItem(`${title}`)
    //         if( local_data === undefined ) { 
    //             // await localStorage.removeItem(`${title}`)
    //             await fetch({path: path})
    //             localStorage.setItem(`${title}`, JSON.stringify(newMovies))
    //         }
    //         else{ return }
    //     }
    //     getMovies()
    // }, [])

    // useEffect(() => {
    //     const getMovies = async () => {
    //         if( moviesList.length === 0 ) { 
    //             await fetch({path: path})
    //             await setMoviesList(newMovies)
    //         }
    //         else{ return }
    //     }
    //     getMovies()
    // }, [])

    // console.log('MOVIE', moviesList);

