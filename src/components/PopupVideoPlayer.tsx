import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { resetMovieData, switchVideoPlayer } from '../redux/reduxSlice';
import { useLazyGetTrailerVideoURLQuery } from '../redux/VIDEO_API'
import VideoPlayer from './VideoPlayer'
import CloseButton from './CloseButton'
import { SlArrowDown } from 'react-icons/sl'
import '../style/popup-video-player.scss'

const PopupVideoPlayer = () => {

    const dispatch = useAppDispatch()
    const movie = useAppSelector(state => state.redux.selectedMovie)
    const [trailerURL, setTrailerURL] = useState('')
    const startVideoPlayer = useAppSelector(state => state.redux.startVideoPlayer)

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [ getTrailerVideoURL, { data: trailerVideoURL } ] = useLazyGetTrailerVideoURLQuery()

    const closePlayer = () => { 
        dispatch(switchVideoPlayer(false))
        dispatch(resetMovieData())
    }

    useEffect(() => {
        if(movie) {
            getTrailerVideoURL({ 
                movie_id: movie.movie_id,
                media_type: movie.media_type
            })
        }
    }, [movie])

    useEffect(() => {
        if(trailerVideoURL) {
            setTrailerURL(trailerVideoURL)
        }
    }, [trailerVideoURL])

    // console.log(trailerVideoURL);

    return (
        <div className={startVideoPlayer ? 'popup-layout' : 'hidden-popup'}>
            <div className="popup-content">
                <CloseButton onClose={closePlayer} color='red' size={30}/>
                <VideoPlayer open={startVideoPlayer} data={trailerURL}/>
                {/* <div className="show-more-icon-box">
                    <SlArrowDown className='show-more-icon' 
                        onClick={() => setShowMoreInfo(prev => !prev)}
                        title='more info' 
                        size={40} 
                        color='red'
                    />
                </div> */}

                {/* <div className={ showMoreInfo ? 'open-info more-info' : 'close-info more-info'}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div> */}
            </div>
        </div>
    )
}
export default PopupVideoPlayer;
