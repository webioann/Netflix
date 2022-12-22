import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { selectMovie, resetMovieData, openModal } from '../redux/reduxSlice';
import { HiInformationCircle } from 'react-icons/hi'
import { useLazyRandomMovieQuery } from '../redux/fetchMoviesData';
import '../style/baner.scss'

const Baner = () => {

    const [ fetchRandomMovie, { data: random }] = useLazyRandomMovieQuery()
    const [backgroundImageURL, setImgUrl] = useState('')
    const [trancatedOverview, setTrancate] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => { fetchRandomMovie('') }, [])

    useEffect(() => { 
        if(random) {
            setImgUrl(`https://image.tmdb.org/t/p/original/${random?.backdrop_path ? random?.backdrop_path : random?.poster_path}`)
            const overview = random?.overview
            setTrancate(overview.length > 200 ? overview.substring(0, 200 - 1) + '...' : overview)
        }  
    }, [random])

    console.log(random)
    if(random) {
        return (
            <section 
                className='baner-container' 
                style={{backgroundImage: `url(${ backgroundImageURL })`}}>
                <div className="baner-content md">
                    <h1 className='baner-movie-name'>
                        {random?.name ? random?.name : random?.original_name}
                    </h1>
                    <p className='baner-overview'>
                        { trancatedOverview }
                    </p>
                    <div className="baner-buttons">
                        <button className='g-button'>Play</button>
                        <button className='baner-info-button g-button'
                            onClick={() => {
                                dispatch(resetMovieData())
                                dispatch(selectMovie({
                                    media_type: 'tv',
                                    movie_id: Number(random.id)}))
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