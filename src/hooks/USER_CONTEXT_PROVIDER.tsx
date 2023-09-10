import React, { useEffect, useState, createContext, ReactNode } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase.config'

interface IUser {
    name: string | null
    email: string | null
    user_id: string | null
    photoURL: string | null
}
type childrenType = {
    children: ReactNode[] | ReactNode 
}

export const UserContext = createContext<IUser | null>( null )

const USER_CONTEXT_PROVIDER: React.FC<childrenType> = ({ children }) => {

    const [USER, setUSER] = useState<IUser | null>(null) 

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
                setUSER({
                    name: extractNameWithBigFirstLetter,
                    email: user.email,
                    user_id: user.uid,
                    photoURL: user.photoURL,
                })
            }
            else{
                setUSER(null)
            }
        })
    }, [auth])

    return (
        <UserContext.Provider value={USER}>
            <section>
                { children }
            </section>
        </UserContext.Provider>
    )
    
}

export default USER_CONTEXT_PROVIDER;
