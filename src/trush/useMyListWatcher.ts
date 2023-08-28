import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import { IMovie } from '../types/movies.types';

export const useMyListWatcher = () => {

    const user = useAppSelector(state => state.redux.user?.email)
    const [savedMovies, setSavedMovies] = useState<IMovie[]>([] as IMovie[])

    useEffect(() => {
        const fetchMyList = async () => {
            if(user) {
                const data = await getDocs(collection(db, `${user}`))
                localStorage.setItem((data.docs.map((doc) => doc.id)).toString(), 'true')
                let raw = data.docs.map((doc) => ({...doc.data()}))
                setSavedMovies(raw as IMovie[])
            }
        }
        fetchMyList();
    },[])

    return { savedMovies }
};
