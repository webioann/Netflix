import React, { useContext } from 'react'
import { PageContext } from '../pages/Container_Page';
import { useAppDispatch } from '../redux/store'
import { selectMovie, switchVideoPlayer } from '../redux/reduxSlice';
import { FaPlay } from 'react-icons/fa'
import '../style/buttons.scss'

type PlayVideo_ButtonType = {
    movie_id: number
    title?: string
}

const Button_PlayVideo: React.FC<PlayVideo_ButtonType> = ({ movie_id, title }) => {

    const dispatch = useAppDispatch()
    const { media_type } = useContext(PageContext)

    return (
        <button 
            className={ title ? 'square-button' : 'big-circle circle-button'}
            onClick={() => {
                dispatch(selectMovie({
                    media_type: media_type,
                    movie_id: movie_id
                }))
                dispatch(switchVideoPlayer(true))
            }}
            >
            <FaPlay color='#fff' size={13}/>
            { title }
        </button>
    )
}

export default Button_PlayVideo;
