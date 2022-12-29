import React, { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import MovieCard from './MovieCard'
import { IMyList } from '../types/mylist.types'

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
        <div style={{ marginTop: '100px' }}>
            { myList.map(item => (
                <p key={item.doc_id}>{item.movie_name}</p>
            )) }
        </div>
    )
}

export default MyListPage