import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import '../style/hamburger-menu.scss'

interface IHamburgerProps {
    switcher: () => void
    menu: boolean
}

const HamburgerMenu: React.FC<IHamburgerProps> = ({ switcher, menu }) => {
    
    return (
        <div onClick={switcher} className='hamburger'>
            { !menu ? <GiHamburgerMenu size={35} color='#e50914'/> : <IoClose size={35} color='#e50914'/> }
        </div>
    )
}

export default HamburgerMenu;
