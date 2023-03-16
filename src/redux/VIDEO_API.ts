import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IVideoDataResponse } from "../types/movies.types"

type paramsType = {
    path: string
}
type videoParams = { 
    movie_id: number 
    media_type: string | undefined
}

export const VIDEO_API = createApi({
    reducerPath: 'video',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        getTrailerVideoURL: builder.query<string, videoParams>({
            query: (params: videoParams ) => ({
                url: `/${params.media_type}/${params.movie_id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
                params: {
                    movie_id: params.movie_id,
                    media_type: params.media_type
                }
            }),
            transformResponse: (respons: IVideoDataResponse) => {
                const index = respons.results.findIndex((element ) => element.type === 'Trailer')
                return respons.results[index]?.key
            },
        }),
    }), 
})

export const { useLazyGetTrailerVideoURLQuery } = VIDEO_API;
