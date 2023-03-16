import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignupButton from './EmailSignup_Button'
import RegistrationForm from './RegistrationForm'
import Popup from './Warning_Popup'
import AuthPageFooter from './AuthPageFooter'
import '../style/auth-page.scss'

const Signup_Page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    
    const closePopup = () => setWarning(false)

    return (
        <div className={`auth-page`}>
            <div className="auth-page-content">
                <h1 className='auth-header'>Sign Up</h1>
                { warning && <Popup closePopup={closePopup}/>}
                <RegistrationForm 
                    setEmail={setEmail} 
                    email={email} 
                    setPassword={setPassword} 
                    password={password}
                />
                <SignupButton 
                    email={email} 
                    password={password} 
                    setWarning={setWarning}
                />
                <div className='question'>
                    <p className='question-text'>Already have an account ?</p>
                    <Link to='/login' className='question-link g-link'>
                        Login
                    </Link>
                </div>
                <p className='captcha'>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    <span className='captcha-link g-link'>Learn more.</span> 
                </p>        
            </div>
            <AuthPageFooter/>
            <div className="--fullscreen-gradient"></div>
        </div>
    )
}

export default Signup_Page;