import React, { useEffect, useState } from 'react'
import Container from './Container'
import MoviePoster from './MoviePoster'
import SpringDiv from './SpringDiv'
import CloseButton from './CloseButton'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { deleteMovieFromMyList } from '../firebase.config'
import { IMyListMovies } from '../types/mylist.types'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import '../style/screen-my-list.scss'

const Screen_MyList = () => {

    const [myListMovies, setMyListMovies] = useState<IMyListMovies[] | []>([])
    const [listChange, setListChange] = useState(false)

    useEffect(() => {
        const fetchMyList = async () => {
            const data = await getDocs(collection(db, "my list"))
            const raw = data.docs.map((doc) => ({...doc.data(), doc_id: doc.id }))
            setMyListMovies(raw)
        }
        fetchMyList();
    }, [listChange])

    return (
        <section className='my-list'>
            <Container width='1200px'>
                <h1 className='my-list-title'>My List</h1>
                <ul className='my-list-wrapper'>
                    {myListMovies.map(movie => (
                        <li className='my-list-item' key={movie.doc_id}>
                            <MoviePoster movie={movie} size={160}/>
                            <p className='my-list-item-name'>{ movie.media_type === 'movie' ? movie.title : movie.name }</p>
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
                            <SpringDiv/>
                            <span className='remove-icon-box'>
                                <IoClose 
                                    size={25} 
                                    color='#fff' 
                                    onClick={() => {
                                        deleteMovieFromMyList(movie.doc_id)
                                        setListChange(!listChange)
                                    }}
                                />
                            </span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default Screen_MyList;