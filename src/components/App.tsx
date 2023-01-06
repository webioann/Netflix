import React, { useState, useEffect , useRef} from 'react'
import { useAuthStateCurrentUser } from '../hooks/useAuthStateCurrentUser'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import ContainerFluid from './ContainerFluid'
import Header from './Header'
import Baner from './Baner'
import Home_page from './Home_page'
import Login_page from './Login_page'
import Signup_page from './Signup_page'
import Profile_page from './Profile_page'
import Notfound_page from './Notfound_page'
import MoviesSlider from './MoviesSlider'
import MyListPage from './MyListPage'
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

// import TEST from './TEST'
// import { useTestQuery } from '../redux/TEST_API'

// import { useSearchMoviesQuery } from '../redux/SEARCH_API'
// import { useGernesListQuery } from '../redux/GERNES_API'

const  App: React.FC = () => {

  useAuthStateCurrentUser();
  const currentUser = useAppSelector(state => state.redux.currentUser)
  const modal = useAppSelector(state => state.redux.modalVisibility)

  // const { data } = useGernesListQuery('')
  // console.log(data)

  return (
    <ContainerFluid scroll={modal}>
      <Header/>
      <Modal/>
      <Routes>
          <Route path="/" element={
            <Home_page>
              <Baner/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='tv'/>
              {/* <MoviesSlider title='Trending' path={trendings}  media_type='tv'/>
              <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/> */}
            </Home_page>} 
          />
          <Route path="my_list" element={<MyListPage />}/>
          <Route path="login" element={<Login_page />}/>
          <Route path="signup" element={<Signup_page />}/>
          <Route path="*" element={<Notfound_page />} />
          {/* <Route path="/test" element={<TEST />} /> */}
          { currentUser &&  <Route path="profile" element={<Profile_page />}/>}
        </Routes>
    </ContainerFluid>
  )
}
export default App;
