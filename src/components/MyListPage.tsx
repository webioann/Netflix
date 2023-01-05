import React, { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import Container from './Container'
import MovieCard from './MovieCard'
import { IMyListMovies } from '../types/mylist.types'
import { PAGE_BG_IMG } from '../helpers/constants'
import '../style/my-list-page.scss'

const MyListPage = () => {

    const [myListMovies, setMyListMovies] = useState<IMyListMovies[] | []>([])

    useEffect(() => {
        const fetchMyList = async () => {
            const data = await getDocs(collection(db, "my list"));
            // data.forEach((doc) => {
            // // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());})
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
                        <MovieCard movie={movie} media_type={movie.media_type} key={movie.id}/>
                    ))}
                </ul>

            </Container>
        </div>
    )
    
}

export default MyListPage