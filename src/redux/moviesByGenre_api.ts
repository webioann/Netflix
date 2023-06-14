import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse } from "../types/movies.types"

type paramsType = {
    media: 'tv' | 'movie'
    genre: number
}

export const moviesByGenre_api = createApi({
    reducerPath: 'movies_by_genre',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        getMoviesByGenre: builder.query<IMovie[], paramsType>({
            query: (params: paramsType ) => ({
                url: `/discover/${params.media}?api_key=${process.env.TMDB_API_KEY}&with_genres=${params.genre}`,
                params: {
                    media: params.media,
                    genre: params.genre
                }
            }),
            transformResponse: (respons: IMoviesDataResponse) => respons.results,
        }),
    }), 
})
export const { useGetMoviesByGenreQuery, useLazyGetMoviesByGenreQuery } = moviesByGenre_api;
