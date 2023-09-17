import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMoviesDataResponse } from '../types/movies.types';

type search_type = { search: string }

export const searchMovie = createApi({
    reducerPath: 'search_movie',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        multiSearch: builder.query({
            query: (params: search_type) => ({
                url: `/search/multi?query=${params.search}&api_key=${process.env.TMDB_API_KEY}&include_adult=false&language=en-US&page=1`,
                params: {
                    search: params.search
                }
            }),
            transformResponse: (respons: IMoviesDataResponse) => respons.results,
        }),
        searchMovie: builder.query({
            query: (params: search_type) => ({
                url: `/search/multi?query=${params.search}&api_key=${process.env.TMDB_API_KEY}&include_adult=false&language=en-US&page=1`,
                params: {
                    search: params.search
                }
            }),
            transformResponse: (respons: IMoviesDataResponse) => {
                let withoutPersons = respons.results.filter((obj) => obj.media_type !== 'person' && ( obj.backdrop_path || obj.poster_path ) )
                return withoutPersons
            },
        }),

    }),
});

export const { useLazyMultiSearchQuery, useLazySearchMovieQuery } = searchMovie;
