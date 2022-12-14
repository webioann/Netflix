import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovieData, ITrendingDataResponse } from "../types/trendigMovies.types";

type paramsType = {
    request_path: string
}

export const fetchMoviesData = createApi({
    reducerPath: 'moviesData',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        fetchMovies: builder.query<IMovieData[], paramsType>({
            query: (params: paramsType ) => ({
                url: params.request_path,
                params: {
                    url: params.request_path
                }
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
    }), 
})
export const { useFetchMoviesQuery } = fetchMoviesData;