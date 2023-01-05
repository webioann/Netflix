import React, { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import Container from './Container'
import MovieCard from './MovieCard'
import GenresList from './GenresList'
import PlayVideoButtonIcon from './PlayVideoButtonIcon'
import { saveMovieInMyList, deleteMovieFromMyList } from '../firebase.config'
import { FaCheck } from 'react-icons/fa'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike  } from 'react-icons/ai'

import { IMyListMovies } from '../types/mylist.types'
import { PAGE_BG_IMG, IMG_BASE_URL } from '../helpers/constants'
import '../style/my-list-page.scss'

const MyListPage = () => {

    const [myListMovies, setMyListMovies] = useState<IMyListMovies[] | []>([])

    useEffect(() => {
        const fetchMyList = async () => {
            const data = await getDocs(collection(db, "my list"));
            // const dataUp = await onSnapshot(doc(db, "my list"), (movies) => {
            //     setMyListMovies(movies.map((doc) => ({...doc.data(), doc_id: doc.id }) ))
            // })
            // let raw: IMyListMovies[] | [] = [];
            // data.forEach((doc) => {
            //     raw.push({...doc.data(), doc_id: doc.id })
            // })
            setMyListMovies(data.docs.map((doc) => ({...doc.data(), doc_id: doc.id }) ))
        }
        fetchMyList();
    }, [])

// console.log(myListMovies)
    return (
        <div className='my-list-page'
            style={{backgroundImage: `url(${PAGE_BG_IMG})`}}
            >
            <Container width='1600px'>
                <h1>My List</h1>
                <ul className="my-list-content">
                    { myListMovies.map(movie => (
                                <li className='movie-card'>
                                <img className='movie-card-img'
                                    src={`${IMG_BASE_URL}${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
                                    alt={ movie.media_type === 'movie' ? movie.title : movie.name }
                                />
                                <div className="movie-card-controls">
                                    <div className="poster-controls-info">
                                        <button className="poster-play-button">
                                            <PlayVideoButtonIcon 
                                                size={20} 
                                                color='#fff' 
                                                media_type={movie.media_type} 
                                                movie_id={movie.id}
                                            />
                                        </button>
                                        <p className='movie-name'>
                                            { movie.media_type === 'movie' ? movie.title : movie.name }
                                        </p>
                                        <GenresList genres={movie?.genre_ids} font={12}/>
                                    </div>
                    
                                    <div className="poster-controls-buttons">
                                        <button className="movie-slider-circle">
                                            <HiVolumeOff size={17} color='rgba(255, 255, 255, 0.7)'/>
                                        </button>
                                        {/* <button className="movie-slider-circle">
                                            <AiOutlineLike size={17} color='rgba(255, 255, 255, 0.7)'/>
                                        </button> */}
                                        <button className="movie-slider-circle">
                                            <AiOutlineDislike size={17} color='rgba(255, 255, 255, 0.7)'/>
                                        </button>
                                        <button 
                                            className="movie-slider-circle"
                                            onClick={() => deleteMovieFromMyList(movie.doc_id)}
                                            >
                                            <FaCheck size={17} color='rgba(255, 255, 255, 0.7)' title='remove from My List'/>
                                        </button>
                    
                                    </div>
                                </div>
                            </li>
                    ))}
                </ul>
            </Container>
        </div>
    )
    
}

export default MyListPage