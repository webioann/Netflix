import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IOriginsDataResponse, IOriginals } from "../types/netflixOriginals.types";

const networks = 213


export const netflixOriginalsApi = createApi({
    reducerPath: 'netflixoriginals',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/discover'
    }),
    endpoints: builder => ({
        fetchNetflixOriginalsMovies: builder.query<IOriginals[], string>({
            query: () => ({
                url: `/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=${networks}`,
            }),
            transformResponse: (respons: IOriginsDataResponse) => respons.results,
        }),
    }), 
})

export const { useFetchNetflixOriginalsMoviesQuery } = netflixOriginalsApi;
