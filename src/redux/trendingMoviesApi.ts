import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { CoinsSearchType, CoinsSearchData } from "../Types/coinsSearch.types"
// import { CoinsType, ICoinsRequestParams } from '../Types/coins.types'
// import { coinDetailsType } from '../Types/coinDetails.types'
import { IMovieData, ITrendingDataResponse } from "../types/trendigMovies.types";

const lang = 'en-US'


export const trendingMoviesApi = createApi({
    reducerPath: 'trendingMovies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/trending'
    }),
    endpoints: builder => ({
        trendingMovies: builder.query<IMovieData[], string>({
            query: () => ({
                url: `/all/week?api_key=${process.env.TMDB_API_KEY}&language=${lang}`,
            }),
            transformResponse: (respons: ITrendingDataResponse) => respons.results,
        }),
    }), 
})

export const { useTrendingMoviesQuery } = trendingMoviesApi;

