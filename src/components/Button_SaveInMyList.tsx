import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { useMyListWatcher } from '../trush/useMyListWatcher'
import { changeMyList } from '../redux/reduxSlice'

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
    const [isSaved, setIsSaved] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        let storage = localStorage.getItem('watch_list')
        if(storage) {
            let data = JSON.parse(storage)
            setIsSaved((data as number[]).includes(movie.id))
            // console.log(data)
        }
        // storage !== null ? setIsSaved(true) : setIsSaved(false)
        // localStorage.getItem(movie.id.toString()) && setIsSaved(true)
        // console.log(localStorage.getItem(movie.id.toString()))
        // console.log(movie.id.toString())
    }, [])

    const saveMovieInMyList = async ({ movie, media_type }: IParamsOnSave) => {
        if(user) {
            let id = movie.id.toString();
            await setDoc(doc(db, `${user}`, id), { ...movie, media_type: media_type })
            setIsSaved(true)
            dispatch(changeMyList())
        }
    }

    return (
        <button 
            onClick={() => saveMovieInMyList({movie, media_type: media_type})}
            className={ ui === 'square' ? 'square-button' : 'small-circle circle-button'}
            >
            <i>{ isSaved && user
                ? <AiOutlineCheck size={12} color='#fff' title='you save thise movie'/> 
                : <AiOutlinePlus size={12} color='#fff' title='save in My List'/>}
            </i>
            { title }
        </button>
    )
}

export default Button_SaveMovieInMyList;
