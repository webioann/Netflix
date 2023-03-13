import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import '../style/navigation.scss'

const Navigation = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <nav className='navbar'>
            <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/'}>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/tvshows'}>TvShows</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/movies'}>Movies</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/latest'}>Latest</NavLink>
            { currentUser && <NavLink className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } to={'/my_list'}>My List</NavLink> }
        </nav>
    )
}

export default Navigation;