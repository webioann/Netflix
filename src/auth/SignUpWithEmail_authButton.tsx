import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.config'
import { IAuthButtonProps } from '../types/auth.types'
import '../style/auth-button.scss'

const SignUpWithEmail_authButton: React.FC<IAuthButtonProps> = ({ email, password, setWarning, setError }) => {

    const navigate = useNavigate()

    const createUserAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
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
        <button className='g-button auth-button' onClick={createUserAccount}>
            Sign Up with email
        </button>
    )
}

export default SignUpWithEmail_authButton;