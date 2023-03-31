import React, { useState, createContext} from 'react'
import { useAuthStateListener } from '../hooks/useAuthStateListener'
import { useMyListStateListenertsts } from '../hooks/useMyListStateListener'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import ContainerFluid from './ContainerFluid'
import Baner from './Baner'
import Home_Page from './Home_Page'
import MyList_Page from './MyList_Page'
import Login_Page from './Login_Page'
import Signup_Page from './Signup_Page'
import Profile_Page from './Profile_Page'
import Notfound_Page from './Notfound_Page'
import MoviesSlider from './MoviesSlider'
import NavbarPanel from './NavbarPanel'
import VideoPlayer_Popup from './VideoPlayer_Popup'
import SearchInput from './SearchInput'
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

export const CTX = createContext<state>({} as state)

const  App: React.FC = () => {
  
  // ===== auth state listener =====
  useAuthStateListener();
  useMyListStateListenertsts();

  const currentUser = useAppSelector(state => state.redux.currentUser)
  const startVideoPlayer = useAppSelector(state => state.redux.startVideoPlayer)

  const [count, setCount] = useState(0)
  let A = 'Hello world'
  const value = {count, setCount, A}

  return (
    <ContainerFluid scroll={startVideoPlayer}>
      <CTX.Provider value={value}>
        <NavbarPanel>
          <NetflixLogo/>
          <Navigation/>
          <SpringDiv/>
          <SearchInput/>
          <KidsLink/>
          <GiftLink/>
          <MessageBell/>
          <UserProfiles/>
        </NavbarPanel>
        <VideoPlayer_Popup/>
        <Routes>
          <Route path="/" element={
            <Home_Page>
              <Baner/>
              <MoviesSlider title='Popular on Netflix' path={originals}  media_type='movie'/>
              <MoviesSlider title='Trending' path={trendings}  media_type='tv'/> 
              {/* <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/>  */}
            </Home_Page>} 
          />
          <Route path="my_list" element={<MyList_Page />}/>
          <Route path="login" element={<Login_Page />}/>
          <Route path="signup" element={<Signup_Page />}/>
          <Route path="*" element={<Notfound_Page />} />
          { currentUser &&  <Route path="profile" element={<Profile_Page />}/>}
        </Routes>

      </CTX.Provider>
    </ContainerFluid>
  )
}

export default App;
