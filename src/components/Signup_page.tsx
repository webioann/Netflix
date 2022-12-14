import React, { useState } from 'react'
import { useAppDispatch } from '../redux/store'
import { Link, useNavigate } from 'react-router-dom'
import SignupButton from './SignupButton'
import RegistrationForm from './RegistrationForm'
import Popup from './Popup'
import '../style/login-signup-page.scss'

const Signup_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
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
                    <Link to='/login' className='question-link'>
                        Login
                    </Link>
                </div>
            </div>
            <div className="--fullscreen-gradient"></div>
        </div>
    )
}
export default Signup_page;