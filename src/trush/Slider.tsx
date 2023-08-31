import React, { useState, useRef, useEffect } from 'react'
import { useGetMoviesByGenreQuery } from '../redux/moviesByGenre_api'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from '../components/MovieCard'
import '../style/movies-slider.scss'

import {
    trendings,
    originals,
    topRated,
    actions,
    comedies,
    horrors,
    romances,
    documentaries
} from '../data/requests'
import { useFetchMoviesQuery } from '../redux/allMovies_api'


type MovieRowPropsType = {
    title: string
    media: 'tv' | 'movie'
    genre: number
}

const Slider = ({ title, media, genre }: MovieRowPropsType) => {

    // const { data: movies } = useGetMoviesByGenreQuery({ media: media, genre: genre })
    const { data: movies } = useFetchMoviesQuery({path: originals})

    const rowRef = useRef<HTMLUListElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const [moveLeft, setMoveLeft] = useState(false)
    const [moveRight, setMoveRight] = useState(true)
    const [clientWidth, setClientWidth] = useState(0)
    const dataSize: number = 0

    // ==== need create prop 'movie_card_width' ====
    const width = 290;

    useEffect(() => {
        let wid = 0
        movies && console.log('render'+`${movies.length}`)
        if(rowRef.current) {
            const { clientWidth, getBoundingClientRect } = rowRef.current
            setClientWidth(clientWidth)
            wid = clientWidth
        }
    })

    const moveSliderCards = (direct: 'left' | 'right') => { 
        if(rowRef.current) {
            setIsMoved(true)
            if(direct === 'left') {
                setMoveLeft(true)
                rowRef.current.style.transform = `translateX(${width}px)`
            }
            if(direct === 'right') {
                rowRef.current.style.transform = `translateX(${-width}px)`
            }
        }
    }
    const toLeft = () => {
        if(rowRef.current) {
            const { scrollLeft, clientWidth, getBoundingClientRect } = rowRef.current

            setIsMoved(true)
            setMoveLeft(true)
            rowRef.current.style.transform = `translateX(${width}px)`
        }
    }
    const toRight = () => {
        if(rowRef.current) {
            const { scrollLeft, clientWidth, getBoundingClientRect } = rowRef.current
            setMoveRight(true)
            rowRef.current.style.transform = `translateX(${-width}px)`
        }
    }

    if( movies ) {
        return (
            <section className='slider-container'>
                <h2 className='row-title'>{title}</h2>
                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => ( <MovieCard movie={movie} media_type={media} key={movie.id}/> ))}
                </ul>
                <div className="arrow-icons-wrapper">
                    <SlArrowLeft className={ isMoved ? 'arrow' : 'hidden-arrow' }
                        onClick={() => moveSliderCards('left')}
                        size={30}
                        color='#fff' 
                    />
                    <SlArrowRight className='arrow'
                        onClick={() => moveSliderCards('right')} 
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

