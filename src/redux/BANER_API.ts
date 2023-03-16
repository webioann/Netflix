import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse } from "../types/movies.types"

export const BANER_API = createApi({
    reducerPath: 'baner',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        banerMovies: builder.query<IMovie[], string>({
            query: () => ({
                url: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`,
            }),
            transformResponse: (respons: IMoviesDataResponse) =>  respons.results
        }),
    }), 
})

export const { useLazyBanerMoviesQuery } = BANER_API;
