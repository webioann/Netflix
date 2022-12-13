import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovieData, ITrendingDataResponse } from "../types/trendigMovies.types";
import { IOriginsDataResponse, IOriginals } from "../types/netflixOriginals.types";

type languageParams = {
    language: "en-US" | "ua"
}
type genresParams = {
    genres: number
}
type networkParams = {
    networks: 213
}

export const moviesApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        trendingMovies: builder.query<IMovieData[], languageParams>({
            query: (params: languageParams ) => ({
                url: `/all/week?api_key=${process.env.TMDB_API_KEY}`,
                params: {
                    language: params.language
                }
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
        netflixOriginalsMovies: builder.query<IOriginals[], networkParams>({
            query: (params: networkParams) => ({
                url: `/tv?api_key=${process.env.TMDB_API_KEY}`,
                params: {
                    with_networks: params.networks
                }
            }),
            transformResponse: (respons: IOriginsDataResponse) => respons.results,
        }),
        moviesByGenres: builder.query<IMovieData[], genresParams>({
            query: (params: genresParams) => ({
                url: `/discover/movie?api_key=${process.env.TMDB_API_KEY}`,
                params: {
                    with_genres: params.genres
                }
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
        topRatedMovies: builder.query<IMovieData[], languageParams>({
            query: (params: languageParams) => ({
                url: `/discover/movie?api_key=${process.env.TMDB_API_KEY}`,
                params: {
                    language: params.language
                }
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),

    }), 
})

export const { 
    useLazyTrendingMoviesQuery,
    useLazyNetflixOriginalsMoviesQuery,
    useLazyMoviesByGenresQuery,
    useLazyTopRatedMoviesQuery
} = moviesApi;
