import { useState, useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { selectMovie, resetMovieData, openModal,   startVideoPlayer } from '../redux/reduxSlice'
import { IMovie } from '../types/movies.types'

export const useStartVideoPlayer = ( movie_id: IMovie, media_type: 'movie' | 'tv') => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        const start = async () => {
            if(movie_id) {
                await dispatch(resetMovieData());
                await dispatch(selectMovie({
                    media_type: media_type,
                    movie_id: Number(movie_id)
                }))
                dispatch(openModal())
            }
        }
        start();
    }, [movie_id])
};