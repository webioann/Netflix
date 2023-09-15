import React, { useState, useEffect, useContext } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { createWatchList } from '../redux/redux'
import { PageContext } from '../pages/Container_Page';
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
    media_type: 'movie' | 'tv'
}

const Button_SaveMovieInMyList: React.FC<ISaveMovieInMyList> = ({ movie, title }) => {

    const [isSaved, setIsSaved] = useState(false)
    const dispatch = useAppDispatch()
    const watch_list = useAppSelector(state => state.redux.watchList)
    //  ===== contexts =====
    const { media_type } = useContext(PageContext)
    const user = useContext(UserContext)

    // if this movie in redux state watchList will set "checkbox"
    useEffect(() => {
        watch_list && setIsSaved(watch_list.some((item) => item.id === movie.id))
    }, [watch_list])

    const saveMovieInMyList = async ({ movie, media_type }: IParamsOnSave) => {
        if(user && media_type) {
            let id = movie.id.toString()
            const dataForSave = { ...movie, media_type: media_type }
            await setDoc( doc(db, `${user.email}`, id), dataForSave )
            setIsSaved(true)
            // save new movie in redux watchList
            watch_list && dispatch(createWatchList([ ...watch_list, dataForSave ]))
        }
    }

    return (
        <button 
            onClick={() => saveMovieInMyList({ movie, media_type })}
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
