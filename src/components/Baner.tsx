import React, { useState, useEffect } from 'react'
import { useFetchNetflixOriginalsMoviesQuery } from '../redux/netflixOriginalsApi'
import SigninForm from './SigninForm'
import '../style/baner.scss'

const Baner: React.FC = () => {

    const [banerImage, setBanerImage] = useState<string>('')
    const { data: movies  } = useFetchNetflixOriginalsMoviesQuery('')

    useEffect(() => {
        if(movies) {
            let randomNumber = Math.floor(Math.random() * movies.length - 1)
            let pathToImage = movies[randomNumber]?.backdrop_path
            setBanerImage(`https://image.tmdb.org/t/p/original/${pathToImage}`)
        }
        else{
            setBanerImage('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')
        }
    }, [movies])

    return (
        <section 
            className='baner-container'
            style={{backgroundImage: `url(${banerImage})`}}>
            <div className="baner-content md">
                <h1 className='baner-welcom-title'>Фильмы, сериалы и многое другое без ограничений.</h1>
                <h3 className='baner-middle-title'>Смотрите где угодно. Отменить подписку можно в любое время.</h3>
                <p className='baner-hint'>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</p>
                <SigninForm/>
            </div>
            <div className='black-fog'/>
        </section>
    )
}
export default Baner;