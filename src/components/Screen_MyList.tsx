import React, { useEffect, useState } from 'react'
import Container from './Container'
import SpringDiv from './SpringDiv'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { saveMovieInMyList, deleteMovieFromMyList } from '../firebase.config'

import { IMyListMovies } from '../types/mylist.types'
import { PAGE_BG_IMG, IMG_BASE_URL } from '../helpers/constants'
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
            console.log(raw)
            setMyListMovies(raw)
        }
        fetchMyList();
    }, [listChange])

    return (
        <section className='my-list'>
            <Container width='1200px'>
                <h1 className='my-list-title'>My List</h1>
                <ul>
                    {myListMovies.map(movie => (
                        <li className='my-list-item' key={movie.doc_id}>
                            <img className='my-list-item-img'
                                src={`${IMG_BASE_URL}${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
                                alt={ movie.media_type === 'movie' ? movie.title : movie.name }
                            />
                            <p className='my-list-item-name'>{ movie.media_type === 'movie' ? movie.title : movie.name }</p>
                            <p className='item-date'>{ movie.first_air_date.substring(0,4) }</p>
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