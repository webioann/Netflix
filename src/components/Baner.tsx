import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovieID, openModal } from '../redux/reduxSlice';
import { requestsPath } from '../data/requests'
import { IBanerMovie } from '../types/movies.types'
import { useTextTruncate } from '../hooks/useTextTruncate'
import { HiInformationCircle } from 'react-icons/hi'
import { IMovie, IMoviesDataResponse } from "../types/movies.types";
import { useFetchMoviesQuery } from '../redux/fetchMoviesData';

import '../style/baner.scss'

const Baner: React.FC = () => {

    const { data: movies } = useFetchMoviesQuery({request_path: requestsPath.originals})
    const dispatch = useAppDispatch()
    const [movie, setMovie] = useState<IMovie | {}>({})

    const [randomMovie, setRandomMovie] = useState<IBanerMovie>({
        img: 'https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg',
        name: 'movie',
        overview: 'Curvy, curly, confident Mich knows she is fabulous',
        id: 0
    })

    useEffect(() => {
        if( movies ) {
            let idx = Math.floor(Math.random() * movies.length - 1)
            const randomMovieIndex = movies.findIndex((elem, index) => { return index === idx })
            const rawMovie = movies.filter((elem, index) => { return index === randomMovieIndex })
            setMovie(rawMovie[0])
        }
    }, [movies])
    console.log(movie);

    useEffect(() => {
        if(movies) {
            let idx = Math.floor(Math.random() * movies.length - 1)
            let imgPath = movies[idx]?.backdrop_path
                ? movies[idx]?.backdrop_path
                : movies[idx]?.poster_path
            let choosedName = movies[idx]?.name
                ? movies[idx]?.name
                : movies[idx]?.original_name
            let customOverview = movies[idx]?.overview
                ? movies[idx]?.overview
                : 'Curvy, curly, confident Mich knows she is fabulous'

            setRandomMovie({
                img: `https://image.tmdb.org/t/p/original/${imgPath}`,
                name: choosedName,
                overview: customOverview,
                id: movies[idx]?.id
            })
            // console.log(movies[idx]);
        }
    }, [movies])

// console.log(randomMovie)
    return (
        <section 
            className='baner-container'
            style={{backgroundImage: `url(${randomMovie.img})`}}
            >
            <div className="baner-content md">
                <h1 className='baner-movie-name'>
                    {randomMovie.name}
                </h1>
                <p className='baner-overview'>
                    { useTextTruncate(150, randomMovie.overview) }
                </p>
                <div className="baner-buttons">
                    <button className='g-button'>Play</button>
                    <button className='baner-info-button g-button'
                        onClick={() => {
                            dispatch(openModal())
                            dispatch(selectMovieID(randomMovie.id))
                        }}
                    >
                        More info
                        <HiInformationCircle color='#fff' size={24}/>
                    </button>
                </div>
            </div>
            <div className='black-fog'/>
        </section>
    )
}
export default Baner;