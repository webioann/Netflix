import React from 'react'
import { IMovieData, ITrendingDataResponse } from "../types/trendigMovies.types";
import '../style/poster-row.scss'

type rowProps = {
    title: string
    isLarge: boolean
    movies: IMovieData[]
}

const PosterRow: React.FC<rowProps> = ({title, movies,isLarge }) => {

    return (
        <section className='poster-row-container'>
            <h2 className='poster-row-title'>{title}</h2>
            <div className="posters-row">
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

export default PosterRow