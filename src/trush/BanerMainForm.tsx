import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import '../style/baner-main-form.scss'

const BanerMainForm = () => {

    const [inputFocus, setInputFocus] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    return (
        <form className="baner-form"
            onSubmit={event => event.preventDefault()}>
            <label className={inputFocus || value.length > 0 ? 'baner-label-up' : 'baner-label'}>
                Адреса електронної пошти
            </label>
            <input className='baner-input'
                onChange={(event) => setValue(event.currentTarget.value)}
                onFocus={() => setInputFocus(true)}
                onBlur={() => {value.length == 0 ? setInputFocus(false) : setInputFocus(true)}}
                value={value}
                type='text'/>
            <button className='baner-button'
                onClick={(event) => event.preventDefault()}>
                Почати
                <MdOutlineArrowForwardIos className='baner-button-arrow'/>
            </button>
        </form>
    )
}
export default BanerMainForm;