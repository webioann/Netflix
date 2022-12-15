import React, { useState } from 'react'
import { useAppDispatch } from '../redux/store'
import { Link } from 'react-router-dom'
import Popup from './Popup'
import RegistrationForm from './RegistrationForm'
import LoginButton from './LoginButton'
import AuthPageFooter from './AuthPageFooter'
import '../style/auth-page.scss'

const Login_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    
    const closePopup = () => setWarning(false)
    
    return (
        <div className={`auth-page`}>
            <div className='auth-page-content'>
                <h1 className='auth-header'>Login</h1>
                { warning && <Popup closePopup={closePopup}/>}
                <RegistrationForm 
                    setEmail={setEmail} 
                    email={email} 
                    setPassword={setPassword} 
                    password={password}
                />
                <LoginButton 
                    email={email}
                    password={password} 
                    setWarning={setWarning}
                />
                <div className='question'>
                    <p className='question-text'>New to Netflix? </p>
                    <Link to='/signup' className='question-link'>
                        Sign up now.
                    </Link>
                </div>
                <p className='captcha'>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    <span className='captcha-link'>Learn more.</span> 
                </p>
            </div>
            <AuthPageFooter/>
            <div className="--fullscreen-gradient"></div>
        </div>
    )
}
export default Login_page;