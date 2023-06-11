// props for function login, signup with email
export interface IAuthButtonProps {
    email: string;
    password: string;
    setWarning: (param: boolean) => void
}
export interface ICurrentUser {
    name: string | null
    email: string | null
    user_id: string | null
    photoURL: string | null
}

