import React, { useEffect, useState } from 'react'
import { setMyListState } from '../redux/reduxSlice'

import Container from './Container'
import MoviePoster from './MoviePoster'
import SpringDiv from './SpringDiv'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { IMyListMovie } from '../types/mylist.types'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import '../style/my-list-page.scss'

const MyList_Page = () => {

    const dispatch = useAppDispatch()
    const [myListMovies, setMyListMovies] = useState<IMyListMovie[] | []>([] as IMyListMovie[])
    const user = useAppSelector(state => state.redux.user?.name)
    const my_list = useAppSelector(state => state.redux.myList)

    useEffect(() => {
        const fetchMyListMovies = async () => {
            if(user) {
                const data = await getDocs(collection(db, `${user} my list`))
                setMyListMovies(data.docs.map((doc) => ({...doc.data(), doc_id: doc.id})))
                console.log(my_list)
            }
        }
        fetchMyListMovies();
    }, [])
    
    //  === delete movie (doc) from My List ===
    const deleteDocFromMyList = async (doc_id: string) => {
        if(user) {
            await deleteDoc(doc(db, `${user} my list`, doc_id))
            let filtered = myListMovies.filter((item) => { return item.doc_id !== doc_id})
            setMyListMovies(filtered)
        }
    }

    return (
        <section className='my-list'>
            <Container width='1200px'>
                <h1 className='my-list-title'>My List {myListMovies.length < 1 ? 'is empty' : ''}</h1>
                <ul className='my-list-wrapper'>
                {myListMovies.map(movie => (
                        <li className='my-list-item' key={movie.id}>
                            <MoviePoster movie={movie} size={260}/>
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
                                    size={40} 
                                    color='#e50914' 
                                    title='remove from My List'
                                    onClick={() => { deleteDocFromMyList(movie.doc_id) }}
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
// onClick={() => {
//     deleteMovieFromMyList(movie.doc_id)
// }}
