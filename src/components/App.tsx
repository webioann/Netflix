import React, { useEffect, useState, useRef } from 'react'
import { useAuthStateListener } from '../hooks/useAuthStateListener'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import ContainerFluid from './ContainerFluid'
import Baner from './Baner'
import PageWrapper from '../pages/PageWrapper'
import MyList_Page from '../pages/MyList_Page'
import Login_Page from '../trush/Login_Page'
import Signup_Page from '../trush/Signup_Page'
import UserRegistration_Page from '../pages/UserRegistration_Page'
import Profile_Page from '../pages/Profile_Page'
import Notfound_Page from '../pages/Notfound_Page'
import MoviesSlider from './MoviesSlider'
import Slider from './Slider'
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

type state= {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  A: string;

}

const  App: React.FC = () => {
  
  // ===== auth state listener =====
  useAuthStateListener();

  const user = useAppSelector(state => state.redux.user)
  const startVideoPlayer = useAppSelector(state => state.redux.startVideoPlayer)
  
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
            <PageWrapper>
              <Baner media='tv'/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='movie'/>
              <Slider title='Actions' media='movie' genre={10402 }/>
              {/* <MoviesSlider title='Trending' path={trendings}  media_type='tv'/>  */}
              {/* <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/>  */}
            </PageWrapper>} 
          />
          <Route path="tv_shows" element={
            <PageWrapper>
              <Baner media='tv'/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='movie'/>
              <MoviesSlider title='Trending' path={trendings}  media_type='tv'/> 
              {/* <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/>  */}
            </PageWrapper>} 
          />
          <Route path="movies" element={
            <PageWrapper>
              <Baner media='movie'/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='movie'/>
              <MoviesSlider title='Trending' path={trendings}  media_type='tv'/> 
              {/* <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/>  */}
            </PageWrapper>} 
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
