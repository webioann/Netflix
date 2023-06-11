import React from 'react'
import { useAppSelector } from "../redux/store"
import { USER_AVATAR } from '../data/constants'

type userAvatarProps = {
    size: number
    radius: string
}

const UserAvatar: React.FC<userAvatarProps> = ({ size, radius }) => {

    const user = useAppSelector(state => state.redux.user)

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