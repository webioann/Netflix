import React from 'react'
import { useAppSelector } from '../redux/store'
import AuthPageFooter from '../components/AuthPageFooter'
import Signout_Button from '../components/Signout_Button'
import UserAvatar from '../components/UserAvatar'
import '../style/profile-page.scss'

const Profile_Page = () => {

    const user = useAppSelector(state => state.redux.user)

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
                        <li className='profile-user-name'>{user?.name}</li>
                        <li className='plans-header'>
                            {`Plans (currentPlan: premium)`}
                        </li>
                        <li>
                            <span>Email :</span>
                            <span>{user?.email}</span>
                        </li>
                        <li>
                            <span>Use ID :</span>
                            <span>{user?.user_id}</span>
                        </li>
                        <li>
                            <span>User nikname :</span>
                            <span>{user?.name}</span>
                        </li>
                        <li>
                            <span>Email :</span>
                            <span>{user?.email}</span>
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