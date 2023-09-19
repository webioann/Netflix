import React, { useContext } from 'react'
import UserAvatar from '../components/UserAvatar'
import SignOut_authButton from '../auth/SignOut_authButton'
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import '../style/account-page.scss'

const Account_Page = () => {

    const { user } = useContext(UserContext)

    return (
        <main className='account-page'>
            <section className='account'>
                <h2>Account</h2>
                <div className='section-row'>
                    <div className='left-part'>
                        <h4 className='section-title'>MEMBERSHIP & BILLING</h4>
                        <button className='cancel'>Cancel Membership</button>
                    </div>
                    <div className='details-part'>
                        <div className='block full email'>
                            <p className='user-info bolder'>{ user ? user.email : 'example@gmail.com'}</p>
                            <a className='mock-link'>Change account email</a>
                        </div>
                        <div className='block full password'>
                            <p className='user-info'>Password: ********</p>
                            <a className='mock-link'>Change password</a>
                        </div>
                        <div className='block full phone with-border'>
                            <p className='user-info'>Phone: 096 842 25 72</p>
                            <a className='mock-link'>Change phone number</a>
                        </div>
                        <div className='block full billing-date'>
                            <p className='user-info'>Your next billing date is &nbsp;
                                <span className='bolder'>January 17, 2023</span> 
                            </p>
                            <a className='mock-link'>Update payment info</a>
                        </div>
                        <div className='block full card'>
                            <p className='user-info bolder'>VISA **** **** **** 1186</p>
                            <a className='mock-link'>Billing details</a>
                        </div>
                        <div className='block half-right with-border'>
                            <a className='mock-link'>Change billing day</a>
                        </div>
                        <div className='block half-right'>
                            <a className='mock-link'>Redeem gift card or promo code</a>
                        </div>
                        <div className='block half-right'>
                            <a className='mock-link'>Where to buy gift cards</a>
                        </div>
                    </div>
                </div>
                {/* ==================================================== */}
                <div className='section-row'>
                    <div className='left-part'>
                        <h4 className='section-title'>PLAN DETAILS</h4>
                    </div>
                    <div className='details-part'>
                        <div className='block full card'>
                            <p className='user-info bolder'>Standart 
                                <span className='hd-video'>HD</span>
                            </p>
                            <a className='mock-link'>Change plan</a>
                        </div>
                    </div>
                </div>
                {/* ======================================================= */}
                <div className='section-row'>
                    <div className='left-part'>
                        <h4 className='section-title'>SETTINGS</h4>
                    </div>
                    <div className='details-part'>
                        <div className='block half-left'>
                            <a className='mock-link'>Parental controls</a>
                        </div>
                        <div className='block half-left'>
                            <a className='mock-link'>Test participation</a>
                        </div>
                        <div className='block half-left'>
                            <a className='mock-link'>Manage dowload devices.</a>
                        </div>
                        <div className='block half-left'>
                            <a className='mock-link'>Activate a device</a>
                        </div>
                        <div className='block half-left'>
                            <a className='mock-link'>Recent device streaming activity</a>
                        </div>
                        <div className='block half-left'>
                            <a className='mock-link'>Sign out of all devices</a>
                        </div>
                    </div>
                </div>
                {/* ======================================================= */}
                <div className='section-row'>
                    <div className='left-part'>
                        <h4 className='section-title'>MY PROFILE</h4>
                    </div>
                    <div className='details-part'>
                        <div className='block full'>
                            <div className='user-info avatar'>
                                <UserAvatar size={30} radius='0px'/>
                                <span className='user-name bolder'>{ user ? user.name : 'User Name' }</span>
                            </div>
                            <div className='link-stack'>
                                <a className='mock-link'>Manage profiles</a>
                                <a className='mock-link'>Add profile email</a>
                            </div>
                        </div>
                        <div className='like-footer'>
                            <a className='mock-link'>Language</a>
                            <a className='mock-link'>Viewing activity</a>
                            <a className='mock-link'>Playback settings</a>
                            <a className='mock-link'>Ratings</a>
                            <a className='mock-link'>Subtitle appearance</a>
                        </div>
                    </div>
                </div>
                <SignOut_authButton/>
            </section>
        </main>
    )
}

export default Account_Page