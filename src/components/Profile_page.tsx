import React from 'react'
import { useAppSelector } from '../redux/store'

import { MdSecurity } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import '../style/profile-page.scss'

const Account_page = () => {

    const currentUser = useAppSelector(state => state.redux.currentUser)

    return (
        <div className='profile-page'>
            <div className='profile-container'>
                <header className='profile-header'>
                    <MdSecurity size={50} color='#5388cd'/>
                    <h1 className='profile-header-title'>Personal Information</h1>
                </header>
                <div className='profile-user'>
                    <div className='profile-img-wrapper'>
                        { currentUser?.currentUser_PhotoURL ? 
                            (<img src={currentUser?.currentUser_PhotoURL} alt='user photo'/>) :
                            <FaUserCircle size={40} color='#5388cd'/> 
                        }
                    </div>
                    <h2>{currentUser?.currentUser_Name}</h2>
                </div>

                <div className='profile-cell'>
                    <h3>Email :</h3>
                    <h3>{currentUser?.currentUser_Email}</h3>
                </div>
                <div className='profile-cell'>
                    <h3>User ID :</h3>
                    <h3>{currentUser?.currentUser_ID}</h3>
                </div>
                <div className='profile-cell'>
                    <h3>Email :</h3>
                    <h3>{currentUser?.currentUser_Email}</h3>
                </div>
                <div className='profile-cell'>
                    <h3>Email :</h3>
                    <h3>{currentUser?.currentUser_Email}</h3>
                </div>

                <h3> </h3>


            </div>
        </div>
    )
}
export default Account_page;