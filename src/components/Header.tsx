import React, { useState, useEffect } from 'react'
import Container from './Container'
import '../style/header.scss'

type ChildrenProps = { children: JSX.Element[] | JSX.Element }

const Header: React.FC<ChildrenProps> = ({ children }) => {

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
        <section className={fadedNavbar ? 'navbar nav-faded' : 'navbar nav-black'}>
            <Container width='1600px'>
                <div className='navbar-wrapper'>
                    {children}
                </div>
            </Container>
        </section>
    )
}

export default Header;