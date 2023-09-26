import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import UserAvatar from './UserAvatar'
import SignOut_authButton from '../auth/SignOut_authButton'
import { IoMdArrowDropdown } from 'react-icons/io'
import '../style/user-profiles.scss'

const UserProfiles  = () => {
    // === user avatar with dropdown link on account and SignOut_Button ===
    const {user} = useContext(UserContext)

    return (
        <div className='user-profiles'>
            <div className="user-photo">
                <UserAvatar size={30} radius='4px'/>
                <IoMdArrowDropdown size={20} color='#fff'/>
            </div>
            <div className="dropdown-menu">
                <Link to={user ? '/account' : '/login'} className='account-link'>
                    {user ? 'Account' : 'Login page'}
                </Link>
                { user ? <SignOut_authButton/> : null }
            </div>
        </div>
    )
}

export default UserProfiles;