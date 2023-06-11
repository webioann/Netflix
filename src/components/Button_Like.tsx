import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import '../style/buttons.scss'

const Button_Like = () => {
    return (
        <button className="small-circle-button">
            <AiOutlineLike size={12} color='#fff'/>
        </button>
    )
}
export default Button_Like;