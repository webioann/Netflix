import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';

import '../style/signin-form.scss'

const SigninForm = () => {

    const [inputFocus, setInputFocus] = useState<boolean>(false)

    return (
        <form className="baner-form">
            <label className={inputFocus ? 'baner-label-up' : 'baner-label'}>
                Адреса електронної пошти
            </label>
            <input onFocus={() => setInputFocus(true)}
                className='baner-input' 
                type='text'/>
            <button className='baner-button'>
                Почати
                <IoIosArrowForward className='baner-button-arrow'/>
            </button>
        </form>
    )
}
export default SigninForm;