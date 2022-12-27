import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import '../style/humburger-menu.scss'

interface IHumburgerProps {
    switcher: () => void
    menu: boolean
}

const HumburgerMenu: React.FC<IHumburgerProps> = ({ switcher, menu }) => {
    
    return (
        <div onClick={switcher} className='humburger'>
            { !menu && <GiHamburgerMenu size={24} color='#e50914'/> }
            { menu && <IoClose size={24} color='#e50914'/> }
        </div>
    )
}
export default HumburgerMenu;
// style={{
//     position: 'absolute',
//     top: '1rem',
//     right: '1rem',
//     zIndex: 15,
// }}
