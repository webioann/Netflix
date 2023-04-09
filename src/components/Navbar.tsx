import React, { useState, useEffect } from 'react'
import Container from './Container'
import SearchBar from './SearchBar'
import NetflixLogo from './NetflixLogo'
import Navigation from './Navigation'
import KidsLink from './KidsLink'
import GiftLink from './GiftLink'
import MessageBell from './MessageBell'
import UserProfiles from './UserProfiles'
import SpringDiv from './SpringDiv'

import '../style/navigation-panel.scss'

type ChildrenProps = { children: JSX.Element[] | JSX.Element }

const NavBar: React.FC<ChildrenProps> = ({ children }) => {

    const [fadedNavbar, setFadedNavbar] = useState(true)

    const fadeNavbarBg = () => {
        if(window.scrollY > 70) {
            setFadedNavbar(false)
        }
        else {
            setFadedNavbar(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fadeNavbarBg)
        return () => {window.removeEventListener('scroll', fadeNavbarBg)}
    }, [])
    
    return (
        <nav className={fadedNavbar ? 'navbar nav-faded' : 'navbar nav-black'}>
            <Container width='1600px'>
                <div className='navbar-wrapper'>
                <NetflixLogo/>
                <Navigation/>
                <SpringDiv/>
                <SearchBar/>
                <KidsLink/>
                <GiftLink/>
                <MessageBell/>
                <UserProfiles/>
                    {children}
                </div>
            </Container>
        </nav>
    )
}

export default NavBar;