import React, { useEffect, useState, createContext, ReactNode } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase.config'
import { signOut } from "firebase/auth"

interface IUser {
    name: string | null
    email: string | null
    user_id: string | null
    photoURL: string | null
}
type childrenType = {
    children: ReactNode[] | ReactNode 
}
type UserContextType = {
    user: IUser | null
    setUser: React.Dispatch<React.SetStateAction<IUser | null>> | null
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: null
})

const USER_CONTEXT_PROVIDER: React.FC<childrenType> = ({ children }) => {

    const [user, setUser] = useState<IUser | null>(null) 
    console.log(user)

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
                setUser({
                    name: extractNameWithBigFirstLetter,
                    email: user.email,
                    user_id: user.uid,
                    photoURL: user.photoURL,
                })
            }
            else{
                setUser(null)
            }
        })
        return () => {signOut(auth)}
    }, [auth])
// ===========================================================
// ===========================================================
    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            <section>
                { children }
            </section>
        </UserContext.Provider>
    )
    
}

export default USER_CONTEXT_PROVIDER;
