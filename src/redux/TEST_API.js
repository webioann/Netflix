import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testData = createApi({
    reducerPath: 'test',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        test: builder.query({
            query: () => ({
                url: `/genre/tv/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
            }),
            // transformResponse: (respons) => respons.results,
        }),
    }),
});
export const { useTestQuery } = testData;
