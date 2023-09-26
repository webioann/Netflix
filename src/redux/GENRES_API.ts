import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface IGenresList {
    id: number
    name: string
}
type paramsType = {
    media_type: 'tv' | 'movie'
}

export const GENRES_LIST_API = createApi({
    reducerPath: 'gernes',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        gernesList: builder.query<IGenresList[], paramsType>({
            query: (params: paramsType) => ({
                url:`/genre/${params.media_type}/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
            }),
            // transformResponse: (respons: IMoviesDataResponse) => respons.results,
        }),
    }), 
})

export const { useGernesListQuery } = GENRES_LIST_API;
