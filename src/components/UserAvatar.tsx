import React from 'react'
import { useAppSelector } from "../redux/store"
import { USER_AVATAR } from '../data/constants'

type userAvatarProps = {
    size: number
    radius: string
}

const UserAvatar: React.FC<userAvatarProps> = ({ size, radius }) => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <img 
            style={{
                width: `${size}px`,
                height: `${size}px`,
                objectFit: 'cover',
                borderRadius: `${radius}`
            }}
            src={ currentUser?.currentUser_PhotoURL ? currentUser?.currentUser_PhotoURL : USER_AVATAR } alt="user avatar"/>
        )
}

export default UserAvatar;