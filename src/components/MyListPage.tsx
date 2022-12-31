import React, { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import Container from './Container'
import GenresList from './GenresList'
import MovieCard from './MovieCard'
import { IMyList } from '../types/mylist.types'
import { IMovie } from '../types/movies.types'
import { PAGE_BG_IMG } from '../helpers/constants'
import '../style/my-list-page.scss'

const MyListPage = () => {

    // const myListRef = collection(db, 'my list')
    const [myListMovies, setMyListMovies] = useState<IMovie[] | []>([])

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

console.log(myListMovies)
    return (
        <div className='my-list-page'
            style={{backgroundImage: `url(${PAGE_BG_IMG})`}}
            >
            <Container width='1600px'>
                <h1>My List</h1>
                <ul className="my-list-content">
                    { myListMovies.map(movie => (
                        <MovieCard movie={movie} type='tv' key={movie.id}/>
                    ))}
                </ul>

            </Container>
        </div>
    )
}

export default MyListPage