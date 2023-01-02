import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { resetMovieData, setModalVisibility } from '../redux/reduxSlice';
import { useLazyGetTrailerVideoURLQuery } from '../redux/VIDEO_API'
import VideoPlayer from './VideoPlayer'
import CloseButton from './CloseButton'
import { SlArrowDown } from 'react-icons/sl'
import '../style/modal.scss'

const Modal = () => {

    const dispatch = useAppDispatch()
    const movie = useAppSelector(state => state.redux.selectedMovie)
    const [trailerURL, setTrailerURL] = useState('')
    const modalIsOpen = useAppSelector(state => state.redux.modalVisibility)

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [ getTrailerVideoURL, { data: trailerVideoURL } ] = useLazyGetTrailerVideoURLQuery()

    const closePlayer = () => { 
        dispatch(setModalVisibility(false))
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
        <div className={modalIsOpen ? 'modal-layout' : 'hidden-modal'}>
            <div className="modal-content">
                <CloseButton onClose={closePlayer} color='red' size={30}/>
                <VideoPlayer open={modalIsOpen} data={trailerURL}/>
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
export default Modal;
