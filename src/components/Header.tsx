import React from 'react'
import { useAppSelector } from '../redux/store'
import SignoutButton from './SignoutButton'
import { Link } from 'react-router-dom'
import '../style/header.scss'

const Header = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)
    console.log(currentUser)

    return (
        <header className='header'>
            <div className='header-wrapper'>
                <Link to={'/'} className='header-logo-wrapper'>
                    <img className='netflix-logo'
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                        alt="Netflix logo"/>
                </Link>  
                { currentUser && <SignoutButton/> }
                <Link to={'/login'} className='header-login-link'>
                    <img className='avatar-logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                        alt="avatar logo"/>
                </Link>
                </div>
        </header>
    )
}
export default Header;