import React from 'react'
import { useAppDispatch } from '../redux/store'
import { deleteCurrentUser } from '../redux/reduxSlice'
import { signOut } from "firebase/auth"
import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import '../style/signout-button.scss'

const SignoutButton = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signOutUser = async () => {
        try {
            await signOut(auth)
            dispatch(deleteCurrentUser())
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
export default SignoutButton;