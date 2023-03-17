import React, { useState } from 'react'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { saveMovieInMyList, db } from '../firebase.config'
import { collection, doc, getDocs, query, onSnapshot, addDoc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { IMovie } from '../types/movies.types'
import '../style/buttons.scss'

interface ISaveMovieInMyList {
    movie: IMovie
    media_type: 'movie' | 'tv'
    ui: 'square' | 'circle'
    title?: string
    saved: boolean
}
interface IParamsOnSave {
    movie: IMovie
    media_type: 'movie' | 'tv'
}

const SaveMovieInMyList_Button: React.FC<ISaveMovieInMyList> = ({ movie, media_type, ui, title, saved }) => {

    const saveMovieInMyList = async ({ movie, media_type }: IParamsOnSave) => {
        await setDoc(doc(db, 'my list', movie.id.toString()), { ...movie, media_type: media_type });
    }

    
    return (
        <button 
            onClick={() => saveMovieInMyList({movie, media_type: media_type})}
            className={ ui === 'square' ? 'square-button g-button' : 'small-circle-button'}
            >
            <i>{ saved ? <FaCheck size={15} color='#fff' title='you save thise movie'/> : <FaPlus size={15} color='#fff' title='save in My List'/> }</i>
            { title }
        </button>
    )
}

export default SaveMovieInMyList_Button;