import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { resetSelectedMovie, stopPlayVideo } from '../redux/redux';
import { useLazyGetTrailerVideoURLQuery } from '../redux/VIDEO_API'
import VideoPlayer from './VideoPlayer'
import Button_CloseVideo from './Button_CloseVideo'
import '../style/video-player-modal.scss'

const VideoPlayer_Modal = () => {
    // === modal window will open if select movie is assign and player is launched ===
    const dispatch = useAppDispatch()
    const selectedMovie = useAppSelector(state => state.redux.selectedMovie)
    const videoIsPlaying = useAppSelector(state => state.redux.videoIsPlaying)
    const [ getTrailerVideoURL, { data: trailerVideoURL } ] = useLazyGetTrailerVideoURLQuery()

    const closePlayer = () => { 
        // reset redux store selectedMovie on null
        dispatch(resetSelectedMovie())
        dispatch(stopPlayVideo())
    }

    useEffect(() => {
        // if selected movie is assign must fetch from server response with data(URL) for playing video 
        if(selectedMovie) {
            getTrailerVideoURL({ 
                movie_id: selectedMovie.movie_id,
                media_type: selectedMovie.media_type
            })
        }
        dispatch(resetSelectedMovie())
    }, [selectedMovie])

    if( trailerVideoURL  && videoIsPlaying ) {
        // will giveed URL-string to video  player, open modal with player inside
        return (
            <div className={ videoIsPlaying ? 'modal-layout' : 'hidden-modal'}>
                <div className="modal-content">
                    <Button_CloseVideo onClose={closePlayer} color='red' size={30}/>
                    <VideoPlayer data={trailerVideoURL}/>
                </div>
            </div>
        )
    }
    else return null

}

export default VideoPlayer_Modal;
