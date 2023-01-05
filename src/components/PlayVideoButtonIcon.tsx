import React from 'react'
import { useAppDispatch } from '../redux/store'
import { selectMovie, setModalVisibility } from '../redux/reduxSlice';
import { FaPlay } from 'react-icons/fa'

interface IPlayVideoProps {
    media_type: 'movie' | 'tv'
    movie_id: number
    size: number
    color: string
}

const PlayVideoButtonIcon: React.FC<IPlayVideoProps> = ({ media_type, movie_id, size, color }) => {
    const dispatch = useAppDispatch()

    return (
        <FaPlay  
            size={size}
            color={color}
            onClick={() => {
                dispatch(selectMovie({
                    media_type: media_type,
                    movie_id: movie_id
                }))
                dispatch(setModalVisibility(true))
            }}
        />
    )
}
export default PlayVideoButtonIcon;