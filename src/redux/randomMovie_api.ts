import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse } from "../types/movies.types"

type mediaTypes = {
    media: 'tv' | 'movie'
}

export const randomMovie_api = createApi({
    reducerPath: 'random_movie',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        randomMovie: builder.query<IMovie, mediaTypes>({
            query: (params: mediaTypes ) => ({
                url: `/discover/${params.media}?api_key=${process.env.TMDB_API_KEY}&with_networks=213`,
                params: {
                    media: params.media
                }
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
export const { useRandomMovieQuery, } = randomMovie_api;
