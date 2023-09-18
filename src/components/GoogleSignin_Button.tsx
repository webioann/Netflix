import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase.config';
import { signInWithPopup } from "firebase/auth"
import { FaGoogle } from 'react-icons/fa';

import '../style/auth-button.scss'

const GoogleSignin_Button = () => {

    const navigate = useNavigate()

    const googleRegistration = async () => {
        try {
            const auther = await signInWithPopup(auth, provider)
            console.log(auther)
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

export default GoogleSignin_Button;