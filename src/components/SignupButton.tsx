import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.config'
import { IAuthButtonProps } from '../types/auth.types'
import '../style/auth-button.scss'

const SignupButton: React.FC<IAuthButtonProps> = ({ email, password, setWarning }) => {

    const navigate = useNavigate()

    const emailRegistration = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch(error){
            console.log(error)
            setWarning(true)
        }
    }

    return (
        <button className='g-button auth-button' onClick={emailRegistration}>
            Sign Up
        </button>
    )
}
export default SignupButton;