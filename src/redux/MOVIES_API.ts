import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse } from "../types/movies.types"

type paramsType = {
    path: string
}

export const MOVIES_API = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        fetchMovies: builder.query<IMovie[], paramsType>({
            query: (params: paramsType ) => ({
                url: params.path,
                params: {
                    url: params.path
                }
            }),
            transformResponse: (respons: IMoviesDataResponse) => respons.results,
        }),
        randomMovie: builder.query<IMovie, string>({
            query: ( ) => ({
                url: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`
            }),
            transformResponse: (respons: IMoviesDataResponse) => {
                const withPosters = respons.results.filter((elem) => { return ( elem.poster_path && elem.backdrop_path ) !== null })
                let idx = Math.floor(Math.random() * respons.results.length - 1)
                const randomMovieIndex = withPosters.findIndex((elem, index) => { return index === idx })
                const randomMovie = respons.results.filter((elem, index) => { return index === randomMovieIndex })
                return ({...randomMovie[0]})
            },
        }),

    }), 
})
export const { 
    useFetchMoviesQuery,
    useLazyFetchMoviesQuery,
    useRandomMovieQuery,
    useLazyRandomMovieQuery,
    
} = MOVIES_API;
