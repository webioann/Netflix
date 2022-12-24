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
import '../style/movies-row.scss'

type MovieRowPropsType = {
    title: string
    path: string
    type: 'movie' | 'tv' | 'all'
}

const MoviesRow = ({ title, path, type }: MovieRowPropsType) => {

    const { data: movies } = useFetchMoviesQuery({path: path})
    const rowRef = useRef<HTMLUListElement>(null)
    const [isMoved, setIsMoved] = useState(false)
    const [moviesList, setMoviesList] = useState<IMovie[] | []>([])
    const dispatch = useAppDispatch()
    const [isShowControls, setIsShowControls] = useState(false)

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

    // console.log('MOVIE', moviesList);

    if( movies ) {
        return (
            <section className='row-container'>
                <h2 className='row-title'>{title}</h2>

                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => (
                        <li 
                            // onMouseEnter={() => setIsShowControls(true)}
                            // onMouseLeave={() => setIsShowControls(false)}
                            key={movie.id} 
                            className='poster-wrapper'>
                            <img 
                                className='poster'
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
                                alt={movie.name}
                            />
                            <div className={ isShowControls ? "poster-controls" : "hidden-controls"}>
                                <div className="poster-controls-info">
                                    <div className="poster-play-button">
                                        <FaPlay 
                                            size={20} 
                                            color='#fff'
                                            onClick={() => {
                                                dispatch(resetMovieData())
                                                dispatch(selectMovie({
                                                    media_type: movie.media_type ? movie.media_type : type,
                                                    movie_id: Number(movie.id)
                                                }))
                                                dispatch(openModal())
                                            }}
                                        />
                                    </div>
                                    <p>
                                        { !movie.name || !movie.original_name ? 
                                            (movie.title ? movie.title : movie.original_title) :
                                            (movie.name ? movie.name : movie.original_name) 
                                        }
                                    </p>
                                    <GenresList genres={movie?.genre_ids} font='12px'/>
                                </div>

                                <div className="poster-controls-buttons">
                                    <div className="circle">
                                        <HiVolumeOff size={17} color='#fff'/>
                                    </div>
                                    <div className="circle">
                                        <AiOutlineLike size={17} color='#fff'/>
                                    </div>
                                    <div className="circle">
                                        <AiOutlineDislike size={17} color='#fff'/>
                                    </div>
                                    <div className="circle">
                                        <FaPlus size={17} color='#fff'/>
                                    </div>

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
export default MoviesRow;