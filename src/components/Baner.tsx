import React, { useState, useEffect } from 'react'
import { useFetchMoviesQuery } from '../redux/fetchMoviesData';
import { requestsPath } from '../data/requests'
// import BanerMainForm from './BanerMainForm'
import { IBanerMovie } from '../types/movies.types'
import { useTextTruncate } from '../hooks/useTextTruncate';
import '../style/baner.scss'

const Baner: React.FC = () => {

    const { data: movies } = useFetchMoviesQuery({request_path: requestsPath.originals})
    const [randomMovie, setRandomMovie] = useState<IBanerMovie>({
        img: 'https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg',
        name: 'movie',
        overview: 'Curvy, curly, confident Mich knows she is fabulous',
    })

    useEffect(() => {
        if(movies) {
            let idx = Math.floor(Math.random() * movies.length - 1)
            let imgPath = movies[idx]?.backdrop_path
                ? movies[idx]?.backdrop_path
                : movies[idx]?.poster_path
            setRandomMovie({
                img: `https://image.tmdb.org/t/p/original/${imgPath}`,
                name: movies[idx].name,
                overview: movies[idx].overview
            })
            // console.log(movies[idx]);
        }
    }, [movies])


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
                    {useTextTruncate(150, randomMovie.overview)}
                </p>
                <div className="baner-buttons">
                    <button>Play</button>
                    <button>My list</button>
                </div>
            </div>
            <div className='black-fog'/>
        </section>
    )
}
export default Baner;