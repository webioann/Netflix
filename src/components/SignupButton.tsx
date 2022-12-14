import React from 'react'
import { useAppDispatch } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.config'
import { IAuthButtonProps } from '../types/auth.types'
import '../style/signup-button.scss'

const SignupButton: React.FC<IAuthButtonProps> = ({ email, password, setWarning }) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const emailRegistration = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch(error){
            console.log(error)
            setWarning(true)
        }
    }

    return (
        <button className='signup-button' onClick={emailRegistration}>
            Sign Up
        </button>
        )
}

export default SignupButton;