import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovie, resetMovieData, openModal } from '../redux/reduxSlice';
import { useTextTruncate } from '../hooks/useTextTruncate'
import { HiInformationCircle } from 'react-icons/hi'
import { useLazyRandomMovieQuery } from '../redux/fetchMoviesData';
import '../style/baner.scss'

const Baner = () => {

    const [ fetchRandomMovie, { data: random }] = useLazyRandomMovieQuery()
    const [imgUrl, setImgUrl] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => { fetchRandomMovie('') }, [])

    useEffect(() => { 
        random && setImgUrl(`https://image.tmdb.org/t/p/original/${random?.backdrop_path ? random?.backdrop_path : random?.poster_path}`) 
    }, [random])

    console.log(random)
    if(random) {
        return (
            <section 
                className='baner-container' 
                style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${random?.backdrop_path ? random?.backdrop_path : random?.poster_path}`})`}}>
                <div className="baner-content md">
                    <h1 className='baner-movie-name'>
                        {random?.name ? random?.name : random?.original_name}
                    </h1>
                    <p className='baner-overview'>
                        { useTextTruncate(150, random?.overview) }
                    </p>
                    <div className="baner-buttons">
                        <button className='g-button'>Play</button>
                        <button className='baner-info-button g-button'
                            onClick={() => {
                                dispatch(resetMovieData())
                                dispatch(selectMovie({
                                    media_type: 'tv',
                                    movie_id: Number(random.id)
                                }))
                                dispatch(openModal())
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
    else{
        return (
            <section className='baner-container'></section>
        )
    }
}
export default Baner;