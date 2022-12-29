import React, { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'

const MyListPage = () => {

    // const myListRef = collection(db, 'my list')

    useEffect(() => {
        const fetchMyList = async () => {
            const querySnapshot = await getDocs(collection(db, "cities"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            });
        }
        fetchMyList();
    }, [])


    return (
        <div style={{ marginTop: '100px' }}>
            MyListPage
        </div>
    )
}

export default MyListPage