import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import '../style/registration-form.scss'

interface IFormPropsFunc {
    setEmail: (value: string) => void;
    setPassword: (value: string) => void
}

const RegistrationForm: React.FC<IFormPropsFunc> = ({setEmail, setPassword}) => {

    const [inputType,setInputType] = useState<string>('password')

    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }

    return (
        <form onSubmit={event => event.preventDefault() }>
            <div className='email-box'>
                <label>Email</label>
                <div className='email-input-box'>
                    <input 
                        type='email' 
                        placeholder='email'
                        onChange={event => setEmail(event.target.value)}/>
                    <HiOutlineMail className='input-icon'/>
                </div>
            </div>
            <div className='password-box'>
                <label>Password</label>
                <div className='password-input-box'>
                    <input 
                        type={inputType} 
                        placeholder='password'
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