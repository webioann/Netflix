import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface IGenresList {
    id: number
    name: string
}

export const GERNES_API = createApi({
    reducerPath: 'gernes',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        gernesList: builder.query<IGenresList[], string>({
            query: () => ({
                url:`/genre/tv/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
            }),
            // transformResponse: (respons: IMoviesDataResponse) => respons.results,
        }),
    }), 
})

export const { useGernesListQuery } = GERNES_API;
