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

const PlayVideo_Button: React.FC<PlayVideo_ButtonType> = ({ ui, media_type, movie_id, title }) => {

    const dispatch = useAppDispatch()

    return (
        <button className={ ui === 'square' ? 'square-button g-button' : 'circle-button'}>
            <FaPlay  
                size={20}
                color='fff'
                onClick={() => {
                    dispatch(selectMovie({
                        media_type: media_type,
                        movie_id: movie_id
                    }))
                    dispatch(switchVideoPlayer(true))
                }}
            />
            { title }
        </button>
    )
}
export default PlayVideo_Button;
