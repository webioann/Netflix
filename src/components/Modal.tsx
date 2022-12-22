import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { closeModal } from '../redux/reduxSlice';
// import { IGenres, TypeOfMovie } from '../types/movies.types'
// const movieTrailer = require('movie-trailer')
import { useLazyGetVideoDataQuery } from '../redux/fetchMoviesData'
import VideoPlayer from './VideoPlayer'
import CloseButton from './CloseButton';
import '../style/modal.scss'

const Modal = () => {

    const [ fetchVideo, { data: video }] = useLazyGetVideoDataQuery()
    const dispatch = useAppDispatch()
    const modalIsOpen = useAppSelector(state => state.redux.modalIsOpen)
    const movie = useAppSelector(state => state.redux.selectedMovie)
    const [trailerURL, setTrailerURL] = useState('')

    const closePlayer = () => { dispatch(closeModal()) }

    useEffect(() => {
        if(movie) {
            fetchVideo({ 
                movie_id: Number(movie.movie_id),
                media_type: movie.media_type
            })
        }
    }, [movie])


    useEffect(() => {
        if( !video ) return
        if( video.length > 0 ) {
            const index = video.findIndex((element ) => element.type === 'Trailer')
            setTrailerURL(video[index]?.key)
        }
    }, [video])
    
    return (
        <div className={modalIsOpen ? 'modal-layout' : 'hidden-modal'}>
            <div className="modal-content">
                <CloseButton onClose={closePlayer} color='red' size={30}/>
                <VideoPlayer open={modalIsOpen} data={trailerURL}/>
            </div>
        </div>
    )
}
export default Modal;
