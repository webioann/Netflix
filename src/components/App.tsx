import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import ContainerFluid from './ContainerFluid'
import Banner from './Banner'
import Container_Page from '../pages/Container_Page'
import MyList_Page from '../pages/MyList_Page'
import UserRegistration_Page from '../pages/UserRegistration_Page'
import Account_Page from '../pages/Account_Page'
import Notfound_Page from '../pages/Notfound_Page'
import CarouselOfMovies from './CarouselOfMovies'
import Header from './Header'
import VideoPlayer_Modal from './VideoPlayer_Modal'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import SearchResultsOutput from './SearchResultsOutput'
import NetflixLogo from './NetflixLogo'
import Navigation from './Navigation'
import KidsLink from './KidsLink'
import GiftLink from './GiftLink'
import MessageBell from './MessageBell'
import UserProfiles from './UserProfiles'
import SpringDiv from './SpringDiv'
import USER_CONTEXT_PROVIDER from '../hooks/USER_CONTEXT_PROVIDER'
import { netflixPageQueries, tvshowsPageQueries, moviesPageQueries } from '../data/requests'

const  App: React.FC = () => {
  
  const videoIsPlaying = useAppSelector(state => state.redux.videoIsPlaying)
  
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
              <SearchResultsOutput/>
              <CarouselOfMovies title='Popular on Netflix' path={netflixPageQueries.originals} />
              <CarouselOfMovies title='Trending Now' path={netflixPageQueries.trendingNow} />
              <CarouselOfMovies title='Kids Shows' path={netflixPageQueries.kids} />
              <CarouselOfMovies title='Best Dramas' path={netflixPageQueries.dramas} />
            </Container_Page>} 
          />
          <Route path="tv_shows" element={
            <Container_Page media='tv'>
              <Banner />
              <SearchResultsOutput/>
              <CarouselOfMovies title='Top Rated TV Shows' path={tvshowsPageQueries.topRatedTvShows} />
              <CarouselOfMovies title='Animations' path={tvshowsPageQueries.animation} />
              <CarouselOfMovies title='Comedies TV Shows' path={tvshowsPageQueries.comediesTvShows} />
              <CarouselOfMovies title='Documentaries' path={tvshowsPageQueries.documentaries} />
            </Container_Page>} 
          />
          <Route path="movies" element={
            <Container_Page media='movie'>
              <Banner />
              <SearchResultsOutput/>
              <CarouselOfMovies title='Top Rated Movies' path={moviesPageQueries.topRatedMovies} />
              <CarouselOfMovies title='Action Movies' path={moviesPageQueries.actionMovies} />
              <CarouselOfMovies title='Comedy Movies' path={moviesPageQueries.comedyMovies} />
              <CarouselOfMovies title='Horror Movies' path={moviesPageQueries.horrorMovies} />
            </Container_Page>} 
          />
          <Route path="my_list" element={<MyList_Page />}/>
          <Route path="login" element={<UserRegistration_Page  variant='login'/>}/>
          <Route path="signup" element={<UserRegistration_Page  variant='signup'/>}/>
          <Route path="*" element={<Notfound_Page />} />
          <Route path="account" element={<Account_Page />}/>
        </Routes>
      </USER_CONTEXT_PROVIDER>
    </ContainerFluid>
  )
}

export default App;
