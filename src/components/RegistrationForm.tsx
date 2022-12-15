import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import '../style/registration-form.scss'

interface IFormPropsFunc {
    setEmail: (value: string) => void
    email: string
    setPassword: (value: string) => void
    password: string
}

const RegistrationForm: React.FC<IFormPropsFunc> = ({setEmail, setPassword, email, password}) => {

    const [inputType,setInputType] = useState<string>('password')
    const [emailFocus, setEmailFocus] = useState<boolean>(false)
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false)

    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }

    return (
        <form className='hybrid-form'
            onSubmit={event => event.preventDefault() }>
            <div className='email-box'>
                <label className={emailFocus || email.length > 0 ? 'input-label-up' : 'input-label'}>
                    Email
                </label>
                <div className='email-input-box'>
                    <input className='reg-input'
                        onFocus={() => {
                            setEmailFocus(true)
                            setPasswordFocus(false)
                        }}
                        onBlur={() => {
                            email.length == 0 ? setEmailFocus(false) : setEmailFocus(true)
                        }}
                        type='email' 
                        onChange={event => setEmail(event.target.value)}/>
                    <HiOutlineMail className='input-icon'/>
                </div>
            </div>
            <div className='password-box'>
                <label className={passwordFocus || password.length > 0 ? 'input-label-up' : 'input-label'}>
                    Password
                </label>
                <div className='password-input-box'>
                    <input className='reg-input'
                        onFocus={() => {
                            setPasswordFocus(true)
                            setEmailFocus(false)
                        }}
                        onBlur={() => {
                            password.length == 0 ? setPasswordFocus(false) : setPasswordFocus(true)
                        }}
                        type={inputType} 
                        onChange={event => setPassword(event.target.value)}/>
                    {inputType === 'text' 
                        ? <GoEye className='input-icon' onClick={showPassword}/> 
                        : <GoEyeClosed className='input-icon' onClick={showPassword}/>
                    }
                </div>
            </div>
        </form>
    )
}

export default RegistrationForm;