import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import Container from '../components/Container'
import MoviePoster from '../components/MoviePoster'
import SpringDiv from '../components/SpringDiv'

import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { IMovie } from '../types/movies.types'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import '../style/my-list-page.scss'

import { IMG_BASE_URL } from '../data/constants'


const MyList_Page = () => {

    const [myListMovies, setMyListMovies] = useState<IMovie[]>([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        if( user?.email ) {
            let userList = user?.email?.toString()
            const list = localStorage.getItem(userList)
            console.log(list)
            if( list === null) {
                const fetchMyList = async () => {
                    const data = await getDocs(collection(db, userList))
                    let raw = data.docs.map((doc) => ({...doc.data()}))
                    localStorage.setItem(userList, JSON.stringify(raw))
                    setMyListMovies(raw as IMovie[])
                }
                fetchMyList();
            }
            if( list ) {
                setMyListMovies(JSON.parse(list))
            }
        }
    }, [])

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
    const size = 290

    return (
        <section className='my-list'>
            <Container width='1200px'>
                <h1 className='my-list-title'>My List {myListMovies.length == 0 ? 'is empty' : ''}</h1>
                <ul className='my-list-wrapper'>
                {myListMovies.map(movie => (
                        <li className='my-list-item' key={movie.id}>

                        {/* <img 
                            style={{width: `${size}px`, height: `${size * 1.5625}px`, objectFit: 'cover' }}
                            src={`${IMG_BASE_URL}${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} 
                            alt={ movie.media_type === 'movie' ? movie.title : movie.name }
                        /> */}

                            <MoviePoster movie={movie} size={290}/>
                            <h2 className='my-list-item-name'>{ movie.media_type === 'movie' ? movie.original_title : movie.name }</h2>
                            <p className='item-date'>{movie.first_air_date && movie.first_air_date.substring(0,4) }</p>
                            <div className='popularity-stars'>
                                <div className='star-row'>
                                    <BsStarFill size={20} color='#fff'/>
                                    <BsStarFill size={20} color='#fff'/>
                                    <BsStarFill size={20} color='#fff'/>
                                    <BsStarHalf size={20} color='#fff'/>
                                    <BsStar size={20} color='#fff'/>
                                </div>
                            </div>
                            {/* <p>{movie.saving_date ? new Date(movie.saving_date).toLocaleString() : 1222 }</p> */}
                            <SpringDiv/>
                            <span className='remove-icon-box'>
                                <IoClose 
                                    size={40} 
                                    color='#e50914' 
                                    title='remove from My List'
                                    onClick={() => { deleteMovieFromMyList(movie.id.toString()) }}
                                />
                            </span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default MyList_Page;
