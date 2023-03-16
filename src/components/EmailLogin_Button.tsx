import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import { IAuthButtonProps } from '../types/auth.types'
import '../style/auth-button.scss'

const EmailLogin_Button: React.FC<IAuthButtonProps> = ({ email, password, setWarning }) => {

    const navigate = useNavigate()

    const loginWithEmail = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch(error){
            console.log(error)
            setWarning(true)
        }
    }

    return (
        <button className='g-button auth-button' onClick={loginWithEmail}>
            Login with email
        </button>
    )
}

export default EmailLogin_Button;