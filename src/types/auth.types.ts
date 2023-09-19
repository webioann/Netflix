import { SetStateAction } from 'react'

export interface IAuthButtonProps {
    email: string;
    password: string;
    setWarning: (param: boolean) => void;
    setError: React.Dispatch<SetStateAction<string | null>>
}
