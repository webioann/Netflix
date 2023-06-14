import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { useMyListWatcher } from '../hooks/useMyListWatcher'
import { changeMyList } from '../redux/reduxSlice';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { db } from '../firebase.config'
import { collection, doc, getDocs, query, onSnapshot, addDoc, setDoc, deleteDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { IMovie } from '../types/movies.types'
import '../style/buttons.scss'

interface ISaveMovieInMyList {
    movie: IMovie
    media_type: 'movie' | 'tv'
    ui: 'square' | 'circle'
    title?: string
}
interface IParamsOnSave {
    movie: IMovie
    media_type: 'movie' | 'tv'
}

const Button_SaveMovieInMyList: React.FC<ISaveMovieInMyList> = ({ movie, media_type, ui, title }) => {

    const user = useAppSelector(state => state.redux.user?.email)
    const changes = useAppSelector(state => state.redux.myListIsChanged)
    const dispatch = useAppDispatch()

    const [isSaved, setIsSaved] = useState(false)
    const { IDSavedMovies } = useMyListWatcher()

    useEffect(() => {
        let result = IDSavedMovies.filter(id => id === movie.id.toString())
        result.length > 0  ? setIsSaved(true) : setIsSaved(false)
        // IDSavedMovies.includes(movie.id.toString()) ? setIsSaved(true) : setIsSaved(false)
    }, [IDSavedMovies])

    const saveMovieInMyList = async ({ movie, media_type }: IParamsOnSave) => {
        dispatch(changeMyList())
        if(user) {
            await setDoc(doc(db, `${user}`, movie.id.toString()), { ...movie, media_type: media_type })
        }
    }

    return (
        <button 
            onClick={() => saveMovieInMyList({movie, media_type: media_type})}
            className={ ui === 'square' ? 'square-button' : 'small-circle circle-button'}
            >
            <i>{ isSaved
                ? <AiOutlineCheck size={12} color='#fff' title='you save thise movie'/> 
                : <AiOutlinePlus size={12} color='#fff' title='save in My List'/>}
            </i>
            { title }
        </button>
    )
}

export default Button_SaveMovieInMyList;
