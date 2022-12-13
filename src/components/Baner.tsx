import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import '../style/baner.scss'

const Baner: React.FC = () => {

    const[banerImage, setBanerImage] = useState<string>('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')
    const [inputFocus, setInputFocus] = useState<boolean>(false)

    const onInputFocus = (event: React.FocusEvent<HTMLImageElement>) => {

    }
    return (
        <section 
            className='baner-container'
            style={{backgroundImage: `url(${banerImage})`}}>
            <div className="baner-content md">
                <h1 className='baner-welcom-title'>Фильмы, сериалы и многое другое без ограничений.</h1>
                <h3 className='baner-middle-title'>Смотрите где угодно. Отменить подписку можно в любое время.</h3>
                <p className='baner-hint'>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</p>
                <form className="baner-form">
                    <label className={inputFocus ? 'baner-label-up' : 'baner-label'}>
                        Адреса електронної пошти
                    </label>
                    <input onFocus={() => setInputFocus(true)}
                        className='baner-input' 
                        type='text'/>
                    <button className='baner-button'>
                        Почати
                        <IoIosArrowForward className='baner-button-arrow'/>
                    </button>
                </form>
            </div>
            <div className='black-fog'/>
        </section>
    )
}
export default Baner;