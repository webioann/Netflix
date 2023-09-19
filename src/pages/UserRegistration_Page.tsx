import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorReportMessage from '../components/ErrorReportMessage'
import RegistrationForm from '../components/RegistrationForm'
import LoginWithEmail_authButton from '../auth/LoginWithEmail_authButton'
import SignUpWithEmail_authButton from '../auth/SignUpWithEmail_authButton'
import GoogleSignIn_authButton from '../auth/GoogleSignIn_authButton'
import AuthPageFooter from '../components/AuthPageFooter'
import '../style/auth-page.scss'

type AuthPageProps = {
    variant: 'login' | 'signup'
}
const UserRegistration_Page: React.FC<AuthPageProps> = ({ variant }) => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const [error,setError] = useState<string | null>(null)
    
    const closePopup = () => setWarning(false)
    
    return (
        <div className={`auth-page`}>
            <div className='auth-page-content'>
                <h1 className='auth-header'>{ variant === 'login' ? 'Login' : 'Signup'}</h1>
                { warning && <ErrorReportMessage closePopup={closePopup} message={error}/>}
                <RegistrationForm 
                    setEmail={setEmail} 
                    email={email} 
                    setPassword={setPassword} 
                    password={password}
                />
                { variant === 'login' && <LoginWithEmail_authButton 
                    email={email}
                    password={password} 
                    setWarning={setWarning}
                    setError={setError}
                />}
                { variant === 'signup' && <SignUpWithEmail_authButton 
                    email={email} 
                    password={password} 
                    setWarning={setWarning}
                />}
                <GoogleSignIn_authButton/>
                <div className='question'>
                    <p className='question-text'>
                        { variant === 'login' ? 'New to Netflix?' : 'Already have an account ?'} 
                    </p>
                    { variant === 'login' 
                        ? <Link to={"/signup"} className='question-link g-link'>Sign up now.</Link> 
                        : <Link to={"/login"} className='question-link g-link'>Login now.</Link>
                    }
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