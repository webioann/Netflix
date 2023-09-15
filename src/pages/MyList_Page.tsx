import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { createWatchList } from '../redux/redux'
import Container from '../components/Container'
import MoviePoster from '../components/MoviePoster'
import SpringDiv from '../components/SpringDiv'
import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { IMovie } from '../types/movies.types'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import '../style/my-list-page.scss'

const MyList_Page = () => {

    const [myListMovies, setMyListMovies] = useState<IMovie[]>([])
    const user = useContext(UserContext)
    const dispatch = useAppDispatch()
    const myListRef = user?.email

    // === set MyList_Page state in page first render ===
    useEffect(() => {
        const fetchMyList = async () => {
            const data = await getDocs(collection(db, `${myListRef}`))
            let raw = data.docs.map((doc) => ({...doc.data()}))
            setMyListMovies(raw as IMovie[])
            // === save data on redux watchList
            dispatch(createWatchList(raw))
        }
        fetchMyList();
    }, [])

    const deleteMovieFromMyList = async (doc_id: string) => {
        // remove doc from server
        await deleteDoc(doc(db, `${myListRef}`, doc_id))
        // remove movie from MyList_Page state
        let filtered = myListMovies.filter((item) => { return item.id.toString() !== doc_id})
        setMyListMovies(filtered)
        // === reset data in redux watchList
        dispatch(createWatchList(filtered))
    }

    return (
        <section className='my-list'>
            <Container width='1200px'>
                <h1 className='my-list-title'>My List {myListMovies.length == 0 ? 'is empty' : ''}</h1>
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
