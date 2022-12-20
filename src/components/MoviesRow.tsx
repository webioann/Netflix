import React, { useState, useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovie, openModal } from '../redux/reduxSlice'
import { useFetchMoviesQuery } from '../redux/fetchMoviesData'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import '../style/movies-row.scss'

type MovieRowPropsType = {
    title: string
    path: string
    isLarge: boolean
    type: 'movie' | 'tv' | 'all'
}

const MoviesRow = ({ title, path, isLarge, type }: MovieRowPropsType) => {

    const { data: movies } = useFetchMoviesQuery({path: path})
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)
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

    if( movies ) {
        return (
            <section className='row-container'>
                <h2 className='row-title'>{title}</h2>
                <div className="row-movies" ref={rowRef}>

                    { movies?.map(movie => (
                        <img className={isLarge ? 'large-poster' : 'poster'}
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original/${
                                isLarge ? movie.poster_path : movie.backdrop_path
                            }`} 
                            alt={movie.name}
                            onClick={() => {
                                dispatch(selectMovie({
                                    media_type: type,
                                    movie_id: Number(movie.id)
                                }))
                                dispatch(openModal())
                            }}
                        />
                    ))}
                </div>
                <div className='arrow-icons-wrapper'>
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
                </div >
            </section>
        )
    }
    else{
        return ( <div className='--hidden-row'/> )
    } 
}
export default MoviesRow;