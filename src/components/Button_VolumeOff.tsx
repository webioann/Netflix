import React from 'react'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import '../style/buttons.scss'

const Button_VolumeOff = () => {
    return (
        <button className="small-circle circle-button">
            <HiVolumeOff size={10} color='#fff'/>
        </button>
    )
}
export default Button_VolumeOff;