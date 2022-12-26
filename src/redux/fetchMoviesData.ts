import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse, IVideo, IVideoDataResponse } from "../types/movies.types"
import { API_KEY } from '../helpers/constants';

type paramsType = {
    path: string
}
type videoParams = { 
    movie_id: number 
    media_type: string
}

export const fetchMoviesData = createApi({
    reducerPath: 'moviesData',
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
        getVideoData: builder.query<IVideo[], videoParams>({
            query: (params: videoParams ) => ({
                url: `/${params.media_type}/${params.movie_id}/videos?api_key=${API_KEY}&language=en-US`,
                params: {
                    movie_id: params.movie_id,
                    media_type: params.media_type
                }
            }),
            transformResponse: (respons: IVideoDataResponse) => respons.results,
        }),
        randomMovie: builder.query<IMovie, string>({
            query: ( ) => ({
                url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
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
    useLazyGetVideoDataQuery,
    useGetVideoDataQuery,
    useRandomMovieQuery,
    useLazyRandomMovieQuery,
    
} = fetchMoviesData;
