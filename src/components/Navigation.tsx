import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import '../style/navigation.scss'

const Navigation = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <nav className='navbar'>
            <Link className='g-link' to={'/'}>Home</Link>
            <Link className='g-link' to={'/tvshows'}>TvShows</Link>
            <Link className='g-link' to={'/movies'}>Movies</Link>
            <Link className='g-link' to={'/latest'}>Latest</Link>
            { currentUser && <Link className='g-link' to={'/my_list'}>My List</Link> }
        </nav>
    )
}

export default Navigation;