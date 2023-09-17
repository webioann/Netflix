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
    const watch_list = useAppSelector(state => state.redux.watchList)
    const user = useContext(UserContext)
    const localMyList = localStorage.getItem('myList')

    useEffect(() => {
        if( localMyList ) {
            let data: IMovie[] = JSON.parse(localMyList)
            setIsSaved(data.some((item) => item.id === movie.id))
        }
        else{ setIsSaved(false) }
    })

    const saveMovieInMyList = async ({ movie }: IParamsOnSave) => {
        if(user && movie) {
            let id = movie.id.toString()
            await setDoc( doc(db, `${user.email}`, id), movie )
            setIsSaved(true)
            if( localMyList ) {
                let dropData: IMovie[] = JSON.parse(localMyList)
                dropData.push(movie)
                localStorage.setItem('myList', JSON.stringify(dropData))
            }
            if( localMyList === null ) {
                let dropData: IMovie[] = []
                dropData.push(movie)
                localStorage.setItem('myList', JSON.stringify(dropData))
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
