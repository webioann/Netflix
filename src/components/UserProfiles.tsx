import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import UserAvatar from './UserAvatar'
import { IoMdArrowDropdown } from 'react-icons/io'

const UserProfiles  = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <div>
            <Link 
                to={currentUser ? '/profile' : '/login'} 
                style={{display: 'flex', alignItems: 'center'}}
                >
                <UserAvatar size={30} radius='4px'/>
                <IoMdArrowDropdown size={20} color='#fff'/>
            </Link>
        </div>
    )
}

export default UserProfiles;