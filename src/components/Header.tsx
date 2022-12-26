import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../redux/store'
import { Link, NavLink } from 'react-router-dom'
import SignoutButton from './SignoutButton'
import SearchInput from './SearchInput'
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
                <Link to={'/'} className='header-logo'>
                    <img className='netflix-logo'
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                        alt="Netflix logo"
                    />
                </Link> 
                <NavLink className='nav-link' to={'/'}>Home</NavLink>
                <NavLink className='nav-link' to={'/tvshows'}>TvShows</NavLink>
                <NavLink className='nav-link' to={'/movies'}>Movies</NavLink>
                <NavLink className='nav-link' to={'/latest'}>Latest</NavLink>
                <NavLink className='nav-link' to={'/my_list'}>My List</NavLink>
                
                <div className="spring-div" style={{ flex: 1 }}/>

                <SearchInput/>
                { currentUser && <SignoutButton/> }
                { !currentUser && <Link to={'/login'} className='g-button' style={{ backgroundColor: '#e50914' }}>Sign in</Link> }
                { currentUser ? (
                    <Link to={'/profile'} className='header-link'>
                        <img className='avatar-logo'
                            src={  avatar }
                            alt="avatar logo"
                        />
                    </Link>
                    ) : (
                    <Link to={'/login'} className='header-link'>
                        <img className='avatar-logo'
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                            alt="avatar logo"
                        />
                    </Link>
                    )
                }
            </div>
        </header>
    )
}
export default Header;