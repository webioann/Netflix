import React, { useState, useEffect } from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import { FaPlay, FaPlus } from 'react-icons/fa'
// import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import GenresList from './GenresList'
import Container from './Container'
import PlayVideoButtonIcon from './PlayVideoButtonIcon';
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
                        <h1 className='baner-movie-name'>
                            {movie?.name ? movie?.name : movie?.original_name}
                        </h1>
                        <p className='baner-overview'>
                            { movie.overview.length > 200 ? movie.overview.substring(0, 200 - 1) + '...' : movie.overview }
                        </p>
                        <GenresList genres={movie.genre_ids} font={16}/>
                        <div className="baner-buttons-row">
                            <button className='baner-button g-button'>
                                <PlayVideoButtonIcon 
                                    size={20} 
                                    color='#fff' 
                                    media_type='tv' 
                                    movie_id={movie.id}
                                />
                                Play
                            </button>
                            <button 
                                onClick={() => saveMovieInMyList({movie, media_type: 'tv'})}
                                className='baner-button g-button'
                                >
                                <FaPlus title='save in My List'/>
                                My List
                            </button>
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