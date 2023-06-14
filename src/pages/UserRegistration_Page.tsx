import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Warning_Popup from '../components/Warning_Popup'
import RegistrationForm from '../components/RegistrationForm'
import EmailLogin_Button from '../components/EmailLogin_Button'
import SignupButton from '../components/EmailSignup_Button'
import GoogleSignin_Button from '../components/GoogleSignin_Button'
import AuthPageFooter from '../components/AuthPageFooter'
import '../style/auth-page.scss'

type AuthPageProps = {
    variant: 'login' | 'signup'
}

const UserRegistration_Page: React.FC<AuthPageProps> = ({ variant }) => {

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
                { variant === 'login' && <EmailLogin_Button 
                    email={email}
                    password={password} 
                    setWarning={setWarning}
                />}
                { variant === 'signup' && <SignupButton 
                    email={email} 
                    password={password} 
                    setWarning={setWarning}
                />}
                <GoogleSignin_Button/>
                <div className='question'>
                    <p className='question-text'>
                        { variant === 'login' ? 'New to Netflix?' : 'Already have an account ?'} 
                    </p>
                    <Link to={ variant === 'login' ? '/signup' : 'login'} className='question-link g-link'>
                        { variant === 'login' ? 'Sign up now.' : 'Login now.'} 
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

export default UserRegistration_Page;