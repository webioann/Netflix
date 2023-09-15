import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import UserAvatar from './UserAvatar'
import { IoMdArrowDropdown } from 'react-icons/io'

const UserProfiles  = () => {

    const user = useContext(UserContext)

    return (
        <div>
            <Link 
                to={user ? '/account' : '/login'} 
                style={{display: 'flex', alignItems: 'center'}}
                >
                <UserAvatar size={30} radius='4px'/>
                <IoMdArrowDropdown size={20} color='#fff'/>
            </Link>
        </div>
    )
}

export default UserProfiles;