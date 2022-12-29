import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../redux/store'
import { Link } from 'react-router-dom'
import SignoutButton from './SignoutButton'
import SearchInput from './SearchInput'
import Container from './Container'
import HumburgerMenu from './HumburgerMenu'
import '../style/header.scss'

const Header = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)
    const userAvatar = useAppSelector(state => state.redux.currentUser?.currentUser_PhotoURL)
    const [avatar, setAvatar] = useState<string>("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png")
    const [mobile, setMenu] = useState(window.matchMedia("(max-width: 640px)").matches)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        currentUser?.currentUser_PhotoURL ? 
        setAvatar(currentUser?.currentUser_PhotoURL) : 
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    }, [userAvatar])

// console.log(mobile)
// console.log(window.innerWidth);
    const switchMobileMenu = () => { setIsOpen(prev => !prev) }

    return (
        <header className='header'>
            <Container width='1600px'>
                <div className='header-wrapper'>
                    <HumburgerMenu switcher={switchMobileMenu} menu={isOpen}/>
                    <Link to={'/'} className='netflix-logo'>
                        <img 
                            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                            alt="Netflix logo"
                        />
                    </Link> 
                    <nav>
                        <Link className='g-link' to={'/'}>Home</Link>
                        <Link className='g-link' to={'/tvshows'}>TvShows</Link>
                        <Link className='g-link' to={'/movies'}>Movies</Link>
                        <Link className='g-link' to={'/latest'}>Latest</Link>
                        <Link className='g-link' to={'/my_list'}>My List</Link>
                    </nav>
                    
                    <div className="spring-div" style={{ flex: 1 }}/>

                    <SearchInput/>
                    { currentUser && <SignoutButton/> }
                    { !currentUser && <Link to={'/login'} className='g-button' style={{ backgroundColor: '#e50914' }}>Sign in</Link> }
                    { currentUser ? (
                        <Link to={'/profile'} className='user-avatar'>
                            <img src={  avatar } alt="user avatar"/>
                        </Link>
                        ) : (
                        <Link to={'/login'} className='user-avatar'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user avatar"/>
                        </Link>
                        )
                    }
                </div>
            </Container>
        </header>
    )
}
export default Header;