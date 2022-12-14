import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import Container from './Container'
import Header from './Header'
import Baner from './Baner'
import MoviesSliderRow from './MoviesSliderRow'
import { requestsPath } from '../data/requests'

const  App: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Baner/>
      <MoviesSliderRow title='Netflix originals' request_path={requestsPath.originals} isLarge={true}/>
      <MoviesSliderRow title='Trending' request_path={requestsPath.trendings} isLarge={false}/>
      <MoviesSliderRow title='Top of rates' request_path={requestsPath.topRated} isLarge={false}/>
      <MoviesSliderRow title='Actions' request_path={requestsPath.actions} isLarge={false}/>
      <MoviesSliderRow title='Comedies' request_path={requestsPath.comedies} isLarge={false}/>
      <MoviesSliderRow title='Horrors' request_path={requestsPath.horrors} isLarge={false}/>
      <MoviesSliderRow title='Romances' request_path={requestsPath.romances} isLarge={false}/>
      <MoviesSliderRow title='Documentaries' request_path={requestsPath.documentaries} isLarge={false}/>
    </Container>
  )
}
export default App;
