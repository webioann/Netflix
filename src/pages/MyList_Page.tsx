import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import MoviePoster from '../components/MoviePoster'
import SpringDiv from '../components/SpringDiv'
import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { IMovie } from '../types/movies.types'
import { useAppSelector } from '../redux/store'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import '../style/my-list-page.scss'

const MyList_Page = () => {

    const [myListMovies, setMyListMovies] = useState<IMovie[]>([])
    const user = useAppSelector(state => state.redux.user?.email)

    useEffect(() => {
        const fetchMyList = async () => {
            if(user) {
                const data = await getDocs(collection(db, `${user}`))
                let raw = data.docs.map((doc) => ({...doc.data()}))
                setMyListMovies(raw as IMovie[])
                // save movie id in localStorage array
                let rawArray = []
                for(let i=0; i < raw.length; i++) {
                    rawArray.push(raw[i].id)
                }
                localStorage.setItem('watch_list', JSON.stringify(rawArray))
                }
            }
            fetchMyList();
    },[])

    //  === delete movie (doc) from My List ===
    const deleteMovieFromMyList = async (doc_id: string) => {
        if(user) {
            // remove doc from server
            await deleteDoc(doc(db, `${user}`, doc_id))
            // remove doc from local state
            let filtered = myListMovies.filter((item) => { return item.id.toString() !== doc_id})
            setMyListMovies(filtered)
            // 
            let watch_list = localStorage.getItem('watch_list')
            if(watch_list !== null) {
                let data: number[] = JSON.parse(watch_list)
                let filteredArray = data.filter(item => item !== Number(doc_id))
                localStorage.setItem('watch_list', JSON.stringify(filteredArray))
            }
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
