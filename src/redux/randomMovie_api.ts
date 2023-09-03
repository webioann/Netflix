import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IMovie, IMoviesDataResponse } from "../types/movies.types"

type mediaTypes = {
    media: 'tv' | 'movie'
}

export const randomMovie_api = createApi({
    reducerPath: 'random_movie',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints: builder => ({
        randomMovie: builder.query<IMovie, mediaTypes>({
            query: (params: mediaTypes ) => ({
                url: `/discover/${params.media}?api_key=${process.env.TMDB_API_KEY}&sort_by=popularity.desc&language=en-US&page=1`,
                params: {
                    media: params.media
                }
            }),
            transformResponse: (respons: IMoviesDataResponse) => {
                const withPosters = respons.results.filter((elem) => { return ( elem.poster_path && elem.backdrop_path ) !== null })
                let idx = Math.floor(Math.random() * respons.results.length - 1)
                const randomMovieIndex = withPosters.findIndex((elem, index) => { return index === idx })
                const randomMovie = respons.results.filter((elem, index) => { return index === randomMovieIndex })
                // reserve variant of data if first is broken
                let reserveIndex: number
                let responseLength = respons.results.length
                if( randomMovieIndex < responseLength ) {
                    reserveIndex = randomMovieIndex + 1
                }
                else { reserveIndex = randomMovieIndex - 1 }
                const reserveMovie = respons.results.filter((elem, index) => { return index === reserveIndex })
                console.log(randomMovieIndex)
                if(randomMovie) {
                    return ({ ...randomMovie[0] })
                }
                else{  return ({  ...reserveMovie[0]})}
            },
        }),
    }), 
})
export const { useRandomMovieQuery, } = randomMovie_api;

// &with_networks=213

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFjZTk4ZmFiY2RjYTMwYjQxNmM1ZmVkY2U0ODJmNSIsInN1YiI6IjYzOTg4ZmQyYTFhOWJhMDA3ZGZhMjBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xg85CVPHncUhXP7dsfllqMbNMn5tP73-vbyPAi7Blbk'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));