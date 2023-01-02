import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovie, resetMovieData, openModal,   startVideoPlayer } from '../redux/reduxSlice';
import { HiInformationCircle } from 'react-icons/hi'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { useLazyGetVideoDataQuery } from '../redux/fetchMoviesData'
import GenresList from './GenresList'
import Container from './Container';

import { useLazyRandomMovieQuery, useRandomMovieQuery } from '../redux/fetchMoviesData';
import '../style/baner.scss'

const Baner = () => {

    const { data: movie } = useRandomMovieQuery('')
    // const [ fetchVideo, { data: video, isSuccess, isLoading }] = useLazyGetVideoDataQuery()

    const [backgroundImageURL, setImgUrl] = useState('')
    const [trancatedOverview, setTrancate] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => { 
        if(movie) {
            setImgUrl(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path}`)
            const overview = movie?.overview ? movie.overview : 'some text'
            setTrancate(overview.length > 200 ? overview.substring(0, 200 - 1) + '...' : overview)
        }  
    }, [movie])

    if(movie) {
        return (
            <section className='baner-container' 
                style={{ backgroundImage: `url(${ backgroundImageURL })` }}>
                <Container width='1600px'>
                    <div className="baner-content">
                        <h1 className='baner-movie-name'>
                            {movie?.name ? movie?.name : movie?.original_name}
                        </h1>
                        <p className='baner-overview'>
                            { trancatedOverview }
                        </p>
                        <GenresList genres={movie.genre_ids} font={16}/>
                        <div className="baner-buttons-row">
                            <button className='baner-button g-button'
                                onClick={() => {
                                    dispatch(selectMovie({
                                        media_type: 'tv',
                                        movie_id: movie.id
                                    }))
                                }}
                                >
                                <FaPlay/>
                                Play
                            </button>
                            <button className='baner-button g-button'>
                                <FaPlus/>
                                My List
                            </button>
                            <button className='baner-button g-button'>
                                <HiInformationCircle color='#fff' size={24}/>
                                More info
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