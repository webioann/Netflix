import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IOriginsDataResponse, IOriginals } from "../types/netflixOriginals.types";
import { IMovieData, ITrendingDataResponse } from "../types/trendigMovies.types";

const networks = 213
const lang = 'en-US'


export const netflixOriginalsApi = createApi({
    reducerPath: 'netflixoriginals',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/discover'
    }),
    endpoints: builder => ({
        netflixOriginalsMovies: builder.query<IOriginals[], string>({
            query: () => ({
                url: `/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=${networks}`,
            }),
            transformResponse: (respons: IOriginsDataResponse) => respons.results,
        }),


        topRatedMovies: builder.query<IMovieData[], string>({
            query: () => ({
                url: `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),



        actionMovies: builder.query<IMovieData[], string>({
            query: () => ({
                url: `/all/week?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
        comedyMovies: builder.query<IMovieData[], string>({
            query: () => ({
                url: `/all/week?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
        horrorMovies: builder.query<IMovieData[], string>({
            query: () => ({
                url: `/all/week?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
        romanceMovies: builder.query<IMovieData[], string>({
            query: () => ({
                url: `/all/week?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
        documentariesMovies: builder.query<IMovieData[], string>({
            query: () => ({
                url: `/all/week?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),


    }), 
})

export const { 
    useNetflixOriginalsMoviesQuery,

} = netflixOriginalsApi;
