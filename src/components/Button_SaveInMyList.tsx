import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../redux/store'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { db } from '../firebase.config'
import { doc, setDoc } from 'firebase/firestore'
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

    useEffect(() => {
        let watch_list = localStorage.getItem('watch_list')
        if(watch_list !== null) {
            let data = JSON.parse(watch_list)
            setIsSaved((data as number[]).includes(movie.id))
        }
    }, [isSaved])

    const saveMovieInMyList = async ({ movie, media_type }: IParamsOnSave) => {
        if(user) {
            let id = movie.id.toString();
            await setDoc(doc(db, `${user}`, id), { ...movie, media_type: media_type })
            setIsSaved(true)
            // save movie id in localStorage array
            let watch_list = localStorage.getItem('watch_list')
            if(watch_list !== null && !isSaved) {
                let data: number[] = JSON.parse(watch_list)
                data.push(movie.id)
                localStorage.setItem('watch_list', JSON.stringify(data))
            }
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
