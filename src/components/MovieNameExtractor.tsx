import React from 'react'
import { IMovie } from '../types/movies.types';

type MovieNameExtractorType = {
    movie: IMovie
    fontSizeInRem: number
    fontWeight: number
}

const MovieNameExtractor: React.FC<MovieNameExtractorType> = ({ movie, fontSizeInRem, fontWeight }) => {

    return (
        <p style={{
            fontSize: `${fontSizeInRem}rem`,
            fontWeight: fontWeight,
            paddingTop: '1rem',
            }}>
            { movie.title ? movie.title : movie.name }
        </p>
    )
}

export default MovieNameExtractor;