import React from 'react'
import { useAppDispatch } from '../redux/store'
import { selectMovie, switchVideoPlayer } from '../redux/reduxSlice';
import { FaPlay } from 'react-icons/fa'
import '../style/buttons.scss'

type PlayVideo_ButtonType = {
    media_type: 'tv' | 'movie'
    movie_id: number
    ui: 'square' | 'circle'
    title?: string
}

const Button_PlayVideo: React.FC<PlayVideo_ButtonType> = ({ ui, media_type, movie_id, title }) => {

    const dispatch = useAppDispatch()

    return (
        <button 
            className={ ui === 'square' ? 'square-button' : 'circle-button'}
            onClick={() => {
                dispatch(selectMovie({
                    media_type: media_type,
                    movie_id: movie_id
                }))
                dispatch(switchVideoPlayer(true))
            }}
            >
            <FaPlay color='#fff'/>
            { title }
        </button>
    )
}

export default Button_PlayVideo;
