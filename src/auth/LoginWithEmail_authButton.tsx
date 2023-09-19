import React, { useState, SetStateAction } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import { IAuthButtonProps } from '../types/auth.types'
import '../style/auth-button.scss'
import { Dispatch } from '@reduxjs/toolkit'

export interface IAuthButton {
    email: string;
    password: string;
    setWarning: (param: boolean) => void;
    setError: React.Dispatch<SetStateAction<string | null>>
}


const LoginWithEmail_authButton: React.FC<IAuthButton> = ({ email, password, setWarning, setError }) => {

    const navigate = useNavigate()

    const loginWithEmail = async () => {
        try {
            const auther = await signInWithEmailAndPassword(auth, email, password)
            console.log(auther)
            navigate("/")
        }
        catch(error){
            setWarning(true)
            let message = 'Unknown Error'
            if (error instanceof Error) {
                let length = error.message.length
                let shortMessage = error.message.substring(error.message.indexOf("/") + 1, length - 2)
                let temp = shortMessage.replace(/-/g, " ")
                message = temp
            }
            setError(message)
        }
    }

    return (
        <button className='g-button auth-button' onClick={loginWithEmail}>
            Login with email
        </button>
    )
}

export default LoginWithEmail_authButton;