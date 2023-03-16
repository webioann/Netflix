import React from 'react'
import { useAppDispatch } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase.config';
import { signInWithPopup } from "firebase/auth"
import '../style/auth-button.scss'

const GoogleSignin_Button = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const googleRegistration = async () => {
        try {
            await signInWithPopup(auth, provider)
            navigate("/")
        }
        catch(error) {console.error(error)} 
    }

    return (
        <button className='g-button auth-button' onClick={googleRegistration}>
            Signin with Google 
        </button>
    )
}

export default GoogleSignin_Button;