import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { closeModal } from '../redux/reduxSlice';
import { IoClose } from 'react-icons/io5'
import { useMovieKeyExtractor } from '../hooks/useMovieKeyExtractor';
import { IChildrenProps } from '../types/global.types'
import { IGenres, TypeOfMovie } from '../types/movies.types'
import YouTube from 'react-youtube'
const movieTrailer = require('movie-trailer')
import '../style/modal.scss'

const Modal = () => {

    const dispatch = useAppDispatch()
    const modalIsOpen = useAppSelector(state => state.redux.modalIsOpen)
    const movieID = useAppSelector(state => state.redux.movieID)
    const [trailerURL, setTrailerURL] = useState('')
    const videoKey  = useMovieKeyExtractor()
    const [genres, setGenres] = useState<IGenres | []>([])

    // useEffect(() => {
    //     if( movieID === 0 ) return
    //     const keyExtractor = async () => {
    //         const data = await fetch(
    //             `https://api.themoviedb.org/3/movie/436270/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    //         )
    //         .then( (response) => response.json() )
    //         .then(MOVIE => console.log(MOVIE))
    //         .catch( (error) => console.log(error.message) )
    //             // console.log(data)
    //         // if( data ) {
    //         //     const index = data.videos?.results.findIndex((element: TypeOfMovie ) => element.type === 'Trailer')
    //         //     setTrailerURL(data.videos?.results[index]?.key)
    //         // }
    //         // if( data?.genres ) {
    //         //     setGenres(data.genres)
    //         // }
    //         // console.log(data)

    //     }
    //     keyExtractor();
    // }, [movieID])
    // ==========================
// console.log(`URL --> ${trailerURL}`);
// console.log(`ID --> ${movieID}`);
console.log(`VIDEO KEY --> ${JSON.stringify(videoKey)}`);
    // ==========================
    const options = {
        height: '390',
        width: '100%',
        playerVars: { 
            autoplay: 1, 
        }
    }
    
    return (
        <div className={modalIsOpen ? 'modal-layout' : 'hidden-modal'}>
            <div className="modal-content">
                <IoClose onClick={() => {dispatch(closeModal())}}
                    color='red'
                    size={24}/>
                <h1 className='modal-title'>HELLO </h1>
                { modalIsOpen && <YouTube videoId="JaV7mmc9HGw" opts={options}/> }
                {/* { modalIsOpen && <YouTube videoId={trailerURL} opts={options}/>} */}
            </div>
        </div>
    )
}
export default Modal;
// useEffect(() => {
//     if( !movieID ) return
//     const keyExtractor = async () => {
//         const data = await fetch(
//             `https://api.themoviedb.org/3/
//             'movie'/
//             ${movieID}?api_key=${process.env.TMDB_API_KEY}
//             &language=en-US&append_to_response=videos`
//         )
//         .then( (response) => response.json() )
//         .catch( (error) => console.log(error.message) )
//             console.log(data)
//         if( data?.videos ) {
//             const index = data.videos.results.findIndex((element: TypeOfMovie ) => element.type === 'Trailer')
//             setVideoKey(data.videos?.results[index]?.key)
//         }
//         if( data?.genres ) {
//             setGenres(data.genres)
//         }
//     }
//     keyExtractor();
// }, [movieID])

    // const { videoKey, genres } = useMovieKeyExtractor(movieID ? movieID : 79696)
    // const [genres, setGenres] = useState<IGenres | []>([])
    // useEffect(() => {
    //     if(trailerURL) {
    //         setTrailerURL('')
    //     }
    //     else{
    //         movieTrailer(movieName || '')
    //         .then( response => console.log( response ) )
    //         // .then((url: string) => { 
    //         //     const urlParams = new URLSearchParams(new URL(url).search) 
    //         //     const rawUrl = urlParams.get("v");
    //         //     // const raw = rawUrl?.length > 0 ? rawUrl : 'XtMThy8QKqU' 
    //         //     // setTrailerURL('XtMThy8QKqU')
    //         //     setTrailerURL(urlParams.get("v") || 'XtMThy8QKqU')
    //         // })
    //         .catch((error: string) => console.log(error))
    //     }
    // }, [movieName])


