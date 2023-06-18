import React, { useState, useRef, useEffect } from 'react'
import { useFetchMoviesQuery } from '../redux/allMovies_api'
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
    const [rightSliderEnd, setRightSliderEnd] = useState(false)

    // ==== need create prop 'movie_card_width' ====
    const width: number = 290;

    useEffect(() => {
        if( rowRef.current && movies) {
            const { scrollLeft, clientWidth } = rowRef.current
            console.log('first'+scrollLeft)
            // const a = rowRef.current.getBoundingClientRect().x
            // const b = rowRef.current.getBoundingClientRect().width
            // console.log(a, b)

        }
    }, [])


    const onArrowClick = (direct: 'left' | 'right') => {
        if( rowRef.current && movies) {
            setIsMoved(true)
            const { scrollLeft, clientWidth, getBoundingClientRect } = rowRef.current
            const scrollTo = direct === 'left' ? scrollLeft - clientWidth - width : scrollLeft + clientWidth - width
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
            // console.log(scrollLeft + clientWidth)
            // console.log(`Wid ${movies.length * width}`)
            if(scrollLeft + clientWidth === movies.length * (width + 2 + 2) + 20 * 2) {
                console.log('END')
                setRightSliderEnd(true)
            }

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
                    <SlArrowRight className={ rightSliderEnd ? 'hidden-arrow' : 'arrow' }
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

