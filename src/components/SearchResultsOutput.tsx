import React, { useState, useRef } from 'react'
import { useAppSelector } from '../redux/store'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from './MovieCard'
import '../style/movies-slider.scss'

const SearchResultsOutput = () => {
//=== SearchResultsOutput output in movie carousel all founded movies === 

    const searchQuery = useAppSelector(state => state.redux.searchQuery)
    const movies = useAppSelector(state => state.redux.searchResults)
    const rowRef = useRef<HTMLUListElement>(null)
    const [isMoved, setIsMoved] = useState(false)
    const [rightSliderEnd, setRightSliderEnd] = useState(false) 

    // ==== need create prop 'movie_card_width' ====
    const width: number = 290;

    const onArrowClick = (direct: 'left' | 'right') => {
        if( rowRef.current && movies) {
            setIsMoved(true)
            const { scrollLeft, clientWidth, getBoundingClientRect } = rowRef.current
            const scrollTo = direct === 'left' ? scrollLeft - clientWidth - width : scrollLeft + clientWidth - width
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
            if(scrollLeft + clientWidth === movies.length * (width + 2 + 2) + 20 * 2) {
                setRightSliderEnd(true)
            }
        }
    }

    if( movies ) {
        return (
            <section className='slider-container'>
                <h3 className='row-title results'>Search results by word
                    <span>{searchQuery}</span>
                </h3>
                <ul className="row-movies" ref={rowRef}>
                    { movies?.map(movie => ( <MovieCard movie={movie} key={movie.id}/> ))}
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
    else{ return null } 
}

export default SearchResultsOutput;

