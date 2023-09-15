import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse } from "../types/movies.types"

type mediaTypes = {
    media_type: 'tv' | 'movie'
}

export const BANNER_API = createApi({
    reducerPath: 'random_movie',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        bannerMovie: builder.query<IMovie, mediaTypes>({
            query: (params: mediaTypes ) => ({
                url: `/trending/${params.media_type}/week?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
                params: {
                    media_type: params.media_type
                }
            }),
            transformResponse: (respons: IMoviesDataResponse) => {
                const withPosters = respons.results.filter((elem) => { return ( elem.poster_path && elem.backdrop_path ) !== null })
                let idx = Math.floor(Math.random() * respons.results.length - 1)
                const randomMovieIndex = withPosters.findIndex((elem, index) => { return index === idx })
                const randomMovie = respons.results.filter((elem, index) => { return index === randomMovieIndex })
                // reserve variant of data if first is broken
                let reserveIndex: number
                let responseLength = respons.results.length
                if( randomMovieIndex < responseLength ) {
                    reserveIndex = randomMovieIndex + 1
                }
                else { reserveIndex = randomMovieIndex - 1 }
                const reserveMovie = respons.results.filter((elem, index) => { return index === reserveIndex })
                if(randomMovie) {
                    return ({ ...randomMovie[0] })
                }
                else{  return ({  ...reserveMovie[0]})}
            },
        }),
    }), 
})
export const { useBannerMovieQuery, useLazyBannerMovieQuery } = BANNER_API;

// &with_networks=213
