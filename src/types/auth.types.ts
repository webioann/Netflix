// props for function login, signup with email
export interface IAuthButtonProps {
    email: string;
    password: string;
    setWarning: (param: boolean) => void
}
export interface ICurrentUser {
    currentUser_Name: string | null
    currentUser_Email: string | null
    currentUser_ID: string | null
    currentUser_PhotoURL: string | null
}

