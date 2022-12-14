import React from 'react'
import { useFetchMoviesQuery } from '../redux/fetchMoviesData';
import '../style/movies-slider-row.scss'

type PropsType = {
    title: string
    request_path: string
    isLarge: boolean
}

const MoviesSliderRow: React.FC<PropsType> = ({ title, request_path, isLarge }) => {

    const { data: movies } = useFetchMoviesQuery({request_path: request_path})

    if( movies ) {
        return (
            <section className='row-container'>
                <h2 className='row-title'>{title}</h2>
                <div className="row-movies">
                    { movies?.map(movie => (
                        <img className={isLarge ? 'large-poster' : 'poster'}
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original/${
                                isLarge ? movie.poster_path : movie.backdrop_path
                            }`} 
                            alt={movie.name}/>
                    ))}
                </div>
            </section>
        )
    }
    else{
        return ( <div className='--hidden-row'/> )
    }
}
export default MoviesSliderRow;