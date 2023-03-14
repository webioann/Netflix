import React, { useState, createContext} from 'react'
import { useAuthStateListener } from '../hooks/useAuthStateListener'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import ContainerFluid from './ContainerFluid'
import Baner from './Baner'
import Home_page from './Home_page'
import Login_page from './Login_page'
import Signup_page from './Signup_page'
import Profile_page from './Profile_page'
import Notfound_page from './Notfound_page'
import MoviesSlider from './MoviesSlider'
import Screen_MyList from './Screen_MyList'
import NavbarPanel from './NavbarPanel'
import PopupVideoPlayer from './PopupVideoPlayer'
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
        <PopupVideoPlayer/>
        <Routes>
          <Route path="/" element={
            <Home_page>
              <Baner/>
              {/* <MoviesSlider title='Popular on Netflix' path={originals}  media_type='tv'/>
              <MoviesSlider title='Trending' path={trendings}  media_type='tv'/>  */}
              <MoviesSlider title='Top of rates' path={topRated}  media_type='movie'/>
              <MoviesSlider title='Actions' path={actions}  media_type='movie'/>
              <MoviesSlider title='Comedies' path={comedies} media_type='movie'/>
              <MoviesSlider title='Horrors' path={horrors}  media_type='movie'/>
              <MoviesSlider title='Romances' path={romances}  media_type='movie'/>
              <MoviesSlider title='Documentaries' path={documentaries} media_type='movie'/> 
            </Home_page>} 
          />
          <Route path="my_list" element={<Screen_MyList />}/>
          <Route path="login" element={<Login_page />}/>
          <Route path="signup" element={<Signup_page />}/>
          <Route path="*" element={<Notfound_page />} />
          { currentUser &&  <Route path="profile" element={<Profile_page />}/>}
        </Routes>

      </CTX.Provider>
    </ContainerFluid>
  )
}
export default App;
