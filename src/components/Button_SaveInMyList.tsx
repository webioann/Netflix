import React, { useState, useEffect, useContext } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { createWatchList } from '../redux/redux'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { db } from '../firebase.config'
import { doc, setDoc } from 'firebase/firestore'
import { IMovie } from '../types/movies.types'
import '../style/buttons.scss'

interface ISaveMovieInMyList {
    movie: IMovie
    title?: string
}
interface IParamsOnSave {
    movie: IMovie
}

const Button_SaveMovieInMyList: React.FC<ISaveMovieInMyList> = ({ movie, title }) => {

    const [isSaved, setIsSaved] = useState(false)
    const dispatch = useAppDispatch()
    const watch_list = useAppSelector(state => state.redux.watchList)
    //  ===== contexts =====
    const user = useContext(UserContext)

    // if this movie in redux state watchList will set "checkbox"
    useEffect(() => {
        watch_list && setIsSaved(watch_list.some((item) => item.id === movie.id))
    }, [watch_list])

    const saveMovieInMyList = async ({ movie }: IParamsOnSave) => {
        if(user && movie) {
            let id = movie.id.toString()
            await setDoc( doc(db, `${user.email}`, id), movie )
            setIsSaved(true)
            // save new movie in redux watchList
            watch_list && dispatch(createWatchList([ ...watch_list, movie ]))
        }
    }

    return (
        <button 
            onClick={() => saveMovieInMyList({ movie })}
            className={ title ? 'square-button' : 'small-circle circle-button'}
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
