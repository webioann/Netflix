import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IVideoDataResponse, IVideoParams } from "../types/video.types"

export const VIDEO_API = createApi({
    reducerPath: 'video',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        getTrailerVideoURL: builder.query<string, IVideoParams>({
            query: (params: IVideoParams ) => ({
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
