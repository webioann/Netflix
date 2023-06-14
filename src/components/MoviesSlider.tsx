import React, { useState, useRef } from 'react'
import { useFetchMoviesQuery } from '../redux/MOVIES_API'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from './MovieCard'
import '../style/movies-slider.scss'

type MovieRowPropsType = {
    title: string
    path: string
    media_type: 'movie' | 'tv' 
}

const MoviesSlider = ({ title, path, media_type }: MovieRowPropsType) => {

    const { data: movies } = useFetchMoviesQuery({path: path})
    const rowRef = useRef<HTMLUListElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const onArrowClick = (direct: 'left' | 'right') => {
        if( rowRef.current ) {
            setIsMoved(true)
            const { scrollLeft, clientWidth, getBoundingClientRect } = rowRef.current

            console.log(getBoundingClientRect)

            const scrollTo = direct === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    if( movies ) {
        return (
            <section className='slider-container'>
                <h2 className='row-title'>{title}</h2>
                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => ( <MovieCard movie={movie} media_type={media_type} key={movie.id}/> ))}
                </ul>
                <div className="arrow-icons-wrapper">
                    <SlArrowLeft className={ isMoved ? 'arrow' : 'hidden-arrow' }
                        onClick={() => onArrowClick('left')}
                        size={30}
                        color='#fff' 
                    />
                    <SlArrowRight className='arrow'
                        onClick={() => onArrowClick('right')} 
                        size={30}
                        color='#fff' 
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

