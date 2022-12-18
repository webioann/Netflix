import React, { useState, useEffect } from 'react'
import { useAuthStateCurrentUser } from '../hooks/useAuthStateCurrentUser'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import Container from './Container'
import Header from './Header'
import Baner from './Baner'
import Home_page from './Home_page'
import Login_page from './Login_page'
import Signup_page from './Signup_page'
import Profile_page from './Profile_page'
import Notfound_page from './Notfound_page'
import MoviesRow from './MoviesRow'
import Modal from './Modal'
import { requestsPath } from '../data/requests'


import TEST from './TEST'

const  App: React.FC = () => {

  useAuthStateCurrentUser();
  
  const currentUser = useAppSelector(state => state.redux.currentUser)

  return (
    <Container>
      <Header/>
      
      <Modal/>
      <Routes>
          <Route path="/" element={<Home_page>
            <Baner/>
            <MoviesRow title='Trending' request_path={requestsPath.trendings} isLarge={false}/>
            {/* <MoviesRow title='Top of rates' request_path={requestsPath.topRated} isLarge={false}/>
            <MoviesRow title='Netflix originals' request_path={requestsPath.originals} isLarge={true}/>
            <MoviesRow title='Actions' request_path={requestsPath.actions} isLarge={false}/>
            <MoviesRow title='Comedies' request_path={requestsPath.comedies} isLarge={false}/>
            <MoviesRow title='Horrors' request_path={requestsPath.horrors} isLarge={false}/>
            <MoviesRow title='Romances' request_path={requestsPath.romances} isLarge={false}/>
            <MoviesRow title='Documentaries' request_path={requestsPath.documentaries} isLarge={false}/> */}
          </Home_page>} />
          <Route path="login" element={<Login_page />}/>
          <Route path="signup" element={<Signup_page />}/>
          <Route path="*" element={<Notfound_page />} />
          {/* <Route path="/test" element={<TEST />} /> */}
          { currentUser &&  <Route path="profile" element={<Profile_page />}/>}
        </Routes>
    </Container>
  )
}
export default App;
