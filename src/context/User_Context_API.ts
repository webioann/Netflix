import { createContext, useContext } from 'react'

export interface User {
    name: string | null
    email: string | null
    user_id: string | null
    photoURL: string | null
}
type MochUser = {
    title: string
}

export const Context_API = createContext<MochUser | undefined>(undefined);

export const useUser_Context = () => {
    const user = useContext(Context_API)
    if(user === undefined) throw new Error('useUser_Context must be used with User_Context_API')
    
    return user;
}
