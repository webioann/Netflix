import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { UserContext } from '../hooks/USER_CONTEXT_PROVIDER'
import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import '../style/auth-button.scss'

const Signout_Button = () => {

    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const signOutUser = async () => {
        try {
            await signOut(auth)
            setUser && setUser(null)
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

export default Signout_Button;