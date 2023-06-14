import React, { useState, useRef } from 'react'
import { useGetMoviesByGenreQuery } from '../redux/moviesByGenre_api'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from './MovieCard'
import '../style/movies-slider.scss'

type MovieRowPropsType = {
    title: string
    media: 'tv' | 'movie'
    genre: number
}

const Slider = ({ title, media, genre }: MovieRowPropsType) => {

    const { data: movies } = useGetMoviesByGenreQuery({ media: media, genre: genre })
    const rowRef = useRef<HTMLUListElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const onArrowClick = (direct: 'left' | 'right') => {
        if( rowRef.current ) {
            setIsMoved(true)
            const { scrollLeft, clientWidth, getBoundingClientRect } = rowRef.current
            const scrollTo = direct === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    // movies && console.log(movies[1])

    if( movies ) {
        return (
            <section className='slider-container'>
                <h2 className='row-title'>{title}</h2>
                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => ( <MovieCard movie={movie} media_type={media} key={movie.id}/> ))}
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

export default Slider;

