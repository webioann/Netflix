import React from 'react'
import { SlDislike } from 'react-icons/sl'
import '../style/buttons.scss'

const Button_Dislike = () => {
    return (
        <button className="small-circle circle-button">
            <SlDislike size={10} color='#fff'/>
        </button>
    )
}
export default Button_Dislike;