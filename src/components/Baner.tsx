import React, { useEffect, useState } from 'react'
import GenresList from './GenresList'
import Container from './Container'
import MovieNameExtractor from './MovieNameExtractor'
import Button_MoreInfo from './Button_MoreInfo'
import Button_PlayVideo from './Button_PlayVideo'
import Button_SaveInMyList from './Button_SaveInMyList'
import { IMG_BASE_URL } from '../data/constants'
import { useRandomMovieQuery, useBanerRandomMovieQuery } from '../redux/MOVIES_API';
import '../style/baner.scss'

type BanerProps = { media: 'tv' | 'movie' }

const Baner: React.FC<BanerProps> = ({ media }) => {

    // const { data: movie } = useRandomMovieQuery('')
    const { data: movie } = useBanerRandomMovieQuery({media: media})
    const [overview, setOverview] = useState('')

    useEffect(() => {
        if(movie?.overview) {
            movie.overview.length > 150 ? setOverview(movie.overview.substring(0, 150 - 1) + '...') : setOverview(movie.overview) 
        }
        else { setOverview('') }
    }, [movie])
    
    if(movie) {
        return (
            <section className='baner-container' 
                style={{ backgroundImage: `url(${IMG_BASE_URL}${movie?.backdrop_path})`}}>
                <Container width='1600px'>
                    <div className="baner-content">
                        <MovieNameExtractor movie={movie} fontSizeInRem={2.25} fontWeight={700}/>
                        <p className='baner-overview'>{ overview }</p>
                        <GenresList genres={movie.genre_ids} font={16}/>

                        <div className="baner-buttons-row">
                            <Button_PlayVideo ui='square' title='Play' media_type='tv' movie_id={movie.id}/>
                            <Button_SaveInMyList title='My List' ui='square' movie={movie} media_type='tv'/>
                            <Button_MoreInfo/>
                            {/* <div className="spring-div" style={{ flex: 1 }}/> */}
                            {/* <button className="circle-button">
                                <HiVolumeOff size={24} color='#fff'/>
                            </button> */}

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

export default Baner;