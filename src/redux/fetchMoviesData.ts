import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse, IVideo, IVideoDataResponse } from "../types/movies.types"

type paramsType = {
    path: string
}
type videoParams = { 
    movie_id: number 
    media_type: string
}

export const fetchMoviesData = createApi({
    reducerPath: 'moviesData',
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
        getVideoData: builder.query<IVideo[], videoParams>({
            query: (params: videoParams ) => ({
                url: `/${params.media_type === 'movie' ? 'movie' : 'tv'}/${params.movie_id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
                params: {
                    movie_id: params.movie_id,
                    media_type: params.media_type
                }
            }),
            transformResponse: (respons: IVideoDataResponse) => respons.results,
        }),
    }), 
})
export const { useFetchMoviesQuery, useLazyGetVideoDataQuery, useGetVideoDataQuery } = fetchMoviesData;
