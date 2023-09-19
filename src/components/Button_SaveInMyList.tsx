 import React, { useState, useEffect, useContext } from 'react'
import { useAppSelector } from '../redux/store'
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
    // const watch_list = useAppSelector(state => state.redux.watchList)
    const {user} = useContext(UserContext)
    // const userLocalMyList = user?.email?.toString()

    useEffect(() => {
        if( user?.email ) {
            let userList = user?.email?.toString()
            const list = localStorage.getItem(userList)
            if( list ) {
                let data: IMovie[] = JSON.parse(list)
                setIsSaved(data.some((item) => item.id === movie.id))
            }
            else{ setIsSaved(false) }
        }
    })

    const saveMovieInMyList = async ({ movie }: IParamsOnSave) => {
        if(user?.email && movie) {
            let id = movie.id.toString()
            let userList = user?.email?.toString()
            const list = localStorage.getItem(userList)
            await setDoc( doc(db, userList, id), movie )
            setIsSaved(true)
            if( list ) {
                let dropData: IMovie[] = JSON.parse(list)
                dropData.push(movie)
                localStorage.setItem(userList, JSON.stringify(dropData))
            }
            if( list === null ) {
                let dropData: IMovie[] = []
                dropData.push(movie)
                localStorage.setItem(userList, JSON.stringify(dropData))
            }
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
