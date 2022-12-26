import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../helpers/constants';
import {
    IMovie,
    IMoviesDataResponse,
    IVideo,
    IVideoDataResponse,
} from '../types/movies.types';

// type paramsType = {
//     path: string
// }
// type videoParams = {
//     movie_id: number
//     media_type: string
// }

export const searchMovie = createApi({
    reducerPath: 'search_movie',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        searchMovies: builder.query({
            query: () => ({
                url: `/search/movie=63756f8411c066007b1253c9?api_key=${API_KEY}&language=en-US&page=1&include_adult=true`,
                // params: {
                //     url: params.path
                // }
            }),
            // transformResponse: (respons: IMoviesDataResponse) => respons.results,
        }),
    }),
});
export const { useSearchMoviesQuery } = searchMovie;
