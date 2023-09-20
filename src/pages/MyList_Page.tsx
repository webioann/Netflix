import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import Container from '../components/Container'
import MoviePoster from '../components/MoviePoster'
import MovieNameExtractor from '../components/MovieNameExtractor'
import Button_PlayVideo from '../components/Button_PlayVideo'
import SpringDiv from '../components/SpringDiv'
import Dots from '../components/Dots'
import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { IMovieWithMedia } from '../types/movies.types'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import '../style/my-list-page.scss'

import { IMG_BASE_URL } from '../data/constants'


const MyList_Page = () => {

    const [myListMovies, setMyListMovies] = useState<IMovieWithMedia[]>([])
    const { user } = useContext(UserContext)
    const posterWidth = 290;
    const padding = 30;

    useEffect(() => {
        if( user?.email ) {
            let userList = user?.email?.toString()
            const list = localStorage.getItem(userList)
            if( list === null) {
                const fetchMyList = async () => {
                    const data = await getDocs(collection(db, userList))
                    let raw = data.docs.map((doc) => ({...doc.data()}))
                    localStorage.setItem(userList, JSON.stringify(raw))
                    setMyListMovies(raw as IMovieWithMedia [])
                }
                fetchMyList();
            }
            if( list ) {
                setMyListMovies(JSON.parse(list))
            }
        }
    }, [user])

    const deleteMovieFromMyList = async (doc_id: string) => {
        if( user?.email ) {
            let userList = user?.email?.toString()
            await deleteDoc(doc(db, userList, doc_id))
            let filtered = myListMovies.filter((item) => { return item.id.toString() !== doc_id})
            let length = filtered.length
            if( length == 0 ) {
                localStorage.removeItem(userList)
                setMyListMovies([])
            }
            if( length > 0 ) {
                localStorage.setItem(userList, JSON.stringify(filtered))
                setMyListMovies(filtered)
            }
            
        }
    }
    
    return (
        <section className='my-list'>
            <Container width='1568px'>
                <h1 className='my-list-title'>My List {myListMovies.length == 0 ? 'is empty' : ''}</h1>
                {/* === items ===================== */}
                <ul>
                    {myListMovies.map(movie => (
                        <li className='saved-movie' key={movie.id} >

                            <div className='movie-and-controls'>
                                <MoviePoster movie={movie} size={posterWidth}/>
                                <div className='poster-and-play'>
                                    <span className='delete-button'>
                                        <IoClose 
                                            size={32} 
                                            color='#fff' 
                                            title='remove from My List'
                                            onClick={() => { deleteMovieFromMyList(movie.id.toString()) }}
                                        />
                                    </span>
                                    <span className='play-button'>
                                        <Button_PlayVideo videoParam={{movie_id: movie.id, media_type: movie.media_type }}/>
                                    </span>
                                    <span className='movie-name'>
                                        <MovieNameExtractor movie={movie} fontSizeInRem={1.5} fontWeight={400}/>
                                    </span>

                                </div>
                            </div>

                            {/* <h3 className='item-date'>{movie.first_air_date && movie.first_air_date.substring(0,4) }</h3> */}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default MyList_Page;

// style={{paddingLeft: `${padding}px`}}

                            {/* <img 
                                style={{width: `${size}px`, height: `${size * 1.5625}px`, objectFit: 'cover' }}
                                src={`${IMG_BASE_URL}${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} 
                                alt={ movie.media_type === 'movie' ? movie.title : movie.name }
                            /> */}
                            {/* <div className='popularity-stars'>
                                <div className='star-row'>
                                    <BsStarFill size={20} color='#fff'/>
                                    <BsStarFill size={20} color='#fff'/>
                                    <BsStarFill size={20} color='#fff'/>
                                    <BsStarHalf size={20} color='#fff'/>
                                    <BsStar size={20} color='#fff'/>
                                </div>
                            </div> */}
                            {/* <p>{movie.saving_date ? new Date(movie.saving_date).toLocaleString() : 1222 }</p> */}
