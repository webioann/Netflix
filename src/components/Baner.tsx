import React, { useState, useEffect } from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import { FaPlay, FaPlus } from 'react-icons/fa'
import GenresList from './GenresList'
import Container from './Container'
import MovieNameExtractor from './MovieNameExtractor'
import PlayVideo_Button from './PlayVideo_Button'
import SaveMovieInMyList_Button from './SaveInMyList_Button'
import { IMG_BASE_URL } from '../helpers/constants'
import { useRandomMovieQuery } from '../redux/MOVIES_API';
import { saveMovieInMyList } from '../firebase.config';
import '../style/baner.scss'

const Baner = () => {

    const { data: movie } = useRandomMovieQuery('')
    
    if(movie) {
        return (
            <section className='baner-container' 
                style={{ backgroundImage: `url(${IMG_BASE_URL}${movie?.backdrop_path})`}}>
                <Container width='1600px'>
                    <div className="baner-content">
                        <MovieNameExtractor movie={movie} fontSizeInRem={2.25} fontWeight={700}/>
                        <p className='baner-overview'>
                            { movie.overview.length > 200 ? movie.overview.substring(0, 200 - 1) + '...' : movie.overview }
                        </p>
                        <GenresList genres={movie.genre_ids} font={16}/>

                        <div className="baner-buttons-row">
                            <PlayVideo_Button ui='square' title='Play' media_type='tv' movie_id={movie.id}/>
                            {/* <button 
                                onClick={() => saveMovieInMyList({movie, media_type: 'tv'})}
                                className='baner-button g-button'
                                >
                                <FaPlus title='save in My List'/>
                                My List
                            </button> */}
                            <SaveMovieInMyList_Button title='My List' ui='square' movie={movie} media_type='tv'/>
                            <button className='baner-button g-button'>
                                <HiInformationCircle color='#fff' size={24}/>
                                More Info
                            </button>
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