import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../redux/store'
import { Link } from 'react-router-dom'
import SignoutButton from './SignoutButton'
import '../style/header.scss'

const Header = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)
    const userAvatar = useAppSelector(state => state.redux.currentUser?.currentUser_PhotoURL)
    const [avatar, setAvatar] = useState<string>("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png")

    useEffect(() => {
        currentUser?.currentUser_PhotoURL ? 
        setAvatar(currentUser?.currentUser_PhotoURL) : 
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    }, [userAvatar])

    return (
        <header className='header'>
            <div className='header-wrapper'>
                <Link to={'/'} className='header-logo-wrapper'>
                    <img className='netflix-logo'
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                        alt="Netflix logo"/>
                </Link> 
                <Link to={'/test'}>TEST</Link>
                <div className="header-right-side">
                    { currentUser && <SignoutButton/> }
                    { currentUser ? (
                        <Link to={'/profile'} className='header-link'>
                            <img className='avatar-logo'
                                src={  avatar }
                                alt="avatar logo"/>
                        </Link>
                        ) : (
                        <Link to={'/login'} className='header-link'>
                            <img className='avatar-logo'
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                                alt="avatar logo"/>
                        </Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;