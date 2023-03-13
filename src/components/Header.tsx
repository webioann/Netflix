import React, { useState, useEffect } from 'react'
import SearchInput from './SearchInput'
import Container from './Container'
import HamburgerMenu from './HamburgerMenu'
import NetflixLogo from './NetflixLogo'
import NavigationMenu from './Navigation'
import UserAccounts from './UserProfiles'
import SpringDiv from './SpringDiv'
import '../style/header.scss'

const Header = () => {

    return (
        <header className='header'>
            <Container width='1600px'>
                <div className='header-wrapper'>
                    <NetflixLogo/>
                    <NavigationMenu/>
                    <SpringDiv/>
                    <SearchInput/>
                    <UserAccounts/>
                </div>
            </Container>
        </header>
    )
}
export default Header;