import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import UserAvatar from './UserAvatar'

const UserProfiles  = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <div>
            <Link to={currentUser ? '/profile' : '/login'}>
                <UserAvatar size={30} radius='4px'/>
            </Link>

        </div>
    )
}

export default UserProfiles;