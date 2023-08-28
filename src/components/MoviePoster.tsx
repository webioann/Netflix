import React from 'react'
import { IMovie } from '../types/movies.types';
import { IMG_BASE_URL } from '../data/constants'

type MoviePosterType = {
    movie: IMovie
    size: number
}

const MoviePoster: React.FC<MoviePosterType> = ({ movie, size }) => {
    
    return (
        <img 
            style={{width: `${size}px`, height: `${size * 0.5625}px`, objectFit: 'cover' }}
            src={`${IMG_BASE_URL}${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
            alt={ movie.media_type === 'movie' ? movie.title : movie.name }
        />
    )
}

export default MoviePoster;