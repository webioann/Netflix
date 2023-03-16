import React from 'react'
import { useAppSelector } from '../redux/store'
import AuthPageFooter from './AuthPageFooter'
import Signout_Button from './Signout_Button'
import UserAvatar from './UserAvatar'
import '../style/profile-page.scss'

const Profile_Page = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <div className={`profile-page`}>
            <div className="profile-page-content">
                <h1 className='profile-header'>Edit Profile</h1>
                <div className='profile-info'>
                    {/* <img className='profile-logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                        alt="avatar logo"
                    /> */}
                    <UserAvatar size={35} radius='4px'/>
                    <ul className="profile-main">
                        <li className='profile-user-name'>{currentUser?.currentUser_Name}</li>
                        <li className='plans-header'>
                            {`Plans (currentPlan: premium)`}
                        </li>
                        <li>
                            <span>Email :</span>
                            <span>{currentUser?.currentUser_Email}</span>
                        </li>
                        <li>
                            <span>Use ID :</span>
                            <span>{currentUser?.currentUser_ID}</span>
                        </li>
                        <li>
                            <span>User nikname :</span>
                            <span>{currentUser?.currentUser_Name}</span>
                        </li>
                        <li>
                            <span>Email :</span>
                            <span>{currentUser?.currentUser_Email}</span>
                        </li>

                    </ul>
                </div>
                <div className="long-button">
                    <Signout_Button/>
                </div>
            </div>
            <AuthPageFooter/>
            <div className="--fullscreen-gradient"></div>
        </div>
    )
}

export default Profile_Page;