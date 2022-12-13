import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { useLazyTrendingMoviesQuery, useLazyNetflixOriginalsMoviesQuery, useLazyMoviesByGenresQuery, useLazyTopRatedMoviesQuery } from '../redux/moviesApi'
import { useAppSelector } from '../redux/store'
import Container from './Container'
import Header from './Header'
import Baner from './Baner'
import PosterRow from './PosterRow'

const  App: React.FC = () => {

  const currentLanguage = "en-US";
  const currentNetworks = 213;

  const [ fetchTrendingMovies, { data: trendingMovies }] = useLazyTrendingMoviesQuery()
  const [ fetchTopRatedMovies, { data: topRatedMovies } ] = useLazyTopRatedMoviesQuery()
    // param ---> networks
  const [ fetchNetflixOriginalMovies, { data: originalMovies } ] = useLazyNetflixOriginalsMoviesQuery()
      // param ---> genres
  const [ fetchMoviesByGenres, { data: genresMovies } ] = useLazyMoviesByGenresQuery()

  useEffect(() => {
    fetchTrendingMovies({ language: currentLanguage })
    fetchTopRatedMovies({ language: currentLanguage })
  }, [currentLanguage])

  useEffect(() => {
    fetchNetflixOriginalMovies({ networks: currentNetworks })
  }, [currentNetworks])

  return (
    <Container>
      <Header/>
      <Baner/>
      {/* { trendingMovies?.length > 0 && <PosterRow title='Trending' movies={trendingMovies} />} */}
      
      
    </Container>
  )
}
export default App;
