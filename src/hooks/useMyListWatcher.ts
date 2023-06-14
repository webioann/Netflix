import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import { IMovie } from '../types/movies.types';

export const useMyListWatcher = () => {

    const user = useAppSelector(state => state.redux.user?.email)
    const changes = useAppSelector(state => state.redux.myListIsChanged)
    const [savedMovies, setSavedMovies] = useState<IMovie[] | []>([])
    const [IDSavedMovies, setIDSavedMovies] = useState<string[]>([])

    useEffect(() => {
        const fetchMyList = async () => {
            if(user) {
                const data = await getDocs(collection(db, `${user}`))
                setIDSavedMovies(data.docs.map((doc) => doc.id.toString()))
                let raw = data.docs.map((doc) => ({...doc.data()}))
                setSavedMovies(raw)
            }
        }
        fetchMyList();
    }, [changes])

    return { savedMovies, IDSavedMovies }
};
