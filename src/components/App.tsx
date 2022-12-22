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
import { requestsPath } from '../data/requests'

import TEST from './TEST'

const  App: React.FC = () => {

  useAuthStateCurrentUser();
  const currentUser = useAppSelector(state => state.redux.currentUser)
  const modalIsOpen = useAppSelector(state => state.redux.modalIsOpen)

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
            <MoviesRow title='Netflix originals' path={requestsPath.originals}  type='tv' isLarge={true}/>
            {/* <MoviesRow title='Trending' path={requestsPath.trendings}  type='tv' isLarge={false}/> */}
            <MoviesRow title='Top of rates' path={requestsPath.topRated}  type='movie' isLarge={false}/>
            <MoviesRow title='Actions' path={requestsPath.actions}  type='movie' isLarge={false}/>
            <MoviesRow title='Comedies' path={requestsPath.comedies} type='movie' isLarge={false}/>
            <MoviesRow title='Horrors' path={requestsPath.horrors}  type='movie' isLarge={false}/>
            <MoviesRow title='Romances' path={requestsPath.romances}  type='movie' isLarge={false}/>
            <MoviesRow title='Documentaries' path={requestsPath.documentaries} type='movie' isLarge={false}/>


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
