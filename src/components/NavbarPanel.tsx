import React, { useState, useEffect } from 'react'
import Container from './Container'
import '../style/navbar-panel.scss'

type ChildrenProps = { children: JSX.Element[] | JSX.Element }

const NavbarPanel: React.FC<ChildrenProps> = ({ children }) => {

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
        <section className={fadedNavbar ? 'header nav-faded' : 'header nav-black'}>
            <Container width='1600px'>
                <div className='header-wrapper'>
                    {children}
                </div>
            </Container>
        </section>
    )
}

export default NavbarPanel;