import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import ContainerFluid from './ContainerFluid'
import Banner from './Banner'
import Container_Page from '../pages/Container_Page'
import MyList_Page from '../pages/MyList_Page'
import UserRegistration_Page from '../pages/UserRegistration_Page'
import Profile_Page from '../pages/Profile_Page'
import Account_Page from '../pages/Account_Page'
import Notfound_Page from '../pages/Notfound_Page'
import MoviesSlider from './MoviesSlider'
import Header from './Header'
import VideoPlayer_Modal from './VideoPlayer_Modal'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import OutputtingSearchedMovies from './OutputtingSearchedMovies'
import NetflixLogo from './NetflixLogo'
import Navigation from './Navigation'
import KidsLink from './KidsLink'
import GiftLink from './GiftLink'
import MessageBell from './MessageBell'
import UserProfiles from './UserProfiles'
import SpringDiv from './SpringDiv'
import USER_CONTEXT_PROVIDER from '../hooks/USER_CONTEXT_PROVIDER'

// import { useGernesListQuery } from '../redux/GENRES_API'

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
  
  const videoIsPlaying = useAppSelector(state => state.redux.videoIsPlaying)
  // get list of genres for movie and tv shows
  // const { data: genresList } = useGernesListQuery({media_type: 'tv'})
  // console.log(genresList)
  
  return (
    <ContainerFluid scrolling={videoIsPlaying}>
      <USER_CONTEXT_PROVIDER>
        <Header>
          <NetflixLogo/>
          <Navigation/>
          <SpringDiv/>
          <SearchBar/>
          <KidsLink/>
          <GiftLink/>
          <MessageBell/>
          <UserProfiles/>
        </Header>
        <VideoPlayer_Modal/>
        <SearchResults/>
        <Routes>
          <Route path="/" element={
            <Container_Page media='tv'>
              <Banner />
              <MoviesSlider title='Popular on Netflix' path={originals} />
              <MoviesSlider title='Trending' path={trendings} /> 
              {/* <MoviesSlider title='Top of rates' path={topRated} />
              <MoviesSlider title='Actions' path={actions} />
              <MoviesSlider title='Comedies' path={comedies} />
              <MoviesSlider title='Horrors' path={horrors} />
              <MoviesSlider title='Romances' path={romances} />
              <MoviesSlider title='Documentaries' path={documentaries} />  */}
            </Container_Page>} 
          />
          <Route path="tv_shows" element={
            <Container_Page media='tv'>
              <Banner />
              <MoviesSlider title='Popular on Netflix' path={originals} />
              <MoviesSlider title='Trending' path={trendings} /> 
              {/* <MoviesSlider title='Top of rates' path={topRated} />
              <MoviesSlider title='Actions' path={actions} />
              <MoviesSlider title='Comedies' path={comedies} />
              <MoviesSlider title='Horrors' path={horrors} />
              <MoviesSlider title='Romances' path={romances} />
              <MoviesSlider title='Documentaries' path={documentaries} />  */}
            </Container_Page>} 
          />
          <Route path="movies" element={
            <Container_Page media='movie'>
              <Banner />
              <OutputtingSearchedMovies/>
              <MoviesSlider title='Popular on Netflix' path={originals} />
              <MoviesSlider title='Trending' path={trendings}  /> 
              {/* <MoviesSlider title='Top of rates' path={topRated} />
              <MoviesSlider title='Actions' path={actions} />
              <MoviesSlider title='Comedies' path={comedies} />
              <MoviesSlider title='Horrors' path={horrors} />
              <MoviesSlider title='Romances' path={romances} />
              <MoviesSlider title='Documentaries' path={documentaries} />  */}
            </Container_Page>} 
          />
          <Route path="my_list" element={<MyList_Page />}/>
          <Route path="login" element={<UserRegistration_Page  variant='login'/>}/>
          <Route path="signup" element={<UserRegistration_Page  variant='signup'/>}/>
          <Route path="*" element={<Notfound_Page />} />
          <Route path="profile" element={<Profile_Page />}/>
          <Route path="account" element={<Account_Page />}/>
        </Routes>
      </USER_CONTEXT_PROVIDER>
    </ContainerFluid>
  )
}

export default App;
