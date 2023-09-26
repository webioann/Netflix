import React from 'react'
import { MdInfoOutline } from 'react-icons/md'
import '../style/buttons.scss'

const Button_MoreInfo = () => {
    // mock link button
    return (
        <button className='square-button'>
            <MdInfoOutline color='#fff' size={24}/>
            <span className='more-info-button-text'>More Info</span>
        </button>
    )
}

export default Button_MoreInfo;