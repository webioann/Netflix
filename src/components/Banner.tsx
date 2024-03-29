import React, { useContext, useEffect } from 'react'
import { PageContext } from '../pages/Container_Page'
import GenresList from './GenresList'
import Container from './Container'
import MovieNameExtractor from './MovieNameExtractor'
import Button_MoreInfo from './Button_MoreInfo'
import Button_PlayVideo from './Button_PlayVideo'
import Button_SaveInMyList from './Button_SaveInMyList'
import { IMG_BASE_URL } from '../data/constants'
import { useLazyBannerMovieQuery } from '../redux/BANNER_API'
import { useLocation } from 'react-router-dom'
import '../style/banner.scss'

const Banner = () => {
    // restarting fetching data for Banner after  transition between pages
    const { media } = useContext(PageContext)
    const [ restartBannerMovie, { data: movie } ] = useLazyBannerMovieQuery()
    let location = useLocation(); 

    useEffect(() => {
        // if page is changed - run restart data fetching for this page
        restartBannerMovie({ media_type: media })
    }, [location.key])

    useEffect(() => {
        // if movie.overview not found - restart data fetching
        if(!movie?.overview ) {
            restartBannerMovie({ media_type: media })
        }
    }, [movie])

    if(movie) {
        return (
            <section className='banner-container' 
                style={{ backgroundImage: `url(${IMG_BASE_URL}${movie?.backdrop_path})`}}>
                <Container width='1600px'>
                    <div className="banner-content">
                        <MovieNameExtractor movie={movie} fontSizeInRem={2.25} fontWeight={700}/>
                        { movie.overview 
                            ? <p className='banner-overview'>{ movie.overview.length > 150 ? movie.overview.substring(0, 150 - 1) + '...' : movie.overview }</p> 
                            : <p className='red-overview'>Overview not founded</p>
                        }
                        <GenresList genres={movie.genre_ids} font={16}/>
                        <div className="banner-buttons-row">
                            <Button_PlayVideo title='Play' videoParam={{movie_id: movie.id, media_type: media}} variant='square'/>
                            <Button_SaveInMyList title='My List' movie={movie} />
                            <Button_MoreInfo/>
                            <div className="spring-div" style={{ flex: 1 }}/> 
                        </div>
                    </div>
                </Container>
                <div className="black-fog"/>
            </section>
        )
    }
    else{
        return (
            <section className='baner-container'></section>
        )
    }
}

export default Banner;