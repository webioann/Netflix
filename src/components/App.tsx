import React, { useEffect, useState, useRef } from 'react'
import { useAuthStateListener } from '../hooks/useAuthStateListener'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import ContainerFluid from './ContainerFluid'
import Banner from './Banner'
import Container_Page from '../pages/Container_Page'
import PageWrapper from '../pages/PageWrapper'
import MyList_Page from '../pages/MyList_Page'
import UserRegistration_Page from '../pages/UserRegistration_Page'
import Profile_Page from '../pages/Profile_Page'
import Notfound_Page from '../pages/Notfound_Page'
import MoviesSlider from './MoviesSlider'
import NavigationPanel from './NavigationPanel'
import VideoPlayer_Popup from './VideoPlayer_Popup'
import SearchBar from './SearchBar'
import NetflixLogo from './NetflixLogo'
import Navigation from './Navigation'
import KidsLink from './KidsLink'
import GiftLink from './GiftLink'
import MessageBell from './MessageBell'
import UserProfiles from './UserProfiles'
import SpringDiv from './SpringDiv'

import { useGernesListQuery } from '../redux/GENRES_API'

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

const  App: React.FC = () => {
  
  // ===== auth state listener =====
  useAuthStateListener();

  const user = useAppSelector(state => state.redux.user)
  const startVideoPlayer = useAppSelector(state => state.redux.startVideoPlayer)
  // get list of genres for movie and tv shows
  // const { data: genresList } = useGernesListQuery({media_type: 'movie'})
  // const { data: genresList2 } = useGernesListQuery({media_type: 'tv'})
  // console.log(genresList, genresList2)
  
  return (
    <ContainerFluid scroll={startVideoPlayer}>
        <NavigationPanel>
          <NetflixLogo/>
          <Navigation/>
          <SpringDiv/>
          <SearchBar/>
          <KidsLink/>
          <GiftLink/>
          <MessageBell/>
          <UserProfiles/>
        </NavigationPanel>
        <VideoPlayer_Popup/>
        <Routes>
          <Route path="/" element={
            <Container_Page media_type='tv'>
              <Banner media='tv'/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='tv'/>
              <MoviesSlider title='Trending' path={trendings}  media_type='tv'/> 
              {/* <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/>  */}
            </Container_Page>} 
          />
          <Route path="tv_shows" element={
            <Container_Page media_type='tv'>
              <Banner media='tv'/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='tv'/>
              <MoviesSlider title='Trending' path={trendings}  media_type='tv'/> 
              {/* <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/>  */}
            </Container_Page>} 
          />
          <Route path="movies" element={
            <Container_Page media_type='movie'>
              <Banner media='movie'/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='tv'/>
              <MoviesSlider title='Trending' path={trendings}  media_type='movie' /> 
              {/* <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/>  */}
            </Container_Page>} 
          />
          <Route path="my_list" element={<MyList_Page />}/>
          <Route path="login" element={<UserRegistration_Page  variant='login'/>}/>
          <Route path="signup" element={<UserRegistration_Page  variant='signup'/>}/>
          <Route path="*" element={<Notfound_Page />} />
          { user &&  <Route path="profile" element={<Profile_Page />}/>}
        </Routes>
    </ContainerFluid>
  )
}

export default App;
