import React, { useState, useRef, useEffect } from 'react'
import { useFetchMoviesQuery } from '../redux/fetchMoviesData'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import '../style/movies-row.scss'

type MovieRowPropsType = {
    title: string
    request_path: string
    isLarge: boolean
}

const MoviesRow = ({ title, request_path, isLarge }: MovieRowPropsType) => {

    const { data: movies } = useFetchMoviesQuery({request_path: request_path})
    const [leftArrowVisibility, setLeftArrowVisibility] = useState(false)
    const [rightArrowVisibility, setRightArrowVisibility] = useState(true)
    const rowRef = useRef<HTMLDivElement>(null)

    const onArrowClick = (direct: 'left' | 'right') => {
        if( rowRef.current ) {
            const { scrollLeft, clientWidth } = rowRef.current
            const scrollTo = direct === 'left' 
            ? scrollLeft - clientWidth 
            : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
            scrollLeft > 1 ? setLeftArrowVisibility(true) : setLeftArrowVisibility(false)
            scrollLeft == clientWidth ? setRightArrowVisibility(false) : setRightArrowVisibility(true)
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
                            alt={movie.name}/>
                    ))}
                </div>
                <div className='arrow-icon-wrapper'>
                        <SlArrowLeft 
                            onClick={() => onArrowClick('left')}
                            size={30} 
                            className={leftArrowVisibility ? 'arrow-icon' : 'arrow-is-hidden'}/>
                        <SlArrowRight 
                            onClick={() => onArrowClick('right')} 
                            size={30} 
                            className={rightArrowVisibility ? 'arrow-icon' : 'arrow-is-hidden'}/>
                    </div >
            </section>
        )
    }
    else{
        return ( <div className='--hidden-row'/> )
    } 
}
export default MoviesRow;