import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { setMyListState, createMyList } from '../redux/reduxSlice'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { db } from '../firebase.config'
import { collection, doc, getDocs, query, onSnapshot, addDoc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
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

    const dispatch = useAppDispatch()
    const myListId = useAppSelector(state => state.redux.myListState)
    const user = useAppSelector(state => state.redux.user?.name)

    const saveMovieInMyList = async ({ movie, media_type }: IParamsOnSave) => {
        if(user) {
            await setDoc(doc(db, `${user} my list`, movie.id.toString()), { ...movie, media_type: media_type })
            dispatch(createMyList(movie))

            dispatch(setMyListState(movie.id.toString()))
        }
    }
    
    return (
        <button 
            onClick={() => saveMovieInMyList({movie, media_type: media_type})}
            className={ ui === 'square' ? 'square-button' : 'small-circle circle-button'}
            >
            <i>{ myListId.includes(movie.id.toString()) && user 
                ? <AiOutlineCheck size={10} color='#fff' title='you save thise movie'/> 
                : <AiOutlinePlus size={12} color='#fff' title='save in My List'/>}
            </i>
            { title }
        </button>
    )
}

export default Button_SaveMovieInMyList;
// saved ? <FaCheck size={15} color='#fff' title='you save thise movie'/> : 
// await setDoc(doc(db, 'my list', movie.id.toString()), { ...movie, media_type: media_type });
// 