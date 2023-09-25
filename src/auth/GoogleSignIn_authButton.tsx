import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase.config';
import { signInWithPopup } from "firebase/auth"
import { FaGoogle } from 'react-icons/fa';
import './auth-button.scss'

const GoogleSignIn_authButton = () => {

    const navigate = useNavigate()

    const googleRegistration = async () => {
        try {
            await signInWithPopup(auth, provider)
            navigate("/")
        }
        catch(error) {console.error(error)} 
    }

    return (
        <button className='g-button auth-button' onClick={googleRegistration}>
            <FaGoogle/>
            Google 
        </button>
    )
}

export default GoogleSignIn_authButton;