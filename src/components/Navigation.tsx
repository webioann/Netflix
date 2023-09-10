import React, { useContext } from 'react'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import { NavLink } from 'react-router-dom'
import '../style/navigation.scss'

const Navigation = () => {

    const user = useContext(UserContext)

    return (
        <nav className='nav'>
            <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/'}>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/tv_shows'}>TV Shows</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/movies'}>Movies</NavLink>
            {/* <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/latest'}>Latest</NavLink> */}
            { user && <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/my_list'}>My List</NavLink> }
        </nav>
    )
}

export default Navigation;