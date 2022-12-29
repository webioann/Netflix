import React, { useState, useRef } from 'react'
import { useFetchMoviesQuery } from '../redux/fetchMoviesData'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from './MovieCard'
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

    // console.log(movies);

    if( movies ) {
        return (
            <section className='slider-container'>
                <h2 className='row-title'>{title}</h2>

                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => ( <MovieCard movie={movie} type={type} key={movie.id}/> ))}
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
