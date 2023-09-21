import React, { useState, useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { selectMovie, startPlayVideo } from '../redux/redux';
import { IVideoParams } from '../types/video.types';
import { FaPlay } from 'react-icons/fa'
import '../style/buttons.scss'

type PlayVideoParam = {
    title?: string
    videoParam: IVideoParams
    variant: 'middle' | 'mega' | 'square'
}

const Button_PlayVideo: React.FC<PlayVideoParam> = ({ videoParam, title, variant }) => {

    const dispatch = useAppDispatch()
    const [parametres, setParametres] = useState({
        iconSize: 13,
        class: 'big-circle circle-button'
    })

    useEffect(() => {
        if( variant === 'square' ) {
            setParametres({
                iconSize: 13,
                class: 'square-button'
            }) 
        }
        if( variant === 'middle' ) {
            setParametres({
                iconSize: 13,
                class: 'big-circle circle-button'
            }) 
        }
        if( variant === 'mega' ) {
            setParametres({
                iconSize: 20,
                class: 'mega-circle circle-button'
            }) 
        }
    }, [])

    return (
        <button 
            className={ parametres.class }
            onClick={() => {
                dispatch(selectMovie(videoParam))
                dispatch(startPlayVideo())
            }}
            >
            <FaPlay color='#fff' size={ parametres.iconSize } title='Play video'/>
            { title }
        </button>
    )
}

export default Button_PlayVideo;
