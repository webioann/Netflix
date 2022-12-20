import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovie, openModal } from '../redux/reduxSlice';
import { requestsPath } from '../data/requests'
import { useTextTruncate } from '../hooks/useTextTruncate'
import { HiInformationCircle } from 'react-icons/hi'
import { IMovie } from "../types/movies.types";
import { useFetchMoviesQuery } from '../redux/fetchMoviesData';
import '../style/baner.scss'

const Baner: React.FC = () => {

    const { data: movies } = useFetchMoviesQuery({path: requestsPath.originals})
    const dispatch = useAppDispatch()
    const [movie, setMovie] = useState<IMovie[] | []>([])
    const [imgUrl, setImgUrl] = useState('')
    const [overview, setOverview] = useState('')

    useEffect(() => {
        if( movies ) {
            let idx = Math.floor(Math.random() * movies.length - 1)
            const randomMovieIndex = movies.findIndex((elem, index) => { return index === idx })
            const randomMovie = movies.filter((elem, index) => { return index === randomMovieIndex })
            const imgPartUrl = randomMovie[0]?.backdrop_path ? randomMovie[0]?.backdrop_path : randomMovie[0]?.poster_path 
            setImgUrl(`https://image.tmdb.org/t/p/original/${imgPartUrl}`)
            setOverview(randomMovie[0]?.overview)
            setMovie(randomMovie)
        }
        else { return }
    }, [movies])

    return (
        <section 
            className='baner-container'
            style={{backgroundImage: `url(${imgUrl})`}}
            >
            <div className="baner-content md">
                <h1 className='baner-movie-name'>
                    {movie[0]?.name ? movie[0]?.name : movie[0]?.original_name}
                </h1>
                <p className='baner-overview'>
                    { useTextTruncate(150, overview) }
                </p>
                <div className="baner-buttons">
                    <button className='g-button'>Play</button>
                    <button className='baner-info-button g-button'
                        onClick={() => {
                            dispatch(openModal())
                            dispatch(selectMovie({
                                media_type: 'tv',
                                movie_id: Number(movie[0]?.id)
                            }))
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