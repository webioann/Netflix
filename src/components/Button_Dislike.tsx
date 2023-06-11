import React from 'react'
import { AiOutlineDislike } from 'react-icons/ai'
import '../style/buttons.scss'

const Button_Dislike = () => {
    return (
        <button className="small-circle-button">
            <AiOutlineDislike size={12} color='#fff'/>
        </button>
    )
}
export default Button_Dislike;