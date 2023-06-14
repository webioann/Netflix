import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse } from "../types/movies.types"

type paramsType = {
    path: string
}
export const allMovies_api = createApi({
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
    }), 
})
export const { 
    useFetchMoviesQuery,
    useLazyFetchMoviesQuery,

} = allMovies_api;
