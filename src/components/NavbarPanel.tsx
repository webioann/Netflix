import React from 'react'
import Container from './Container'
import '../style/navbar-panel.scss'

type ChildrenProps = { children: JSX.Element[] | JSX.Element }


const NavbarPanel: React.FC<ChildrenProps> = ({ children }) => {
    
    return (
        <header className='header'>
            <Container width='1600px'>
                <div className='header-wrapper'>
                    {children}
                </div>
            </Container>
        </header>
    )
}

export default NavbarPanel;