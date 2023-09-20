import React, { useState, useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { selectMovie, startPlayVideo } from '../redux/redux';
import { IVideoParams } from '../types/video.types';
import { FaPlay } from 'react-icons/fa'
import '../style/buttons.scss'

type PlayVideoParam = {
    title?: string
    variant?: 'absolute'
    videoParam: IVideoParams
}

const Button_PlayVideo: React.FC<PlayVideoParam> = ({ videoParam, title, variant }) => {

    const dispatch = useAppDispatch()
    const [btnClass, setBtnClass] = useState('big-circle circle-button')

    useEffect(() => {
        if( title ) {  setBtnClass('square-button') }
        if( variant ) { setBtnClass('square-button')}
    }, [])

    return (
        <button 
            className={ title ? 'square-button' : 'big-circle circle-button'}
            onClick={() => {
                dispatch(selectMovie(videoParam))
                dispatch(startPlayVideo())
            }}
            >
            <FaPlay color='#fff' size={13}/>
            { title }
        </button>
    )
}

export default Button_PlayVideo;
