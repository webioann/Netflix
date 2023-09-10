import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { resetSelectedMovie } from '../redux/reduxSlice';
import { useLazyGetTrailerVideoURLQuery } from '../redux/VIDEO_API'
import VideoPlayer from './VideoPlayer'
import Button_CloseVideo from './Button_CloseVideo'
// import { SlArrowDown } from 'react-icons/sl'
import '../style/video-player-popup.scss'

const VideoPlayer_Popup = () => {

    const dispatch = useAppDispatch()
    const selectedMovie = useAppSelector(state => state.redux.selectedMovie)
    // const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [ playerIsActive, setPlayerIsActive ] = useState(false)
    const [ getTrailerVideoURL, { data: trailerVideoURL } ] = useLazyGetTrailerVideoURLQuery()

    const closePlayer = () => { 
        // reset redux store selectedMovie on null
        dispatch(resetSelectedMovie())
        setPlayerIsActive(false)
    }

    useEffect(() => {
        if(selectedMovie) {
            getTrailerVideoURL({ 
                movie_id: selectedMovie.movie_id,
                media_type: selectedMovie.media_type
            })
        }
        // reset redux store selectedMovie on null
        dispatch(resetSelectedMovie())
        setPlayerIsActive(true)
    }, [selectedMovie])
    console.log(trailerVideoURL)

    if( trailerVideoURL !== undefined ) {
        return (
            <div className={ playerIsActive ? 'popup-layout' : 'hidden-popup'}>
                <div className="popup-content">
                    <Button_CloseVideo onClose={closePlayer} color='red' size={30}/>
                    { trailerVideoURL && <VideoPlayer data={trailerVideoURL}/>}
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
    else return null

}

export default VideoPlayer_Popup;
