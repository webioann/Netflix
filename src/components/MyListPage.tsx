import React, { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import MovieCard from './MovieCard'
import Container from './Container'
import { IMyList } from '../types/mylist.types'
import { PAGE_BG_IMG } from '../helpers/constants'
import '../style/my-list-page.scss'

const MyListPage = () => {

    // const myListRef = collection(db, 'my list')
    const [myList, setMyList] = useState<IMyList[] | []>([])

    useEffect(() => {
        const fetchMyList = async () => {
            const data = await getDocs(collection(db, "my list"));
            // data.forEach((doc) => {
            // // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());})
            setMyList(data.docs.map((doc) => ({...doc.data(), doc_id: doc.id }) ))
        }
        fetchMyList();
    }, [])

console.log(myList)
    return (
        <div className='my-list-page'
            style={{backgroundImage: `url(${PAGE_BG_IMG})`}}
            >
            <Container width='1600px'>
                <ul className="my-list-content">
                    { myList.map(item => (
                        <li className='my-list-movie' key={item.doc_id}>
                            <img src={`${item.image_url}`} alt={item.movie_name}/>
                            <div className="my-list-movie-info">
                                {item.movie_name}

                            </div>
                        </li>
                    ))}

                </ul>

            </Container>
        </div>
    )
}

export default MyListPage