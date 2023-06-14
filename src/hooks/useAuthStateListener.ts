import { useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { createCurrentUser, deleteCurrentUser } from '../redux/reduxSlice'
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from '../firebase.config'
import { doc, setDoc} from 'firebase/firestore'

export const useAuthStateListener = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {dispatch(deleteCurrentUser())}, [])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if( user ) {
                let extractNameWithBigFirstLetter;
                if( user.displayName === null && user.email) {
                    let extractName = user.email?.substring(0,user.email.indexOf('@'))
                    extractNameWithBigFirstLetter = extractName?.charAt(0).toUpperCase() + extractName?.slice(1)
                }
                else{
                    extractNameWithBigFirstLetter = user.displayName 
                }
                dispatch(createCurrentUser({
                    userName: extractNameWithBigFirstLetter,
                    email: user.email,
                    userID: user.uid,
                    userPhotoURL: user.photoURL,
                }))
            }
            else{
                dispatch(deleteCurrentUser())
            }
        })
    }, [auth])
};

