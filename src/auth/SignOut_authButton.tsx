import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import '../style/auth-button.scss'

const SignOut_authButton = () => {

    const navigate = useNavigate()

    const signOutUser = async () => {
        try {
            await signOut(auth)
            navigate("/")
        }
        catch(error) {console.log(error)}
    }

    return (
        <button onClick={signOutUser} 
            className='out-button'>
            Sing out
        </button>
    )
}

export default SignOut_authButton;