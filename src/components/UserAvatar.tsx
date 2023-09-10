import React, { useContext } from 'react'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import { USER_AVATAR } from '../data/constants'

type userAvatarProps = {
    size: number
    radius: string
}

const UserAvatar: React.FC<userAvatarProps> = ({ size, radius }) => {

    const user = useContext(UserContext)

    return (
        <img 
            style={{
                width: `${size}px`,
                height: `${size}px`,
                objectFit: 'cover',
                borderRadius: `${radius}`
            }}
            src={ user?.photoURL ? user?.photoURL : USER_AVATAR } alt="user avatar"/>
        )
}

export default UserAvatar;