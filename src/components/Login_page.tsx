import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Warning_Popup from './Warning_Popup'
import RegistrationForm from './RegistrationForm'
import EmailLogin_Button from './EmailLogin_Button'
import GoogleSignin_Button from './GoogleSignin_Button'
import AuthPageFooter from './AuthPageFooter'
import '../style/auth-button.scss'

const Login_Page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    
    const closePopup = () => setWarning(false)
    
    return (
        <div className={`auth-page`}>
            <div className='auth-page-content'>
                <h1 className='auth-header'>Login</h1>
                { warning && <Warning_Popup closePopup={closePopup}/>}
                <RegistrationForm 
                    setEmail={setEmail} 
                    email={email} 
                    setPassword={setPassword} 
                    password={password}
                />
                <EmailLogin_Button 
                    email={email}
                    password={password} 
                    setWarning={setWarning}
                />
                <GoogleSignin_Button/>
                <div className='question'>
                    <p className='question-text'>New to Netflix? </p>
                    <Link to='/signup' className='question-link g-link'>
                        Sign up now.
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

export default Login_Page;