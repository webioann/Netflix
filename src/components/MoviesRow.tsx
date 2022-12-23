import React, { useState, useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovie, resetMovieData, openModal } from '../redux/reduxSlice'
import { useFetchMoviesQuery } from '../redux/fetchMoviesData'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike  } from 'react-icons/ai'
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
    const [movieName, setMovieName] = useState('')
    const dispatch = useAppDispatch()

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

    console.log('MOVIE', movies);

    if( movies ) {
        return (
            <section className='row-container'>
                <h2 className='row-title'>{title}</h2>

                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => (
                        <li key={movie.id} className='poster-wrapper'>
                            <img 
                                className='poster'
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
                                alt={movie.name}
                            />
                            <div className="poster-controls">
                                <div className="poster-controls-info">

                                    <div className="poster-controls-play raw">
                                        <FaPlay 
                                            size={20} 
                                            color='#fff'
                                            onClick={() => {
                                                dispatch(resetMovieData())
                                                dispatch(selectMovie({
                                                    media_type: type,
                                                    movie_id: Number(movie.id)
                                                }))
                                                dispatch(openModal())
                                            }}
                                        />
                                    </div>
                                    <p>
                                        { type === 'movie' ? 
                                            (movie.title ? movie.title : movie.original_title) :
                                            (movie.name ? movie.name : movie.original_name)
                                        }
                                    </p>
                                </div>

                                <div className="poster-controls-buttons">
                                    <div className="circle">
                                        <HiVolumeOff size={20} color='green'/>
                                    </div>
                                    <div className="circle">
                                        <AiOutlineLike size={20} color='green'/>
                                    </div>
                                    <div className="circle">
                                        <AiOutlineDislike size={20} color='green'/>
                                    </div>
                                    <div className="circle">
                                        <FaPlus size={20} color='green'/>
                                    </div>

                                </div>
                            </div>
                        </li>
                    ))}
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