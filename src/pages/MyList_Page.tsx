import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import Container from '../components/Container'
import MoviePoster from '../components/MoviePoster'
import MovieNameExtractor from '../components/MovieNameExtractor'
import Button_PlayVideo from '../components/Button_PlayVideo'
// import SpringDiv from '../components/SpringDiv'
// import Dots from '../components/Dots'
import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { IMovieWithMedia } from '../types/movies.types'
import { IoClose } from 'react-icons/io5'
import '../style/my-list-page.scss'

const MyList_Page = () => {

    const [myListMovies, setMyListMovies] = useState<IMovieWithMedia[]>([])
    const { user } = useContext(UserContext)
    const posterWidth = 290;

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
                <ul>
                    {myListMovies.map(movie => (
                        <li className='saved-movie' key={movie.id} >
                            <div className='poster-and-play'>
                                <MoviePoster movie={movie} size={posterWidth}/>
                                <span className='play-button'>
                                    <Button_PlayVideo videoParam={{movie_id: movie.id, media_type: movie.media_type }} variant='mega'/>
                                </span>
                            </div>
                            <div className='delete-and-name'>
                                <div className="movie-name">
                                    <MovieNameExtractor movie={movie} fontSizeInRem={1.5} fontWeight={400}/>
                                </div>
                                <span className='delete-button'>
                                    <IoClose 
                                        size={32} 
                                        color='#fff' 
                                        title='remove from My List'
                                        onClick={() => { deleteMovieFromMyList(movie.id.toString()) }}
                                    />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default MyList_Page;

