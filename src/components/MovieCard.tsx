import React, { useState, useEffect } from 'react'
import { IMovie } from '../types/movies.types'
import GenresList from './GenresList'
import MoviePoster from './MoviePoster'
import MovieNameExtractor from './MovieNameExtractor'
import PlayVideo_Button from './PlayVideo_Button'
import Button_VolumeOff from './Button_VolumeOff'
import Button_Like from './Button_Like'
import Button_Dislike from './Button_DisLike'
import SaveInMyList_Button from './SaveInMyList_Button'
import '../style/movie-card.scss'

interface IMovieCard {
    movie: IMovie
    media_type: 'movie' | 'tv' 
}

const MovieCard: React.FC<IMovieCard> = ({ movie, media_type }) => {

    return (
        <li className='movie-card'>
            <MoviePoster movie={movie} size={290}/>
            <div className="movie-card-controls">
                <div className="poster-controls-info">
                    <PlayVideo_Button ui='circle' media_type={media_type} movie_id={movie.id}/>
                    <MovieNameExtractor movie={movie} fontSizeInRem={1} fontWeight={400}/>
                    <GenresList genres={movie?.genre_ids} font={10}/>
                </div>

                <div className="poster-controls-buttons">
                    <Button_VolumeOff/>
                    <Button_Like/>
                    <Button_Dislike/>
                    <SaveInMyList_Button ui='circle' movie={movie} media_type={media_type}/>
                </div>
            </div>
        </li>
    )
}

export default MovieCard;