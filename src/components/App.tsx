import React, { useState, useEffect , useRef} from 'react'
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
import {
  trendings,
  originals,
  topRated,
  actions,
  comedies,
  horrors,
  romances,
  documentaries
} from '../data/requests'

import TEST from './TEST'
import { useTestQuery } from '../redux/TEST_API'

const  App: React.FC = () => {

  useAuthStateCurrentUser();
  const currentUser = useAppSelector(state => state.redux.currentUser)
  const modalIsOpen = useAppSelector(state => state.redux.modalIsOpen)

  // const {data: testData } = useTestQuery('')
  // console.log(testData)

  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1
  // }
  // const divRef = useRef<HTMLDivElement>(null)

  // const func = () => {
  //   if( divRef.current ) {

  //   }
  //   console.log('OBSERVE')
  // }
  

  // useEffect(() => {
  //   const observer = new IntersectionObserver(func, options)

  //   if( divRef.current ) {
  //     observer.observe(divRef.current)
  //   }
  // }, [])

  return (
    <Container scroll={modalIsOpen}>
      <Header/>
      <Modal/>
      <Routes>
          <Route path="/" element={<Home_page>
            <Baner/>
            <MoviesRow title='Netflix originals' path={originals}  type='tv'/>
            {/* <MoviesRow title='Trending' path={trendings}  type='all'/>
            <MoviesRow title='Top of rates' path={topRated}  type='movie'/>
            <MoviesRow title='Actions' path={actions}  type='movie'/>
            <MoviesRow title='Comedies' path={comedies} type='movie'/>
            <MoviesRow title='Horrors' path={horrors}  type='movie'/>
            <MoviesRow title='Romances' path={romances}  type='movie'/>
            <MoviesRow title='Documentaries' path={documentaries} type='movie'/> */}
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
