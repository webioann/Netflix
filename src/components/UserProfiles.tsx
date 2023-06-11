import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import UserAvatar from './UserAvatar'
import { IoMdArrowDropdown } from 'react-icons/io'

const UserProfiles  = () => {

    const user = useAppSelector(state => state.redux.user)

    return (
        <div>
            <Link 
                to={user ? '/profile' : '/login'} 
                style={{display: 'flex', alignItems: 'center'}}
                >
                <UserAvatar size={30} radius='4px'/>
                <IoMdArrowDropdown size={20} color='#fff'/>
            </Link>
        </div>
    )
}

export default UserProfiles;