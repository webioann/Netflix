import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { createCurrentUser, deleteCurrentUser } from '../redux/reduxSlice'
import { IGenres, TypeOfMovie } from '../types/movies.types'

export const useMovieKeyExtractor = () => {

    const [videoKey, setVideoKey] = useState('')
    const [genres, setGenres] = useState<IGenres | []>([])
    const movieID = useAppSelector(state => state.redux.movieID)

    console.log(`VIDEO ID ID --> ${movieID}`);

    useEffect(() => {
        if( movieID === 0 ) return
        const keyExtractor = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
            .then( (response) => response.json() )
            .catch( (error) => console.log(error.message) )
                console.log(data)
            if( data ) {
                const index = data.results?.findIndex((element: TypeOfMovie ) => element.type === 'Trailer')
                setVideoKey(data.results[index]?.key)
            }
            // if( data?.genres ) {
            //     setGenres(data.genres)
            // }
        }
        keyExtractor();
    }, [movieID])

    return videoKey 
};
// ${selectedMovie?.mediaType === 'tv' ? 'tv' : 'movie'}/
