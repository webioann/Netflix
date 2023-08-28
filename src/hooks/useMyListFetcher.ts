import { useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { IMovie } from '../types/movies.types';
import { useAppSelector } from '../redux/store'

export const useMyListFetcher = () => {

    const [myListMovies, setMyListMovies] = useState<IMovie[]>([])
    const user = useAppSelector(state => state.redux.user?.email)
    
    useEffect(() => {
        const fetchMyList = async () => {
            if(user) {
                const data = await getDocs(collection(db, `${user}`))
                let raw = data.docs.map((doc) => ({...doc.data()}))
                setMyListMovies(raw as IMovie[])
                }
            }
            fetchMyList();
    },[])

    return { myListMovies }
}
