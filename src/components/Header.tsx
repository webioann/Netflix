import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../redux/store'
import { Link } from 'react-router-dom'
import SignoutButton from './SignoutButton'
import SearchInput from './SearchInput'
import Container from './Container'
import HamburgerMenu from './HamburgerMenu'
import NetflixLogo from './NetflixLogo'
import UserAvatar from './UserAvatar'
import '../style/header.scss'

const Header = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <header className='header'>
            <Container width='1600px'>
                <div className='header-wrapper'>
                    <NetflixLogo/>
                    <nav className='navbar'>
                        <Link className='g-link' to={'/'}>Home</Link>
                        <Link className='g-link' to={'/tvshows'}>TvShows</Link>
                        <Link className='g-link' to={'/movies'}>Movies</Link>
                        <Link className='g-link' to={'/latest'}>Latest</Link>
                        { currentUser && <Link className='g-link' to={'/my_list'}>My List</Link> }
                    </nav>
                    
                    <div className="spring-div" style={{ flex: 1 }}/>

                    <SearchInput/>
                    {/* { currentUser && <SignoutButton/> } */}
                    {/* { !currentUser && <Link to={'/login'} className='g-button' style={{ backgroundColor: '#e50914' }}>Sign in</Link> } */}
                    {/* { currentUser ? (
                        <Link to={'/profile'} className='user-avatar'>
                            <img src={  avatar } alt="user avatar"/>
                        </Link>
                        ) : (
                        <Link to={'/login'} className='user-avatar'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user avatar"/>
                        </Link>
                        )
                    } */}
                    {/* <HamburgerMenu switcher={switchMobileMenu} menu={isOpen}/> */}
                    <Link to={currentUser ? '/profile' : '/login'} className='user-avatar'>
                        <UserAvatar size={35} radius='4px'/>
                    </Link>

                </div>
            </Container>
        </header>
    )
}
export default Header;