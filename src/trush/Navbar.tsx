import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import SearchBar from '../components/SearchBar'
import NetflixLogo from '../components/NetflixLogo'
import Navigation from '../components/Navigation'
import KidsLink from '../components/KidsLink'
import GiftLink from '../components/GiftLink'
import MessageBell from '../components/MessageBell'
import UserProfiles from '../components/UserProfiles'
import SpringDiv from '../components/SpringDiv'
import '../style/navigation-panel.scss'


type ChildrenProps = { children: JSX.Element[] | JSX.Element }

// const NavBar: React.FC<ChildrenProps> = ({ children }) => {

//     const [fadedNavbar, setFadedNavbar] = useState(true)    

//     const fadeNavbarBg = () => {
//         if(window.scrollY > 70) {
//             setFadedNavbar(false)
//         }
//         else {
//             setFadedNavbar(true)
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', fadeNavbarBg)
//         return () => {window.removeEventListener('scroll', fadeNavbarBg)}
//     }, [])
    
//     return (
//     <nav className={fadedNavbar ? 'navbar nav-faded' : 'navbar nav-black'}>
//             <Container width='1600px'>
//                 <div className='navbar-wrapper'>
//                 <NetflixLogo/>
//                 <Navigation/>
//                 <SpringDiv/>
//                 <SearchBar/>
//                 <KidsLink/>
//                 <GiftLink/>
//                 <MessageBell/>
//                 <UserProfiles/>
//                     {children}
//                 </div>
//             </Container>
//         </nav>
//     )
// }

// export default NavBar;